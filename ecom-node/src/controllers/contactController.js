const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// POST /api/contact
const createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // 1. Validation
    const errors = {};
    if (!name || name.trim() === '') {
      errors.name = 'Full Name is required';
    }
    if (!email || email.trim() === '') {
      errors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Please provide a valid email address';
      }
    }
    if (!subject || subject.trim() === '') {
      errors.subject = 'Subject is required';
    }
    if (!message || message.trim() === '') {
      errors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // 2. Save message to MongoDB
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      subject: subject.trim(),
      message: message.trim()
    });

    // 3. Email Notification via Nodemailer
    let emailSent = false;
    let emailError = null;

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const mailOptions = {
          from: `"E-Mart System" <${smtpUser}>`,
          to: 'singhrituraj8077@gmail.com',
          replyTo: email,
          subject: 'New Contact Message from E-Mart',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <div style="background: linear-gradient(135deg, #4f46e5, #06b6d4); color: white; padding: 24px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.05em;">E-Mart Contact Message</h1>
                <p style="margin: 4px 0 0 0; opacity: 0.9;">You received a new inquiry from the Contact Us form.</p>
              </div>
              <div style="padding: 24px; background-color: #ffffff;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-weight: bold; color: #475569; width: 120px;">Name</td>
                    <td style="padding: 12px 0; color: #1e293b;">${contact.name}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-weight: bold; color: #475569;">Email</td>
                    <td style="padding: 12px 0; color: #1e293b;"><a href="mailto:${contact.email}" style="color: #4f46e5; text-decoration: none;">${contact.email}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-weight: bold; color: #475569;">Phone</td>
                    <td style="padding: 12px 0; color: #1e293b;">${contact.phone || 'N/A'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-weight: bold; color: #475569;">Subject</td>
                    <td style="padding: 12px 0; color: #1e293b; font-weight: 500;">${contact.subject}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-weight: bold; color: #475569; vertical-align: top;">Message</td>
                    <td style="padding: 12px 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${contact.message}</td>
                  </tr>
                </table>
              </div>
              <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8;">
                Received on: ${new Date(contact.createdAt).toLocaleString()} | E-Mart E-Commerce System
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
      } catch (err) {
        console.error('🚨 Nodemailer Error: Failed to send email alert:', err);
        emailError = err.message;
      }
    } else {
      console.log('⚠️ Nodemailer: SMTP credentials not set. Message saved to DB only.');
    }

    return res.status(201).json({
      success: true,
      message: 'Your message has been received successfully!',
      data: contact,
      emailSent,
      emailError
    });
  } catch (err) {
    console.error('🚨 Contact Controller Error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to save contact message. Please try again later.'
    });
  }
};

module.exports = { createContact };
