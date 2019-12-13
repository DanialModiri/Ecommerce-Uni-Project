const path = require('path');
module.exports = {
    entry: {
        website: './website/index.js',
        panel: './panel/index.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, './public')
    },

    module: {
        rules: [
            { test: /\.js$/, loader: 'bable-loader' },
            { test: /\.css$/, use: ['css-loader', 'style-loader'] }
        ]
    }
}