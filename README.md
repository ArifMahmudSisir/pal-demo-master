
# Prime Automation Limited




## 🔗 Project Live Link
https://pal-demo-tau.vercel.app/



## Tech Stack

 Vuejs 3 (Composition API), Vite, TailwindCSS




## Project Structure

This project follows a standard directory structure to keep files organized and easy to locate.

```
.
├── src/               
│   ├── components/
        ├── layout/
            ├── Footer.vue
            ├── Navbar.vue
│   ├── assets/
        ├── css/
        ├── images/
            ├── icons/
            ├── partners/
        ├── data/
            ├── products.json       # (Not important)
    ├── pages/
        ├── About.vue
        ├── Blogs.vue
        ├── Home.vue
        ├── News.vue
        ├── Products.vue
        ├── products/
            ├── Realist.vue
            ├── Realist/
                ├── Ozone.vue
                ├── Ozone/
                    ├── RMO.vue
                    ├── ROGOZONE.vue


├── public/
        ├── images/
            ├── events/
            ├── products/
                ├── realist/
                ├── audaces/
                    .
                    .   
                    .
                ├── product-n/
├── routers/
        ├── index.js
├── stores/
        ├── counter.js

├── App.vue
├── main.js
├── style.js
├── .gitignore
├── favicon.io
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
├── package-lock.json
├── README.md
```

** You can modify this structure as you needed just be carefull on router/index.js for all the routes of components. **

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

Node.js (v16+ recommended, latest LTS is best) - [Download Node.js](https://nodejs.org/en/download)
npm (comes bundled with Node.js) or an alternative package manager like yarn or pnpm.
## Installation

Follow these steps to set up the project locally:

1. Clone the repository

```bash
 https://github.com/oshanto-ctrl/pal-demo.git
```

2. Navigate into the project directory

```bash
  cd pal    
```

3. Install dependencies

This command will install all the necessary packages listed in package.json

```bash
  npm install
```

## Tech Stack & dependencies

This project uses a combination of production and development dependencies to create a robust development experience and a performant final product.

Production Dependencies
These libraries are included in the final build and are required for the application to run in the browser.

**vue:** The core Vue 3 framework for building the user interface.

**vue-router:** The official router for handling client-side navigation.

**pinia:** A state management library for managing shared application data.

**@heroicons/vue:** A set of beautifully crafted SVG icons for Vue.

**aos:** A library for creating "Animate On Scroll" effects.

**vue3-carousel:** A flexible and touch-enabled carousel component for Vue 3.


## Development Dependencies
These tools are used for development, building, and optimizing the project. They are not included in the production build.

**vite:** A fast and modern build tool that serves as the development server and bundler.

**@vitejs/plugin-vue:** The official Vite plugin to enable Vue Single File Components.

**tailwindcss:** A utility-first CSS framework for rapid UI development.

**postcss:** A tool for transforming CSS with JavaScript plugins.

**autoprefixer:** A PostCSS plugin to parse CSS and add vendor prefixes.

## Scripts to run

* The package.json includes several scripts to streamline development and deployment.


```bash
 npm run dev
```
Starts the Vite development server with hot-reload. Use this for local development. The app will typically be available at http://localhost:xxxx.



```bash
  npm run build
```
Compiles the application for production. It bundles and minifies all assets, creating an optimized dist folder ready for deployment.



```bash
  npm run preview
```
Starts a local server to preview the production build from the dist folder. Use this to test the app as it will appear online after deployment.




```bash
  npm run watch
```
Runs the build command in watch mode. It will automatically rebuild the dist folder whenever source files change. Useful for testing the production output locally.


## 🌐 Deployment
This project is designed to be deployed as a static site. The deployment process involves two main steps:

* **Build the Project**
Run the build script to generate the static files.
bash
```bash
npm run build
```

* **Deploy the dist Folder**
After the build is complete, a dist folder will be created. Upload the contents of this folder to your static hosting provider.
You can deploy the dist folder to any of the following services (and many more):

Vercel,
Netlify,
GitHub Pages,
Firebase Hosting

Most modern hosting platforms can be configured to automatically run the npm run build command whenever you push to your main branch.
