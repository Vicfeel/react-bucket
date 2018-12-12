const fs = require('fs');
const {resolve} = require('path');

// entry
const entryDirName = 'src';
const entry = {
    dirName: entryDirName,
    path: resolve(__dirname, '..', entryDirName)
};

// output
const outputDirname = 'build';
const output = {
    path: resolve(__dirname, '..', outputDirname),
    publicPath: '/',
};

// alias
const alias = fs.readdirSync(entry.path)
    .filter(dirname => !dirname.includes('.'))
    .reduce((alias, dirname) => ({...alias, [dirname]: resolve(entry.path, dirname)}), {});

module.exports = {
    entry,
    output,
    alias,
};
