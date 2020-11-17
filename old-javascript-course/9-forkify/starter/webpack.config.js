const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**Webpack allows to have :
 * entry Points
 * output
 * loaders & 
 * plugins
 **/
module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html' //this is like starting point, where to fetch from
        })
    ],
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};