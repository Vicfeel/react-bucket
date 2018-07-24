const path = require('path');
const {
    HotModuleReplacementPlugin,
    NamedModulesPlugin,
} = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        "./src/index.tsx"
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
                use: [
                    {loader: 'source-map-loader'},
                    {loader: 'tslint-loader'}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {loader: 'babel-loader'},
                    {loader: 'ts-loader'}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            less: true
                        }
                    }, {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
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