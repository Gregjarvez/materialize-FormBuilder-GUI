const html = require('html-webpack-plugin');
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    devtool:"cheap-eval-sourcemap",
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app_bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
            {
                test: /\.scss$/, use: extractSass.extract({
                use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                    }],
                fallback: "style-loader"    
            })
            },
            { test: require.resolve('jquery'), loader: 'expose-loader?jQuery!expose-loader?$' }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: "/"
    },
    plugins: [new html({template: "./app/index.html"}), extractSass]
};