# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form submissions directly to your email.

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** - you'll need this

### 3. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} <{{from_email}}>
Company: {{company}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. **Copy the Template ID** - you'll need this

### 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy the Public Key** - you'll need this

### 5. Update Environment Variables

Edit your `.env` file and replace the placeholder values:

```properties
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### 6. Update Your Email Address

In `src/components/Contact.js`, line 28, replace `'your-email@example.com'` with your actual email:

```javascript
to_email: 'your-actual-email@gmail.com',
```

## 🔧 Template Variables

The following variables are sent to your email template:

- `{{from_name}}` - Contact's name
- `{{from_email}}` - Contact's email
- `{{company}}` - Contact's company (optional)
- `{{subject}}` - Selected subject
- `{{message}}` - Contact's message
- `{{to_email}}` - Your email address

## 📧 Email Providers Setup

### Gmail Setup

1. Enable 2-factor authentication
2. Generate an App Password
3. Use your Gmail address and App Password in EmailJS

### Outlook/Hotmail Setup

1. Use your Microsoft account credentials
2. May need to enable "Less secure app access"

### Custom SMTP

1. Get SMTP settings from your email provider
2. Enter server, port, and authentication details

## 🚀 Testing

1. Restart your development server: `npm start`
2. Fill out the contact form on your website
3. Check your email for the test message
4. Check EmailJS dashboard for send statistics

## 📊 Free Tier Limits

EmailJS free tier includes:

- 200 emails per month
- EmailJS branding in emails
- Basic support

For higher volume, consider upgrading to a paid plan.

## 🔐 Security Notes

- Environment variables starting with `REACT_APP_` are safe for frontend use
- EmailJS handles the secure email sending
- Your SMTP credentials are never exposed in the frontend code
- Rate limiting is built-in to prevent spam

## 🐛 Troubleshooting

### Common Issues:

1. **401 Unauthorized**: Check your Public Key
2. **404 Not Found**: Verify Service ID and Template ID
3. **Emails not received**: Check spam folder, verify email template

### Debug Mode:

Add this to see detailed error messages:

```javascript
console.log("EmailJS response:", response);
```

## 📞 Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available in your dashboard

---

Once configured, your contact form will send emails directly to your inbox! 🎉
