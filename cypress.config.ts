import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 2560,
  viewportHeight: 1700,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    supportFile: 'cypress/support/component.ts',
  },
});
