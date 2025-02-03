---
id: concepts-getting-started
title: Getting Started
---

# Getting Started

This section will guide developers on setting up the local environment, running the app for development.

## Prerequisites

### Software Requirements

*   Node.js 18 or higher
*   macOS, Windows, and Linux are supported
*   Git for version control
*   A code editor such as Visual Studio Code (VSCode) is recommended for writing and editing code.

### Project Setup

To install this project, follow these steps:
```
git clone --depth=1 https://github.com/pecTechDept/pecWebsite.git 
cd project-name
npm install
```

### Environment Variables

To configure the email server for sending messages through Nodemailer, you'll need to set several environment variables. Create a `.env.local` file in the root directory of the project and include the following entries:

```
EMAIL_USER=username
EMAIL_PASS=password
EMAIL_HOST=smtp_server
EMAIL_PRIMARY=admin_email
SITE_URL=http://premiumeventconsulting.co.za/
```

Ensure that you replace the placeholders with the actual SMTP credentials of the company. Send an email to [techdept@premiumeventconsulting.co.za](mailto:techdept@premiumeventconsulting.co.za) to get the credentials. Add the `.env.local.` file to the `.gitignore` file to keep it out of version control.

## Running the Application Locally[​](#running-the-application-locally "Direct link to Running the Application Locally")

To start project development, run the following command:

```
npm run dev
```

## Building the Application[​](#building-the-application "Direct link to Building the Application")

#### Production Build[​](#production-build "Direct link to Production Build")

To generate a production-ready build, run the following command:

```
npm run build
```

This code convert's the project's code into executable code that can run in the browser or Node.js.

#### Verifying Build[​](#verifying-build "Direct link to Verifying Build")

To serve the build files locally, run the following command:

```
npm run start
```

This command ensures that the build works as expected.

## Contacting Support

If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at [techdept@premiumeventconsulting.co.za](mailto:techdept@premiumeventconsulting.co.za).