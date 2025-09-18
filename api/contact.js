import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message, formType, service } = req.body;

    // Determine recipient based on form type
    const getRecipient = (type) => {
      switch (type) {
        case 'demo': return 'info@syncsphereofficial.com';
        case 'sales': return 'sales@syncsphereofficial.com';
        case 'finance': return 'finance@syncsphereofficial.com';
        case 'compliance': return 'compliance@syncsphereofficial.com';
        case 'security': return 'security@syncsphereofficial.com';
        default: return 'info@syncsphereofficial.com';
      }
    };

    // Create email content
    const emailContent = `
      <h2>New ${formType} Inquiry from SyncSphere Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><small>Sent from SyncSphere website contact form</small></p>
    `;

    // Send email
    await resend.emails.send({
      from: 'SyncSphere Website <noreply@resend.dev>',
      to: getRecipient(formType),
      subject: `New ${formType} inquiry from ${name}`,
      html: emailContent,
    });

    // Send auto-reply to user
    await resend.emails.send({
      from: 'SyncSphere Team <noreply@resend.dev>',
      to: email,
      subject: 'Thank you for contacting SyncSphere',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Our team is excited to help you with your AI automation needs.</p>
        <br>
        <p>Best regards,<br>The SyncSphere Team</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}