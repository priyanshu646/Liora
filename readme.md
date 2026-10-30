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

### Run frontend and backend together

Run the frontend and backend as one service:

```sh
npm start
```

This builds the frontend and serves it together with the contact API from the same server. Open [http://localhost:3001](http://localhost:3001). The backend accepts and emails form submissions only when valid SMTP settings are configured.

For production, deploy this Node.js service and configure the hosting provider's environment variables for SMTP. The server uses the provider's `PORT` setting and listens on all interfaces by default. `HOST` can be set to override the bind address. Set `TRUST_PROXY=true` only when the backend is reachable exclusively through a trusted proxy that sets `X-Forwarded-For`. Do not expose SMTP credentials in frontend code or commit them to the repository.

For frontend-only development with Vite, run `npm run dev` and `npm run dev:backend` in separate terminals; Vite forwards `/api` requests to the backend on port 3001.

## Other commands

- `npm run build` — build the frontend for production.
- `npm run lint` — lint the frontend source.
