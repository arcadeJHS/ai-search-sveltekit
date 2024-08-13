## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase, demo or preview app.

## Building a library of custom elements (web components)

Here we are using the Svelte's Custom Elements API: `https://svelte.dev/docs/custom-elements-api`.

Build Svelte components defined in `src/lib` into framework-agnostic custom elements.

### How To
Create Svelte components in `src/lib`, adding the Svelte element on top of the component source code (see https://svelte.dev/docs/custom-elements-api): 

```html
<svelte:options customElement="PREFIX-counter" />
```

> **Note:** The "PREFIX-" prefix allows you to define prefixed custom elements. 
> Define it in `vite.webcomponents.config`, setting a value for the variable `LIBRARY_PREFIX`.

Then run:

```bash
npm run build:webcomponents
```

This command builds the components in `dist-web-components` folder, in `es` e `umd` formats.

Then include the compiled js library in a html page, and use the web components (see `/DEMO/index.html`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Components DEMO - mjs</title>
    <style>
        /* Your CSS styles go here */
    </style>
</head>
<body>
    <stg-counter></stg-counter>
    <stg-chat-search></stg-chat-search>

    <!-- 
    Most modern browsers support ES modules. 
    However, there are still some relatively recent browsers that do not support <script type="module">. 
    Here are a few:
        - Internet Explorer 11 and earlier: Internet Explorer does not support ES modules at all.
        - Microsoft Edge (Legacy): The legacy version of Microsoft Edge (before the switch to Chromium) does not support ES modules.
        - Safari 10.1 and earlier: Safari added support for ES modules in version 11.
        - Firefox 59 and earlier: Firefox added support for ES modules in version 60.
        - Chrome 60 and earlier: Chrome added support for ES modules in version 61.
    -->
    
    <!-- Load ES module scripts - if supported by the web browser -->
    <script type="module" src="ai.search.web.components.20240812173708.es.js"></script>
    
    <!-- Fallback for older browsers - if the browser does not support script type="module" and es files -->
    <script nomodule src="ai.search.web.components.20240812173708.umd.js"></script>
</body>
</html>
```

## Building a svelte library

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
