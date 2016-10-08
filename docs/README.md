![logo](logo.png)

# Introduction

This boilerplate is targeted towards large, serious projects and assumes you are somewhat familiar with Webpack and `vue-loader`. Make sure to also read [`vue-loader`'s documentation](http://vuejs.github.io/vue-loader/index.html) for common workflow recipes.

If you just want to try out `vue-loader` or whip out a quick prototype, use the [webpack-simple](https://github.com/vuejs-templates/webpack-simple) template instead.

## What's different

This template is a fork of the official [webpack](https://github.com/vuejs-templates/webpack) template. A few more opinionated features and conventions are bundled with Bourgeon:

- **[Routing](routing.md)** using official [vue-router](https://github.com/vuejs/vue-router) and conventions
- **[i18n](i18n.md)** using [vue-i18n](https://github.com/kazupon/vue-i18n), [yaml-loader](https://github.com/okonet/yaml-loader) and conventions
- **[Store](store.md)** simple convention for sharing data between components
- **[SVG Sprites](svg.md)** using [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) and conventions
- **[Stylus](stylus.md)** using [stylus-loader](https://github.com/shama/stylus-loader) and some custom mixins

### Soon

- **[Preloader]()** using [resource-loader]() and conventions

## Quickstart

To use this template, scaffold a project with [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

## Configuration

Bourgeon favors convention over configuration. But some configuration can be passed in the plugin call:

```javascript
// main.js
Vue.use(Bourgeon, {
  locales: ['fr', 'en']
})
```
