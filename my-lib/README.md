# my-lib

A Vue.js Library project

## Webpack Configuration Overview

#### Development Setup

For a development setup, we would need a webpack-dev-server running a
demo/testing page(s) where the developer can play and test your components.

#### Build for dev/test setup

For building the library, we would not minify and uglify our bundle, For
easing the development debugging.

#### Build for production Setup

For building the library for production, we minify and uglify our bundle, for
a performant loading time and security.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
