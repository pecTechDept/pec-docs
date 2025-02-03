---
id: concepts-email-setup
title: Email Setup
---

# Setting Up Email (Nodemailer)

This section includes detailed instructions that help developers configure, test, and debug the email functionality in this project.

## Overview

The purpose of this email functionality is to provide a communication channel for customer inquiries to reach the admin. The project uses Nodemailer, an email-sending library specifically designed for Node.js applications, to handle all email-related tasks. By setting up a transporter object with appropriate SMTP credentials, developers can create and send emails.

## Configuration

*   **Required:** Node.js v6.0.0
*   Ensure that the Nodemailer module is installed in the project:

```
npm install nodemailer
```

#### Environment Variables[​](#environment-variables "Direct link to Environment Variables")

This is a list of the environment viables used for configuration:

```
EMAIL_USER=username
EMAIL_PASS=password
EMAIL_HOST=smtp_server
EMAIL_PRIMARY=admin_email
```

#### Code Example[​](#code-example "Direct link to Code Example")

This is a sample configuration for Nodemailer:

```
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // email username
      pass: process.env.EMAIL_PASS, // email password
    },
  });
```




## Contacting Support

If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at [techdept@premiumeventconsulting.co.za](mailto:techdept@premiumeventconsulting.co.za).