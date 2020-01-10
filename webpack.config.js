const JsConfigWebpackPlugin = require('js-config-webpack-plugin');

module.exports = {
  plugins: [
    // Multi threading babel loader configuration with caching for .js and .jsx files
    // see https://github.com/namics/webpack-config-plugins/tree/master/packages/js-config-webpack-plugin/config
    new JsConfigWebpackPlugin(),
  ],
};
