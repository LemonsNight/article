// webpack.development.config.js
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require("path")
module.exports = merge(common,{
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    "vue-style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new ESLintPlugin({
            context : path.resolve(__dirname,"./src"),
            extensions: ["js","vue"]
        })
    ],

})
