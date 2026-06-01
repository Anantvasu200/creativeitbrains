# Creative IT Brains Full-Stack Website

React + Tailwind CSS frontend with a Node.js Express backend and Nodemailer-powered enquiry form.

## Setup

```bash
npm install
Copy-Item .env.example .env
npm run dev
```

The frontend lives in `frontend/` and runs on `http://localhost:5173`.
The backend lives in `backend/` and runs on `http://localhost:5000`.

## Nodemailer

Add SMTP credentials to `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
MAIL_FROM="Creative IT Brains <your-email@example.com>"
MAIL_TO=leads@example.com
```

For Gmail, use an app password rather than your normal account password.
