'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        port: 3000,
        proxy: {
            '/api':'http://localhost:3001'
        },
    },
    entry: './demo.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.png|.jpg/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.js|.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c|le)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            // publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: { // 引入js可以省略后缀
        extensions: ['.js']
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
            verbose: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: "[name].[hash].css",
            // chunkFilename: "[id].[hash].css"
            filename: "build.css",
            chunkFilename: path.resolve(__dirname, '../dist')
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'react-redux-demo'
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    }
};