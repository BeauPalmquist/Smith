var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'font-awesome-loader',
        'bootstrap-loader/extractStyles',
        './src/index'
    ],
    output: {
        filename: 'smith.js',
        path: './dist',
        libraryTarget: 'umd',
        publicPath: '/static/'
    },
     plugins: [
        new ExtractTextPlugin("smith.css", {
            allChunks: true
        })
    ],
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract('style', 'css!postcss') 
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            { 
                test: /bootstrap-sass\/assets\/javascripts\//, 
                loader: 'imports?jQuery=jquery' 
            },           
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            }
        ]
    },
    postcss: [ autoprefixer ],
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
