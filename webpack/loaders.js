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

const preLoaders = [sourceMap, tslint];
const lessLoaders = [style, cssModule, less];
const cssLoaders = [style, css];
const tsLoaders = [babel, ts];

module.exports = {
    preLoaders,
    lessLoaders,
    cssLoaders,
    tsLoaders,
};
