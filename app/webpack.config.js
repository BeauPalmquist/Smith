var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
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
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
