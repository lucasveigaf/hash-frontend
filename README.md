# `hash frontend monorepo`

Hash monorepo containing three packages:

`frontend`: the main frontend application, which contains the anticipation webcomponent, the base HTML file and the JS entrypoint. It makes use of `stylesystem` and `financial-calculator`.

`stylesystem`: a collection of webcomponents following hash's style system. It contains several webcomponents such as: `<h-box>`, `<h-flex>` and `<h-currency-input>`.

`financial-calculator`: a lib for calculating anticipation taxes given a MDR value.

## Usage

When you first clone the repository, it's necessary to install all dependencies and bootstraping them as we are using lerna to manage the monorepo.

```
git clone git@github.com:lucasveigaf/hash.git
cd hash
yarn
lerna bootstrap
```

### Building

```
yarn build
```

### Development with hot reloading

```
yarn dev
```

### Running tests

```
yarn test
```

### Running stylesystem docs

```
yarn docs
```

### Running linters

```
yarn lint
```

## Known limitations

Since Edge has no Shadow DOM and doesn't recognize the :host CSS pseudo-element, the webcomponents available in `stylesystem` don't work as expected. Although they don't actually break the page, their styles aren't applied. This is the case even with popular polyfills such as `ShadyCSS`.

Webcomponent frameworks such as Polymer uses different strategies to overcome this limitation. However, `stylesystem` is built using vanilla js, extending HTMLElement directly and using only the Custom Elements V1 standard specs.

One possible workaround is to not use the :host pseudo-element at all and using `<template>`, which we can clone and append into the HTMLElement. The template would need to have a `<style>` block as it's direct child and use traditional CSS for styling.