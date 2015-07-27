var Webpack = require('webpack');
var nib = require('nib');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/only-dev-server',
        "webpack-dev-server/client?http://localhost:3000/",
        './app/index.js'
    ],
    output: {
        path: './build',
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/'
    },
    module: {

        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: [/node_modules/]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'},
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }

        ]
    },
    plugins: [new Webpack.NoErrorsPlugin()],
    stylus: {
        use: [nib()]
    }
};