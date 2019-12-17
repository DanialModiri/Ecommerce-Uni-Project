const path = require('path');
module.exports = {
    entry: {
        website: path.resolve(__dirname, './website/index.js'),
        panel: path.resolve(__dirname,'./panel/index.js')
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, './public')
    },

    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader', ] }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: path.resolve(__dirname, './public')
    }
}