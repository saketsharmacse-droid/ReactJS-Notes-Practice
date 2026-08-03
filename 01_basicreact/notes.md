# Learning react

- react is a library.
- framework is stricter and library is more casual.
- react ka origin facebook ke ek bug se hua: phantom message error.
- react is used to simplify building the complex frontends.
- react ko use krke hum single page web applications bna sakte hai sirf.

- jab node install kiya tha , toj uske saath ek npm aaya tha, node package manager.
- npm is a installation package used to install multiple packages.
- but kabhi kabhi humein install nhi krna rhta, directly use krna rhega, toh ek new cheez aaya npx
- node package executer
-  npx create-react-app, yeh ek utility ha, ek software hai jiske through hum apna ek new project bna sakte hai.
- create-react-app is a utility but very bulky, takes a lot of time to install.
- run krne ke liye: npm run start or npm start
- npm run build (build scriptchalane ke liye)

``` html 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="/manifest.json" />
    <!--
      Notice the use of  in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  <script defer src="/static/js/bundle.js"></script></head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```
- SEO nhi hota hai react ke through.

- react ka project iss way mei bnn jayega, but this is not used much kyoki this is a very much bulkier approach.
- we will be using vite which is a bundler.
- npm create vite@latest 
