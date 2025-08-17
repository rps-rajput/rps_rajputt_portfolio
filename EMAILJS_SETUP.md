# EmailJS Setup Guide

To enable the contact form to send emails, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

## 2. Create Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions for your provider

## 3. Create Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent through the portfolio contact form.
```

**Template Variables to include:**
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`
- `{{to_email}}`

## 4. Get Your Credentials
- Service ID: Found in "Email Services" section
- Template ID: Found in "Email Templates" section  
- Public Key: Found in "Account" → "General"

## 5. Configure Environment Variables
Create a `.env` file in your project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Contact Form
- Start your development server: `npm run dev`
- Navigate to the contact page
- Fill out and submit the form
- Check your email (rps.rajputt@gmail.com) for the message

## Troubleshooting
- Make sure your email service is properly configured in EmailJS
- Check that all environment variables are set correctly
- Verify your template includes all the required variables
- Check the browser console for any error messages

The contact form will automatically send all messages to **rps.rajputt@gmail.com**.
