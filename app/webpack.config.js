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
    externals: {
        'react': 'React',
        'react-bootstrap': 'ReactBootstrap',
        'react-router': 'ReactRouter'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};