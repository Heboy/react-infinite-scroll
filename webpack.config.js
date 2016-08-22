/**
 * Created by Soup Tang on 2015/8/26.
 */
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        'index':'./example/index.jsx',
        'vendor': ["react", "react-dom"]
    },
    output: {
        path: __dirname + '/example',
        filename: '[name].bundle.js',
        publicPath: './'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, loader: "babel-loader", query: {presets: ['react', 'es2015']}},
            {test: /\.(scss|css)$/, loader: "style!css!sass"}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
        })
    ]
};
