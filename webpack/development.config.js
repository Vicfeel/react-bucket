const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack');

const {output} = require('./env');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: output.path,
        hot: true,
        open: true,
        historyApiFallback: true,
        publicPath: output.publicPath,
    },
    output: {
        ...output,
        filename: "[name].js"
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ]
};