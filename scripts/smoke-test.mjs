import { pluginFontOpenSans } from '../dist/index.js';

const plugin = pluginFontOpenSans();

if (plugin.name !== 'plugin-font-open-sans') {
  throw new Error(`Unexpected plugin name: ${plugin.name}`);
}

if (
  !plugin.builderConfig?.source?.preEntry?.some((entry) =>
    entry.endsWith('static/open-sans.css'),
  )
) {
  throw new Error('Expected Open Sans CSS preEntry to be registered');
}
