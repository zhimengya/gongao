const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        'bluebird': './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    // development production
    // mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        port: 8080,
        hot: true,
        watchContentBase: true,
        contentBase: path.resolve(__dirname, './dist/'),
        compress: true
    }

}  