import type { StorybookConfig } from '@storybook/react-vite';

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    '../apps/**/src/**/*.stories.@(ts|tsx|js|jsx)',
    '../packages/ui/**/*.stories.@(ts|tsx|js|jsx)',
    '../packages/ui/**/*.mdx',

    '../packages/styles/docs/**/*.mdx',
  ],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  viteFinal: async (config) => {
    config.resolve ??= {};

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  },
};

export default config;
