# Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/9a1eade9-ddd2-43eb-b5bf-b37f63e8478e/deploy-status)](https://app.netlify.com/sites/xivapi-sdk/deploys)

Live [preview](https://xivapi-sdk.netlify.app/) of the documentation site.

All of the documentation for XIVAPI-SDK is written with [VitePress](https://vitepress.vuejs.org/). See their documentation for what is supported in markdown, plugins and customization.

## How to run documentation locally

### Setup

Install all dependencies

```sh
yarn
```

### Preview

Serve the documentation site in the local server.

```sh
docs:dev
```

VitePress will start a hot-reloading development server at `http://localhost:3000`.

### Build

```sh
docs:build
```

### Serve

```sh
docs:serve
```
