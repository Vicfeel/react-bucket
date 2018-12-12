const path = require('path');
const {
    HotModuleReplacementPlugin,
    NamedModulesPlugin,
} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {entry, alias} = require('./env');
const {preLoaders, tsLoaders, cssLoaders, lessLoaders} = require('./loaders');

module.exports = {
    mode: 'production',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        `./${entry.dirName}/index.tsx`
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(ts|tsx)$/,
                use: preLoaders,
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)$/,
                use: tsLoaders,
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: lessLoaders,
            },
            {
                test: /\.css$/,
                use: cssLoaders
            }
        ]
    },
    resolve: {
        alias,
        extensions: [".tsx", ".ts", ".js", ".json"],
    },
    performance: {
        hints: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react全家桶',
            template: `${entry.dirName}/index.ejs`,
        })
    ]
};