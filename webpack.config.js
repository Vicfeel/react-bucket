const path = require('path');
const {
    HotModuleReplacementPlugin,
    NamedModulesPlugin,
} = require('webpack');

const {entry, alias} = require('./webpack/env');
const {preLoaders, tsLoaders, cssLoaders, lessLoaders} = require('./webpack/loaders');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        `./${entry.dirName}/index.tsx`
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        open: true,
        historyApiFallback: true,
        publicPath: '/'
    },
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
    devtool: 'inline-source-map',
    plugins: [
        new HotModuleReplacementPlugin(),
        new NamedModulesPlugin(),
    ]
};