import { createServer } from 'node:http';
import nodemailer from 'nodemailer';

const port = Number(process.env.PORT || 3001);
const host = process.env.HOST || '127.0.0.1';
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const contactRecipient = process.env.CONTACT_TO || 'info@lioraluxeewellness.com';
const contactSender = process.env.SMTP_FROM || smtpUser;
const trustProxy = process.env.TRUST_PROXY === 'true';
const maxBodyBytes = 8 * 1024;
const rateLimitWindowMs = 15 * 60 * 1000;
const maxRequestsPerWindow = 5;
const requestsByAddress = new Map();

if (!process.env.SMTP_HOST || !smtpUser || !smtpPass || !contactSender) {
  console.error('Missing SMTP configuration. Copy backend/.env.example to backend/.env and fill in the SMTP settings.');
  process.exit(1);
}

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('PORT must be a valid port number.');
  process.exit(1);
}

if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
  console.error('SMTP_PORT must be a valid port number.');
  process.exit(1);
}

const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 20000,
});

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(JSON.stringify(body));
}

class RequestError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

function getRequestAddress(request) {
  const forwardedFor = request.headers['x-forwarded-for'];
  if (trustProxy && typeof forwardedFor === 'string') {
    const proxyAddress = forwardedFor.split(',')[0].trim();
    if (proxyAddress) {
      return proxyAddress;
    }
  }
  return request.socket.remoteAddress || 'unknown';
}

function isRateLimited(address) {
  const now = Date.now();
  const previous = requestsByAddress.get(address);
  if (!previous || now - previous.startedAt >= rateLimitWindowMs) {
    if (requestsByAddress.size >= 10000) {
      for (const [storedAddress, entry] of requestsByAddress) {
        if (now - entry.startedAt >= rateLimitWindowMs) {
          requestsByAddress.delete(storedAddress);
        }
      }
      if (requestsByAddress.size >= 10000) {
        return true;
      }
    }
    requestsByAddress.set(address, { startedAt: now, count: 1 });
    return false;
  }

  previous.count += 1;
  return previous.count > maxRequestsPerWindow;
}

async function readJsonBody(request) {
  const chunks = [];
  let bytes = 0;

  for await (const chunk of request) {
    bytes += chunk.length;
    if (bytes > maxBodyBytes) {
      throw new RequestError(413, 'Request body is too large.');
    }
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new RequestError(400, 'Request body must be valid JSON.');
  }
}

function getContactDetails(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'Please provide valid contact details.' };
  }

  const fields = ['name', 'surname', 'email', 'phone', 'message'];
  const details = {};
  for (const field of fields) {
    if (typeof body[field] !== 'string') {
      return { error: 'Please complete all contact fields.' };
    }
    details[field] = body[field].trim();
  }

  if (
    details.name.length < 1
    || details.name.length > 80
    || details.surname.length < 1
    || details.surname.length > 80
    || details.email.length > 254
    || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)
    || details.phone.length < 5
    || details.phone.length > 30
    || !/^[+()\d\s.-]+$/.test(details.phone)
    || (details.phone.match(/\d/g) || []).length < 5
    || details.message.length < 1
    || details.message.length > 5000
  ) {
    return { error: 'Please check your details and try again.' };
  }

  return { details };
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;

  if (pathname !== '/api/contact') {
    sendJson(response, 404, { error: 'Not found.' });
    return;
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    sendJson(response, 405, { error: 'Method not allowed.' });
    return;
  }

  if (!request.headers['content-type']?.startsWith('application/json')) {
    sendJson(response, 415, { error: 'Content-Type must be application/json.' });
    return;
  }

  if (isRateLimited(getRequestAddress(request))) {
    sendJson(response, 429, { error: 'Too many messages. Please try again later.' });
    return;
  }

  try {
    const body = await readJsonBody(request);
    const { details, error } = getContactDetails(body);
    if (error) {
      sendJson(response, 400, { error });
      return;
    }

    const fullName = `${details.name} ${details.surname}`;
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(details.email);
    const safePhone = escapeHtml(details.phone);
    const safeMessage = escapeHtml(details.message);

    await mailer.sendMail({
      from: contactSender,
      to: contactRecipient,
      replyTo: details.email,
      subject: `New contact message from ${fullName}`,
      text: [
        'LIORA LUXEE WELLNESS',
        'New website enquiry',
        '',
        `Name: ${fullName}`,
        `Email: ${details.email}`,
        `Phone: ${details.phone}`,
        '',
        'MESSAGE',
        details.message,
        '',
        'Reply directly to this email to respond to the enquiry.',
      ].join('\n'),
      html: `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>New website enquiry</title>
          </head>
          <body style="margin:0;padding:32px 16px;background-color:#f5f2ed;font-family:Arial,Helvetica,sans-serif;color:#302b25;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:620px;margin:0 auto;background-color:#ffffff;border:1px solid #e8e1d8;border-radius:12px;overflow:hidden;">
              <tr>
                <td style="padding:28px 32px;background-color:#0c594b;color:#ffffff;">
                  <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:3px;">LIORA</p>
                  <p style="margin:0;color:#e5eee9;font-size:11px;letter-spacing:2px;">LUXEE WELLNESS</p>
                </td>
              </tr>
              <tr>
                <td style="padding:32px;">
                  <p style="margin:0 0 8px;color:#8a7768;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Website contact form</p>
                  <h1 style="margin:0 0 24px;color:#0c594b;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:400;">New enquiry received</h1>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #eee9e2;color:#81776d;font-size:13px;width:100px;">Name</td>
                      <td style="padding:12px 0;border-bottom:1px solid #eee9e2;color:#302b25;font-size:14px;font-weight:600;">${safeName}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #eee9e2;color:#81776d;font-size:13px;">Email</td>
                      <td style="padding:12px 0;border-bottom:1px solid #eee9e2;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#0c594b;text-decoration:underline;">${safeEmail}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #eee9e2;color:#81776d;font-size:13px;">Phone</td>
                      <td style="padding:12px 0;border-bottom:1px solid #eee9e2;font-size:14px;"><a href="tel:${safePhone}" style="color:#0c594b;text-decoration:underline;">${safePhone}</a></td>
                    </tr>
                  </table>
                  <h2 style="margin:28px 0 12px;color:#302b25;font-size:14px;font-weight:700;">Message</h2>
                  <div style="padding:18px 20px;background-color:#f7f5f1;border-left:3px solid #0c594b;border-radius:4px;color:#403a33;font-size:14px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;">${safeMessage}</div>
                  <p style="margin:24px 0 0;color:#81776d;font-size:13px;line-height:1.6;">Reply to this email to respond directly to ${safeName}.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:18px 32px;border-top:1px solid #eee9e2;color:#8c8177;font-size:11px;line-height:1.5;">This enquiry was submitted through the Liora Luxee Wellness website.</td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    sendJson(response, 200, { message: 'Your message has been sent.' });
  } catch (error) {
    if (error instanceof RequestError) {
      sendJson(response, error.statusCode, { error: error.message });
      return;
    }

    console.error(
      'Contact email delivery failed:',
      error instanceof Error ? error.message : 'Unknown email delivery error.',
    );
    sendJson(response, 502, { error: 'We could not send your message right now. Please try again later.' });
  }
});

server.on('error', (error) => {
  console.error('Contact backend failed to start:', error.message);
  process.exitCode = 1;
});

server.listen(port, host, () => {
  console.log(`Contact backend listening at http://${host}:${port}`);
});
