var webpack = require('webpack');

module.exports = {
    devtool: 'inline-sourcemap',
    entry: {
        'smith': './app/index'
    },
    output: {
        filename: 'index.js',
        path: './wwwroot/src/js'
    },
    module: {
        loaders: [
            {
                test: /\.js$|.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
