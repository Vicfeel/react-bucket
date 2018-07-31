const fs = require('fs');
const {resolve} = require('path');

const entryDirName = 'src';
const entry = {
    dirName: entryDirName,
    path: resolve(__dirname, '..', entryDirName)
};

const alias = fs.readdirSync(entry.path)
    .filter(dirname => !dirname.includes('.'))
    .reduce((alias, dirname) => ({...alias, [dirname]: resolve(entry.path, dirname)}), {});

module.exports = {
    entry,
    alias,
};
