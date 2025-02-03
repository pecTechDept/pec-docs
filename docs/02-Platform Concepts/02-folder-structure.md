---
id: concepts-folder-structure
title: Folder Structure
---

# Architecture

This section provides a high-level overview of the web application's architecture. Understanding the organization of the app's files and directories is essential for developers, administrators, and anyone who wants to navigate and maintain the system.

## High-Level Overview[​](#high-level-overview "Direct link to High-Level Overview")

PecPoint is designed as a modern, user-friendly, and scalable platform. The project uses Next.js App Router to handle routing. All components, styles, and utility functions are placed in the `src` directory. Here's an overview of the primary folders at the root level and their signficance to the project:

```
|-- public                              # Static files
|-- assets  
|   |-- images                             
|   |-- svg                             
|-- src                                 # Next.js source directory
|   |-- app                             # Next.js App Router
|   |   |-- about                       # (Module) About page
|   |   |   `-- page.tsx             
|   |   |-- api                         # Global API route handlers
|   |   |   |-- email                 
|   |   |       `-- route.ts                 
|   |   |-- data                        # For JSON files
|   |   |   `-- card-content.json                     
|   |   |   `-- home-gallery.json                     
|   |   |   `-- portfolio-gallery.json                     
|   |   |   `-- service-content.json                    
|   |   |-- contact                     # (Module) Contact page
|   |   |   `-- page.tsx
|   |   |-- portfolio                   # (Module) Portfolio page
|   |   |   `-- page.tsx
|   |   |-- services                    # (Module) Services page
|   |   |   `-- page.tsx
|   |   |-- fonts.tsx                   # Global fonts
|   |   |-- globals.css                 # Global css styles
|   |   |-- layout.tsx                  # App layout
|   |   `-- not-found.tsx               # Not Found page
|   |   `-- page.tsx                    # Home page
|   |   |-- robots.ts                   # Robots.txt
|   |   `-- sitemap.ts                  # Sitemap.xml
|   |-- assets                      
|   |   `-- images.js                      
|   |-- components                      # Global components
|   |   |-- common
|   |   |   `-- CallToAction.tsx
|   |   |   `-- Hero.tsx
|   |   |   `-- Logo.tsx
|   |   |   `-- MasonryGallery.tsx
|   |   |   `-- MasonryGallery.tsx
|   |   |   `-- SocialLinks.tsx
|   |   |-- forms
|   |   |   `-- ContactForm.tsx
|   |   |-- layout
|   |   |   `-- Footer.tsx
|   |   |   `-- Header.tsx
|   |   |   `-- Nav.tsx
|   |   |   `-- NavLinks.tsx
|   |   |-- services-page
|   |   |   `-- ServiceGrid.tsx
|   |   |-- ui
|   |   |   `-- ImageSlider.tsx
|   |   |   `-- ScrollToToButton.tsx
|   |-- email                             
|   |   `-- generateEmailContent.tsx
|   |   `-- sendEmail.ts
|   |-- styles
|   |   `-- swiper.css                  # SwiperJs  styles
|   |-- types                           
|       `-- ImageData.ts
|-- .eslintrc.json                      # ESLint configuration
|-- .gitattributes                      # Git LFS configuration
|-- .gitignore                          
|-- README.md  
|-- next-env.d.ts
|-- next-env.d.zip
|-- next.config.mjs 
|-- package-lock.json
|-- package.json  
|-- postcss.config.mjs                  # PostCSS configuration 
|-- server.js                           # Server for Node.js
|-- tailwind.config.ts                  # TailwindCSS configuration
`-- tsconfig.json                       # Typescript configuration
```

Understanding the architecture and components of the web application is vital for developers and administrators as it provides a clear view of each folder's purpose and what they can expect to find there. It forms a foundations for maintenance, troubleshooting, and scaling. In the following section will discuss the instructions for running the site locally, building for production, and deploying.

## Contacting Support
If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at [techdept@premiumeventconsulting.co.za](mailto:techdept@premiumeventconsulting.co.za).