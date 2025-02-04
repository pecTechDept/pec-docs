"use strict";(self.webpackChunkpec_docs=self.webpackChunkpec_docs||[]).push([[241],{1320:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"Platform Concepts/concepts-deployment","title":"Deployment","description":"This section will guide developers on and deploying the application to production.","source":"@site/docs/02-Platform Concepts/04-deployment.md","sourceDirName":"02-Platform Concepts","slug":"/Platform Concepts/concepts-deployment","permalink":"/pec-docs/Platform Concepts/concepts-deployment","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"concepts-deployment","title":"Deployment"},"sidebar":"tutorialSidebar","previous":{"title":"Email Setup","permalink":"/pec-docs/Platform Concepts/concepts-email-setup"},"next":{"title":"Coding Standards","permalink":"/pec-docs/Development Guidelines/guidelines-coding-standards"}}');var i=r(4848),s=r(8453);const o={id:"concepts-deployment",title:"Deployment"},l="Deployment",c={},a=[{value:"Overview of Deployment Platform",id:"overview-of-deployment-platform",level:2},{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"Server.js File",id:"serverjs-file",level:3},{value:"Homepage Key",id:"homepage-key",level:3},{value:"Update Scripts",id:"update-scripts",level:3},{value:"Deploy application using Directdmin",id:"deploy-application-using-directdmin",level:3},{value:"Contacting Support",id:"contacting-support",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"deployment",children:"Deployment"})}),"\n",(0,i.jsx)(n.p,{children:"This section will guide developers on and deploying the application to production."}),"\n",(0,i.jsx)(n.h2,{id:"overview-of-deployment-platform",children:"Overview of Deployment Platform"}),"\n",(0,i.jsx)(n.p,{children:"The PEC App is hosted through a Node.js server via DirectAdmin, accessible through WebSpaceBar, a South African based hosting provider. DirectAdmin is a web hosting control panel that provides a user-friendly interface for managing web hosting accounts. It facilitated the deployment and management of Node.js applications through its Node.js Manager feature. This allows users to install Node.js on their servers and create applications without needing extensive technical knowledge. Users can specify application settings, upload code, manage depenencies using npm, and configure environment variables directly from the the DirectAdmin interface."}),"\n",(0,i.jsx)(n.h2,{id:"deployment-steps",children:"Deployment Steps"}),"\n",(0,i.jsx)(n.h3,{id:"serverjs-file",children:"Server.js File"}),"\n",(0,i.jsxs)(n.p,{children:["Ensure that the root directory of the application has a ",(0,i.jsx)(n.code,{children:"server.js"})," file with the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"const { createServer } = require('http')\r\nconst { parse } = require('url')\r\nconst next = require('next')\r\n\r\nconst dev = process.env.NODE_ENV !== 'production'\r\nconst hostname = process.env.NODE_ENV !== 'production'? 'localhost' : 'premiumeventconsulting.co.za'\r\nconst port = process.env.PORT || 3000\r\n\r\nconst app = next({ dev, hostname, port })\r\nconst handle = app.getRequestHandler()\r\n\r\napp.prepare().then(() => {\r\n  createServer(async (req, res) => {\r\n    try {\r\n      const parsedUrl = parse(req.url, true)\r\n      const { pathname, query } = parsedUrl\r\n\r\n      if (pathname === '/a') {\r\n        await app.render(req, res, '/a', query)\r\n      } else if (pathname === '/b') {\r\n        await app.render(req, res, '/b', query)\r\n      } else {\r\n        await handle(req, res, parsedUrl)\r\n      }\r\n    } catch (err) {\r\n      console.error('Error occurred handling', req.url, err)\r\n      res.statusCode = 500\r\n      res.end('internal server error')\r\n    }\r\n  }).listen(port, (err) => {\r\n    if (err) throw err\r\n    console.log(`> Ready on http://${hostname}:${port}`)\r\n  })\r\n})\n"})}),"\n",(0,i.jsx)(n.h3,{id:"homepage-key",children:"Homepage Key"}),"\n",(0,i.jsxs)(n.p,{children:["Add a homepage key in the ",(0,i.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\r\n    "homepage": "https://premiumeventconsulting.co.za",\r\n    "scripts": {\r\n    ...\r\n  },\r\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"update-scripts",children:"Update Scripts"}),"\n",(0,i.jsxs)(n.p,{children:["Before building the application, ensure that the ",(0,i.jsx)(n.code,{children:"package.json"})," has the follwining scripts:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\r\n   "scripts": {\r\n    "dev": "node server.js",\r\n    "build": "next build",\r\n    "start": "NODE_ENV=production node server.js"\r\n  }\r\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then, run ",(0,i.jsx)(n.code,{children:"npm run build"})," to build the application."]}),"\n",(0,i.jsx)(n.h3,{id:"deploy-application-using-directdmin",children:"Deploy application using Directdmin"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Zip the entire project"}),", excluding the following files:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:".git"}),"\n",(0,i.jsx)(n.li,{children:"node_modules"}),"\n",(0,i.jsx)(n.li,{children:"package-lock"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Log into DirectAdmin:"})," Contact the admin department to gain access DirectAdmin control panel via WebSpaceBar."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Navigate to Node.js Setup:"})," Go to the ",(0,i.jsx)(n.em,{children:"Extra Features"})," section and select ",(0,i.jsx)(n.em,{children:"Setup Node.js App."})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create a New Application:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.em,{children:"Create Application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fill in the necessary details:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Node.js Version:"})," Choose the ",(0,i.jsx)(n.code,{children:"18.20.4"})," version"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application Mode:"})," Set the environment to ",(0,i.jsx)(n.em,{children:"Production"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application Root Directory:"})," Specify where the application files are stored (e.g., /home/username/domains/domain.com/public_html/). Contact the tech department for more information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application URL:"})," ",(0,i.jsx)(n.code,{children:"premiumeventconsulting.co.za"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Startup File:"})," ",(0,i.jsx)(n.code,{children:"server.js"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Upload Application Files:"})," Upload the zip file to the File Manager"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Install Dependencies:"})," Click the run npm install ",(0,i.jsx)(n.strong,{children:"button"})," to install required dependencies."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Manage the Application:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can start, stop, or restart your application from the Node.js App section in DirectAdmin."}),"\n",(0,i.jsx)(n.li,{children:"Always zip and upload the files to the File Manager for every update."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"contacting-support",children:"Contacting Support"}),"\n",(0,i.jsxs)(n.p,{children:["If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at ",(0,i.jsx)(n.a,{href:"mailto:techdept@premiumeventconsulting.co.za",children:"techdept@premiumeventconsulting.co.za"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);