const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    // https://github.com/storybookjs/storybook/issues/10204
    '@storybook/addon-viewport/register',
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register',
  ],
  // https://dev.to/aprietof/next-js-typescript-storybook-the-really-simple-guide-2019-fei?signin=true
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [require.resolve('babel-preset-react-app')],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');

    // https://storybook.js.org/docs/configurations/custom-webpack-config/#examples
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules', 'sass-loader'],
      include: [path.resolve(__dirname, '../src/'), path.resolve(__dirname, './')],
    });

    return config;
  },
};
