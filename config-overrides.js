const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env, {
    meaninglessFileNames: ["index", "styles"],
  });
  return config;
}