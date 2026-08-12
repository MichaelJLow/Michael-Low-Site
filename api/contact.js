const EMAIL = 'contact@workwithlayer.com';

function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return {};
}

function clean(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 4000);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = readBody(req);
  if (clean(body.website)) {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const company = clean(body.company);
  const message = clean(body.message);

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: 'Please add your name, work email, and a short note about the workflow.',
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please use a valid work email.' });
  }

  const subject = `Workflow review request from ${company || name}`;
  const text = [
    `Name: ${name}`,
    `Work email: ${email}`,
    `Company: ${company || 'Not given'}`,
    '',
    'Where work is getting stuck:',
    message,
  ].join('\n');

  try {
    if (process.env.RESEND_API_KEY) {
      const from = process.env.RESEND_FROM || 'Layer website <beth.t@example.com>';
      const sent = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: [EMAIL],
          reply_to: email,
          subject,
          text,
        }),
      });

      if (!sent.ok) {
        const detail = await sent.text();
        throw new Error(detail || 'Resend rejected the message');
      }

      return res.status(200).json({ ok: true });
    }

    const sent = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company,
        message,
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
        _replyto: email,
      }),
    });

    const payload = await sent.json().catch(() => ({}));
    if (!sent.ok || payload.success === false || payload.success === 'false') {
      throw new Error(payload.message || 'Form service rejected the message');
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form failed', error);
    return res.status(500).json({
      ok: false,
      error: `Something went wrong sending the request. Email ${EMAIL} and it will reach us directly.`,
    });
  }
}
