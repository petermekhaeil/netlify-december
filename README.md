# netlify-december

Showcase the features of [Netlify](https://www.netlify.com/) that were [highlighted each day in December](https://www.netlify.com/blog/2021/12/01/highlighting-a-different-netlify-feature-each-day-in-december/).

Demo: [https://netlify-december.netlify.app](https://netlify-december.netlify.app)

## Features

- [Publish your site assets with the Netlify CLI](#publish-your-site-assets-with-the-netlify-cli)
- [Supercharge your local development with Netlify Dev](#supercharge-your-local-development-with-netlify-dev)
- [Using "netlify open" to jump directly to your project's admin page](#using-netlify-open-to-jump-directly-to-your-projects-admin-page)
- [Serverless functions made simple - Just add files](#serverless-functions-made-simple---just-add-files)
- [How to test serverless functions locally](#how-to-test-serverless-functions-locally)
- [Setting up redirects on Netlify](#setting-up-redirects-on-netlify)
- [Accepting form submissions without a server](#accepting-form-submissions-without-a-server)

## Publish your site assets with the Netlify CLI

```bash
# Install the Netlify CLI
npm install -g netlify-cli

# Deploy to a unique preview URL
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Supercharge your local development with Netlify Dev

```bash
# Run a local development of the site
netlify dev
```

## Using "netlify open" to jump directly to your project's admin page

```bash
# Directly open Netlify Admin for this application
netlify open
```

## Serverless functions made simple - Just add files

Serveless function: [pokemon](https://github.com/petermekhaeil/netlify-december/blob/master/netlify/functions/pokemon.js)

## How to test serverless functions locally

Netlify Dev will detect serverless functions and serve them locally:

```
ntl dev
```

Local URL: [http://localhost:8888/.netlify/functions/pokemon](http://localhost:8888/.netlify/functions/pokemon)

## Setting up redirects on Netlify

Redirections are stored in a file named `_redirects`:

Example redirection:

```
/api/* /.netlify/functions/:splat 200
```

The above will redirect any paths starting with `/api/` to `/.netlify/functions/`.

Example: [https://netlify-december.netlify.app/api/pokemon](https://netlify-december.netlify.app/api/pokemon)

## Accepting form submissions without a server

Netlify will parse your HTMLs during deployment and look for `<form>` elements with the `data-netlify="true"` attributes:

```html
<form name="jokes" data-netlify="true">
  <input type="text" name="joke" />
  <button type="submit">Share</button>
</form>
```

The submissions of these forms be saved in the Netlify Admin.
