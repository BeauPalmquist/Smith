var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: "./src/index"
    },
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
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};