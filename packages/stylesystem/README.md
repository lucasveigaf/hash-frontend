# `hash-stylesystem`

Hash stylesystem built with vanilla webcomponents.

Checkout the docs at `/stories/` or by running `yarn storybook`.

## Usage

You should import the registration utility for the webcomponents and use it only once in the application if you are working with a SPA.

However, if you reload the page to go to another route, the utility should be called again.

After registering the webcomponents, you are free to use any of its webcomponents as any ordinary html element.

```
import { registerComponents } from '@hash-mono/stylesystem';

registerComponents();
...
```

After that, in your html file, you can use it:

```
<body>
  <h-box background-color="red">
    <h-text font-size="20px">Hey, I'm a h-text inside a h-box</h-text>
  </h-box>
</body>
```

You can also import the default theme which contains the styles for the default variations of the webcomponents.

```
import { theme } from '@hash-mono/stylesystem';

console.log(theme.fontSizes[2]) // outputs "16px"
console.log(theme.borderRadius) // outputs "4px"
console.log(theme.fontFamily) // outputs "Source Sans Pro"
console.log(theme.colors.grey[0]) // outputs "#656565"
```

You can check all constants at `src/theme.js`