const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'bootstrap-loader/extractStyles',
        './src/index'
    ],
    output: {
        filename: 'smith-dev.js',
        path: './dist',
        libraryTarget: 'umd',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.less', '.css', '.json']
    },
    plugins: [
        new ExtractTextPlugin("smith.min.css", { allChunks: true }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css-loader?sourceMap?minimize!postcss-loader!sass-loader')
            },
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
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
        'react-router': 'react-router'
    }
};
