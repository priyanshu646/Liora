# Liora Luxee Wellness

## Run locally

Use Node.js 20.6 or newer. Install the project dependencies:

```sh
npm ci
```

### Configure email

Copy `backend/.env.example` to `backend/.env` and enter the SMTP settings for the mailbox that will send contact messages. For Gmail, use an app password rather than your regular account password. Keep `backend/.env` private; it is excluded from Git.

The contact form delivers messages to `info@lioraluxeewellness.com` by default. Change `CONTACT_TO` in `backend/.env` if the company wants to use a different inbox.
The success response means the SMTP server accepted the message; it does not confirm delivery to the inbox. If a submission is missing, check spam/quarantine and the SMTP provider's delivery or bounce logs.

### Start the app

Open two terminals in the project folder:

```sh
npm run dev:backend
```

```sh
npm run dev
```

Open the frontend at [http://localhost:5173](http://localhost:5173). Vite forwards `/api` requests to the backend on port 3001. The backend accepts and emails the form submission only when valid SMTP settings are configured.

For production, deploy the backend as a separate Node.js service and configure the web server or hosting platform to forward `/api/contact` requests to it. If that proxy is on a different host, set `HOST=0.0.0.0` and restrict backend access to the trusted proxy. Set `TRUST_PROXY=true` only when the backend is reachable exclusively through a trusted proxy that sets `X-Forwarded-For`. Do not expose SMTP credentials in frontend code or commit them to the repository.

## Other commands

- `npm run build` — build the frontend for production.
- `npm run lint` — lint the frontend source.
