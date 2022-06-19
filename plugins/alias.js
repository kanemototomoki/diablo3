const path = require('path');

module.exports = async function (context, options) {
  return {
    name: 'alias',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            '@': path.resolve(__dirname),
          },
        },
      };
    },
  };
};
