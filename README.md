# rspress-plugin-font-open-sans

Use Open Sans as the default font in your Rspress website.

<p>
  <a href="https://npmjs.com/package/rspress-plugin-font-open-sans">
   <img src="https://img.shields.io/npm/v/rspress-plugin-font-open-sans?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## About

Open Sans is a humanist sans serif typeface designed by Steve Matteson, Type Director of Ascender Corp.

See [Google Fonts - Open Sans](https://fonts.google.com/specimen/Open+Sans/about)

![image](https://github.com/rstackjs/rspress-plugin-font-open-sans/assets/7237365/de552371-5aab-4deb-b2fa-f7a66fff6706)

## Usage

Install:

```bash
npm add rspress-plugin-font-open-sans -D
```

Add plugin to your `rspress.config.ts`:

```ts
// rspress.config.ts
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';

export default {
  plugins: [pluginFontOpenSans()],
};
```
