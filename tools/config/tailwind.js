const { workspaceRoot } = require('@nx/devkit');

const rootTailwindConfig = require(`${workspaceRoot}/libs/ui-theme/src/config/tailwind.config.js`);

module.exports = (tailwindConfig = {}) => {
  const rootContent = rootTailwindConfig.content || [];
  const projectContent = tailwindConfig.content || [];
  const content = [...rootContent, ...projectContent];

  const rootSafelist = rootTailwindConfig.safelist || [];
  const projectSafelist = projectContent.safelist || [];
  const safelist = [...rootSafelist, ...projectSafelist];

  const rootPlugins = rootTailwindConfig.plugins || [];
  const projectPlugins = tailwindConfig.plugins || [];
  const plugins = [...rootPlugins, ...projectPlugins];

  return {
    ...rootTailwindConfig,
    ...tailwindConfig,
    content,
    safelist,
    plugins,
  };
};
