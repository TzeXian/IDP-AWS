const { join } = require('path');
const { workspaceRoot } = require('@nx/devkit');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const createTailwindConfig = require(`${workspaceRoot}/tools/config/tailwind`);

module.exports = createTailwindConfig({
  content: [
    ...createGlobPatternsForDependencies(__dirname),
    join(
      __dirname,
      '{src,pages,components,containers,layouts,screens}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
  ],
});
