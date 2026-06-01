import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { assertMailConfig, createTransporter } from './mailer.js';
import { validateLead } from './validation.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173'
}));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'creativeitbrains-api' });
});

app.post('/api/contact', async (req, res) => {
  const validationError = validateLead(req.body);
  if (validationError) {
    return res.status(400).json({ ok: false, error: validationError });
  }

  const configError = assertMailConfig();
  if (configError) {
    return res.status(500).json({ ok: false, error: configError });
  }

  const { name, email, company, phone, budget, service, message } = req.body;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `New project enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Phone: ${phone || 'Not provided'}`,
        `Service: ${service || 'Not selected'}`,
        `Budget: ${budget || 'Not selected'}`,
        '',
        message
      ].join('\n'),
      html: `
        <h2>New project enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not selected'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not selected'}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replaceAll('\n', '<br />')}</p>
      `
    });

    res.json({ ok: true, message: 'Enquiry sent successfully.' });
  } catch (mailError) {
    res.status(500).json({
      ok: false,
      error: 'Could not send email. Check SMTP credentials and backend logs.'
    });
  }
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
