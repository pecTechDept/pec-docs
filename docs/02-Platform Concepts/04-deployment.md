---
id: concepts-deployment
title: Deployment
---
# Deployment

This section will guide developers on and deploying the application to production.

## Overview of Deployment Platform

The PEC App is hosted through a Node.js server via DirectAdmin, accessible through WebSpaceBar, a South African based hosting provider. DirectAdmin is a web hosting control panel that provides a user-friendly interface for managing web hosting accounts. It facilitated the deployment and management of Node.js applications through its Node.js Manager feature. This allows users to install Node.js on their servers and create applications without needing extensive technical knowledge. Users can specify application settings, upload code, manage depenencies using npm, and configure environment variables directly from the the DirectAdmin interface.

## Deployment Steps

### Server.js File

Ensure that the root directory of the application has a `server.js` file with the following code:

```
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.NODE_ENV !== 'production'? 'localhost' : 'premiumeventconsulting.co.za'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

### Homepage Key

Add a homepage key in the `package.json`:

```
{
    "homepage": "https://premiumeventconsulting.co.za",
    "scripts": {
    ...
  },
}
```

### Update Scripts

Before building the application, ensure that the `package.json` has the follwining scripts:

```
{
   "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}
```

Then, run `npm run build` to build the application.

### Deploy application using Directdmin

1.  **Zip the entire project**, excluding the following files:
    *   .git
    *   node\_modules
    *   package-lock
2.  **Log into DirectAdmin:** Contact the admin department to gain access DirectAdmin control panel via WebSpaceBar.
3.  **Navigate to Node.js Setup:** Go to the _Extra Features_ section and select _Setup Node.js App._
4.  **Create a New Application:**
    *   Click on _Create Application_
    *   Fill in the necessary details:
        *   **Node.js Version:** Choose the `18.20.4` version
        *   **Application Mode:** Set the environment to _Production_
        *   **Application Root Directory:** Specify where the application files are stored (e.g., /home/username/domains/domain.com/public\_html/). Contact the tech department for more information.
        *   **Application URL:** `premiumeventconsulting.co.za`
        *   **Startup File:** `server.js`
5.  **Upload Application Files:** Upload the zip file to the File Manager
6.  **Install Dependencies:** Click the run npm install **button** to install required dependencies.
7.  **Manage the Application:**
    *   You can start, stop, or restart your application from the Node.js App section in DirectAdmin.
    *   Always zip and upload the files to the File Manager for every update.

## Contacting Support

If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at [techdept@premiumeventconsulting.co.za](mailto:techdept@premiumeventconsulting.co.za).