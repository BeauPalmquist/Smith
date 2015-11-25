var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './src/index'
    ],
    output: {
        filename: 'index.js',
        path: './dist',
        libraryTarget: 'umd',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel'],
            }
        ]
    }
};