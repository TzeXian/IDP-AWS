const { workspaceRoot } = require('@nx/devkit');

/**
 * @type {import('tailwindcss').Config}
 * https://tailwindcss.com/docs/configuration
 */
module.exports = {
  content: [`${workspaceRoot}/libs/ui-components/src/**/*{js,ts,jsx,tsx}`],
  darkMode: 'media', // or 'media' or 'class'
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      // https://tailwindcss.com/docs/customizing-colors
      colors: {},
    },
  },
  plugins: [
    // https://tailwindcss.com/docs/typography-plugin
    require('@tailwindcss/typography'),
    // https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
    require('@tailwindcss/aspect-ratio'),
    // https://github.com/tailwindlabs/tailwindcss-container-queries
    require('@tailwindcss/container-queries'),
  ],
};
