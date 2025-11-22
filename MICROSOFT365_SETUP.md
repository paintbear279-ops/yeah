# Microsoft 365 Email Setup Guide

This guide will help you connect your Microsoft 365 email to receive form submissions.

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click **Sign Up** (it's free - 200 emails/month)
3. Create your account and verify your email

## Step 2: Connect Microsoft 365 Email

1. Log into your EmailJS dashboard
2. Go to **Email Services** → **Add New Service**
3. Select **Microsoft 365 / Outlook**
4. Click **Connect Account**

### Microsoft 365 Authentication:

You'll be redirected to Microsoft to authorize EmailJS. You have two options:

**Option A: Use Your Microsoft Account (Easiest)**
- Click "Sign in with Microsoft"
- Enter your Microsoft 365 email and password
- Grant permissions to EmailJS
- You're done!

**Option B: Use App Password (More Secure)**
1. Go to https://account.microsoft.com/security
2. Enable **Two-factor authentication** (if not already enabled)
3. Go to **App passwords** → **Create a new app password**
4. Name it "EmailJS" and copy the password
5. In EmailJS, select "Use App Password" and paste it

5. After connecting, you'll see your **Service ID** - copy this!

## Step 3: Create Email Template

1. In EmailJS dashboard, go to **Email Templates** → **Create New Template**

2. **Template Name**: Cash Out Request

3. **Subject Line**: 
```
New Cash Out Request from {{from_name}}
```

4. **Content** (copy and paste this):
```
New Cash Out Request Received

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Wallet Identifier: {{wallet_address}}
Payment Method: {{payment_method}}
Payout Handle: {{payout_handle}}
Terms Accepted: Yes

Submitted on: {{date}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please review and process this request.

You can reply directly to: {{from_email}}
```

5. **Settings**:
   - **To Email**: `{{to_email}}` (or directly enter your email: `your-email@yourdomain.com`)
   - **From Name**: Secured Ethereum
   - **From Email**: Your Microsoft 365 email (e.g., `info@yourdomain.com`)
   - **Reply To**: `{{from_email}}` (so you can reply directly to the user)

6. Click **Save**
7. Copy your **Template ID**

## Step 4: Get Your Public Key

1. In EmailJS dashboard, go to **Account** → **General**
2. Find your **Public Key** (looks like: `abc123xyz456`)
3. Copy it

## Step 5: Update Your Code

Open `script.js` and find these lines (around line 85-90):

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

Replace with:
```javascript
emailjs.init("your-actual-public-key-here");
```

Then find (around line 100):
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

Replace with:
```javascript
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

And find (around line 95):
```javascript
to_email: 'YOUR_EMAIL@yourdomain.com',
```

Replace with your actual Microsoft 365 email:
```javascript
to_email: 'info@yourdomain.com', // Your actual email
```

## Step 6: Test It!

1. Open `cashout.html` in your browser
2. Fill out the form with test data
3. Click "Check Eligibility"
4. Check your Microsoft 365 inbox (and spam folder)
5. You should receive an email with all the form details!

## Troubleshooting

**Email not received?**
- Check your spam/junk folder
- Verify your email address in the template settings
- Check browser console (F12) for errors
- Make sure you clicked "Save" on the EmailJS template

**"Service ID not found" error?**
- Double-check you copied the Service ID correctly
- Make sure you saved the email service in EmailJS

**"Template ID not found" error?**
- Double-check you copied the Template ID correctly
- Make sure you saved the template in EmailJS

**Microsoft authentication failed?**
- Try using an App Password instead
- Make sure 2FA is enabled on your Microsoft account
- Check that EmailJS has the correct permissions

## Security Tips

1. **Don't share your Public Key** - Keep it private
2. **Use environment variables** for production (if using a build system)
3. **Set up SPF/DKIM records** in your domain DNS to prevent emails going to spam
4. **Consider adding reCAPTCHA** to prevent spam submissions

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Microsoft 365 Support: https://support.microsoft.com/

