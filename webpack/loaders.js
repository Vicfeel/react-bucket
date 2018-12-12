const {loader: extractCss} = require('mini-css-extract-plugin');

const sourceMap = {
    loader: 'source-map-loader',
};

const tslint = {
    loader: 'tslint-loader',
};

const style = {
    loader: 'style-loader',
};

const css = {
    loader: 'css-loader',
};

const less = {
    loader: 'less-loader',
};

const cssModule = {
    loader: 'typings-for-css-modules-loader',
    options: {
        modules: true,
        namedExport: true,
        camelCase: true,
        less: true
    }
};

const babel = {
    loader: 'babel-loader',
};

const ts = {
    loader: 'ts-loader',
};

const extract = process.env.mode === 'production' ? [extractCss] : [];

const preLoaders = [sourceMap, tslint];
const lessLoaders = [style, ...extract, cssModule, less];
const cssLoaders = [style, ...extract, css];
const tsLoaders = [babel, ts];

module.exports = {
    preLoaders,
    lessLoaders,
    cssLoaders,
    tsLoaders,
};
