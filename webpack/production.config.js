const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {output} = require('./env');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    output: {
        ...output,
        filename: '[name].[chunkhash].min.js',
        chunkFilename: '[name].[chunkhash].min.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].min.css',
            chunkFilename: '[id].[contenthash].min.css'
        }),
    ]
};