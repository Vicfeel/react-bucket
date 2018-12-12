const merge = require('webpack-merge');

module.exports = (env, argv) => {
    process.env.mode = argv.mode;
    const baseConfig = require('./webpack/base.config');
    const envConfig = require(`./webpack/${argv.mode}.config`);

    return merge(baseConfig, envConfig);
}
