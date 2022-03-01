const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, '/src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader'),
            },
            {
                test: /\.s?css/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.png|svg|jpg|gif$/,
                use: ['file-loader'],
            },
        ],
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }

};