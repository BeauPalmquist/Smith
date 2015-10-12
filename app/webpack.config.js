module.exports = {
    entry: {
        'smith': './app/index.jsx'
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