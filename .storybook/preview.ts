import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';

// Import the Compodoc generated documentation using require
// This avoids TypeScript issues with JSON imports
const docJson = require('../documentation.json');
setCompodocJson(docJson);

// The styles will be loaded by the component itself

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
