// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
    entry: {
        main: ["@babel/polyfill","./src/main.js"]
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname,"src"),
                exclude:  /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            }
        ]
    },
    devServer: {
        open: false,
        overlay: true,
        port: 8080,
        proxy: {
            '/artist': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    "/artist": ""
                }
            }
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            title: 'blog'
        }),
        new CleanWebpackPlugin()
    ]
}