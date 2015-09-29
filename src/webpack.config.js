module.exports = {
    entry: {
        'smith': './src/root.jsx'
    },
    output: {
        filename: 'index.js',
        path: './dist',
        library: 'smith',
        libraryTarget: 'umd'
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
    externals: [
        'react',
        'react-bootstrap',
        'react-router'
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};