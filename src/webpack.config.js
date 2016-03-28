var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: './src/index'
    },
    output: {
        filename: 'smith.js',
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
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'React': 'react',
        'redux': 'redux',
        'Redux': 'redux',
        'react-redux': 'react-redux',
        'react-router': 'react-router',
        'redux-router': 'redux-router'
    }
};
