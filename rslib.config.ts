import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      syntax: 'es2021',
      dts: true,
      shims: {
        esm: {
          __dirname: true,
        },
      },
    },
    {
      format: 'cjs',
      syntax: 'es2021',
    },
  ],
});
