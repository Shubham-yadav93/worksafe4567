// backend/server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Route
app.post('/api/send', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, Email, and Message are required fields.' });
  }

  // Email to company - formatted to show it's from the user
  const adminMailOptions = {
    from: `"WorkSafe Contact Form" <${process.env.EMAIL_USER}>`,
    replyTo: email, // When you hit reply, it will reply to user's email
    to: process.env.EMAIL_USER,
    subject: `New Contact Form: ${subject} - From ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">
                <a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Subject:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${subject}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px;">
            <h3 style="color: #1f2937; margin-bottom: 15px;">Message:</h3>
            <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #fef2f2; border-left: 4px solid #dc2626; border-radius: 4px;">
            <p style="margin: 0; color: #991b1b;">
              <strong>Quick Action:</strong> Click "Reply" to respond directly to ${name} at ${email}
            </p>
          </div>
        </div>
        
        <div style="background: #1f2937; padding: 20px; text-align: center; color: #9ca3af; font-size: 12px;">
          <p style="margin: 0;">This email was sent from your WorkSafe contact form</p>
          <p style="margin: 5px 0 0 0;">Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      </div>
    `,
  };

  // Auto-reply email to user
  const userMailOptions = {
    from: `"Dial:4567" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Dear ' + name.split(' ')[0] + ', Thank You for your Enquiry.',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Dial:4567</h1>
          <p style="color: #dbeafe; margin: 10px 0 0 0;">WorkSafe Solutions</p>
        </div>
        
        <div style="background: #ffffff; padding: 40px 30px;">
          <h2 style="color: #1f2937; margin-top: 0; font-size: 24px;">
            Dear ${name.split(' ')[0]}, Thank You for your Enquiry.
          </h2>
          
          <p style="color: #4b5563; line-height: 1.8; font-size: 16px; margin: 20px 0;">
            We have received your details. Our team will contact you shortly.
          </p>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #2563eb;">
            <h3 style="color: #1e40af; margin-top: 0; font-size: 16px;">What happens next?</h3>
            <ul style="color: #4b5563; line-height: 1.8; margin: 10px 0; padding-left: 20px;">
              <li>Our team will review your enquiry</li>
              <li>We'll contact you within 2 hours during business hours</li>
              <li>For emergencies, call us at <strong>1800 210 4567</strong></li>
            </ul>
          </div>
          
          <div style="margin: 30px 0; padding: 25px; background: #fef2f2; border-radius: 8px;">
            <h3 style="color: #dc2626; margin-top: 0; font-size: 16px;">Your Submission Details</h3>
            <table style="width: 100%; color: #4b5563; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Submitted:</strong></td>
                <td style="padding: 8px 0;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
              </tr>
            </table>
          </div>
          
          <p style="color: #4b5563; line-height: 1.8; font-size: 16px; margin: 30px 0 20px 0;">
            With Regards<br>
            <strong style="color: #1f2937;">Team Dial: 4567</strong>
          </p>
        </div>
        
        <div style="background: #f9fafb; padding: 25px 30px; border-top: 1px solid #e5e7eb;">
          <div style="text-align: center; margin-bottom: 20px;">
            <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">Need immediate assistance?</p>
            <a href="tel:18002104567" style="display: inline-block; background: #dc2626; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
              📞 1800 210 4567
            </a>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 5px 0;">
              45, Chimbai Rd, Bandra West, Mumbai 400050
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 5px 0;">
              📧 support@worksafe4567.com | 🌐 Available 24/7
            </p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
    
    console.log(`✅ Emails sent successfully for ${name} (${email})`);
    res.status(200).json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending emails:', error);
    res.status(500).json({ error: 'Failed to send emails. Please try again.' });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

// Start Server
app.listen(port, () => {
  console.log(`✅ Backend server running at http://localhost:${port}`);
  console.log(`📧 Email service configured with: ${process.env.EMAIL_USER}`);
});