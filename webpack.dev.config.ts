const path=require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports={
    devtool:'source-map',
    entry: {
        "app":"./src/App.ts",
        "background":"./src/background.ts"
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "[name].js",
        assetModuleFilename: "assets/[name][ext]"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader",'postcss-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",'postcss-loader'
                ],
            },
            {
                test: /\.(png|svg|jpe?g|json)/,
                type: 'asset/resource',
            },
            {
                test: /\.(eot|ttf|woff|woff2)/,
                type: 'asset/inline'
            },
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    },
                },
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
		  options: { appendTsSuffixTo: [/\.vue$/] }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js','.vue'],
        alias: {
            'src': path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        new Dotenv(),
        new CopyWebpackPlugin({
            patterns: [
                { from: "./src/public", to: "./" },
            ],
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:"css/[name].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
        devMiddleware:{
            writeToDisk:true
        }

    }
}