# SVG Sprites

To use SVG sprites, you can use the built-in component `Icon`

## How to use a sprite

```html
<icon name="logo"></icon>
```

## How to build the sprite sheet

Just drop files into `/src/assets/svg/[name].svg`. It will build the sprite sheet using [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) and add it to your document.

The `Icon` component will render to `<svg><use xlink:href="#[name]"></svg>` referring to the symbol in the sprite sheet.
