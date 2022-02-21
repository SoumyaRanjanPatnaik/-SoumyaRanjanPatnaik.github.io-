/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".tsx"];
  return config;
};
