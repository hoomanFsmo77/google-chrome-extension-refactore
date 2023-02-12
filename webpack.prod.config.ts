const CopyWebpackPlugin = require('copy-webpack-plugin');
const path=require('path')
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
module.exports={
    entry: {
        "app":"./src/App.ts",
        "background":"./src/background.ts"
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "[name].js",
        assetModuleFilename: "assets/[name][ext]"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
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
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "./src/public", to: "public" },
                { from: "./src/static", to: "./" },
            ],
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:"css/[name].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
            // publicPath:"./dist/"
        })
    ]
}