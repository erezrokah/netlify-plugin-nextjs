![Next.js on Netlify Build Plugin](next-on-netlify.png)

# Essential Next.js Build Plugin

<p align="center">
  <a aria-label="npm version" href="https://www.npmjs.com/package/@netlify/plugin-nextjs">
    <img alt="" src="https://img.shields.io/npm/v/@netlify/plugin-nextjs">
  </a>
  <a aria-label="MIT License" href="https://img.shields.io/npm/l/@netlify/plugin-nextjs">
    <img alt="" src="https://img.shields.io/npm/l/@netlify/plugin-nextjs">
  </a>
</p>

This build plugin is a utility for supporting Next.js on Netlify. To enable server-side rendering and other framework-specific features in your Next.js application on Netlify, you will need to install this plugin for your app.

## Table of Contents

- [Installation and Configuration](#installation-and-configuration)
- [Docs](#docs)
- [Credits](#credits)

## Installation and Configuration

### For new Next.js sites

As of v3.0.0, all new sites deployed to Netlify with Next.js will automatically install this plugin for a seamless experience deploying Next.js on Netlify!

This means that you don't have to do anything — just build and deploy your site to Netlify as usual and we'll handle the rest.

You're able to [remove the plugin](https://docs.netlify.com/configure-builds/build-plugins/#remove-a-plugin) at any time by visiting the **Plugins** tab for your site in the Netlify UI.

### For existing Next.js sites

### UI Installation

If your Next.js project was already deployed to Netlify pre-3.0.0, use the Netlify UI to [install the Essential Next.js Build Plugin](http://app.netlify.com/plugins/@netlify/plugin-nextjs/install) in a few clicks.

### Manual installation

1\. Create a `netlify.toml` in the root of your project. Your file should include the plugins section below:

```toml
[build]
  command = "npm run build"
  publish = "out"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Note: the plugin does not run for statically exported Next.js sites (aka sites that use `next export`). To use the plugin, you should use the `[build]` config in the .toml snippet above. Be sure to exclude `next export` from your build script.

 You can also add context-specific properties and environment variables to your `netlify.toml`. Read more about [deploy contexts](https://docs.netlify.com/configure-builds/file-based-configuration/#deploy-contexts) in our docs. For example:

```toml
[context.production.environment]
NEXT_SERVERLESS = "true"
NODE_ENV = "production"
```

2\. From your project's base directory, use `npm`, `yarn`, or any other Node.js package manager to add this plugin to `devDependencies` in `package.json`.

```
npm install --save @netlify/plugin-nextjs
```

or

```
yarn add @netlify/plugin-nextjs
```

Read more about [file-based plugin installation](https://docs.netlify.com/configure-builds/build-plugins/#file-based-installation) in our docs.

## Docs

You can find more documentation on the Essential Next.js plugin [here](https://github.com/netlify/netlify-plugin-nextjs/tree/main/docs).

## Credits

This package extends the project [next-on-netlify](https://github.com/netlify/next-on-netlify), authored originally by [Finn Woelm](https://github.com/finnwoelm).
