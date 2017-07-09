const path = require('path');

module.exports = {
    entry: {
        main: './js/main.js'
    },
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        path: path.resolve(__dirname, 'web')
    }
};
