const path = require('path');
const webpack = require("webpack");
var pro = process.env.NODE_ENV == "production" ? true : false
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//开发环境端口号
var dev_port = "3012"

//不同环境加载不同的插件


let plg = [];
if (pro) {
    plg = [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html') // Load a custom template
        }), new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        })
    ]


} else {
    plg = [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}


module.exports = {
    entry: {
        index: ['babel-polyfill', './src/index.js']
    },
    optimization: {
        splitChunks: {
            chunks: "initial",         // 必须三选一： "initial" | "all"(默认就是all) | "async"
            minSize: 0,                // 最小尺寸，默认0
            minChunks: 1,              // 最小 chunk ，默认1
            maxAsyncRequests: 1,       // 最大异步请求数， 默认1
            maxInitialRequests: 1,    // 最大初始化请求书，默认1
            name: () => {
            },              // 名称，此选项课接收 function
            cacheGroups: {                 // 这里开始设置缓存的 chunks
                priority: "0",                // 缓存组优先级 false | object |
                vendor: {                   // key 为entry中定义的 入口名称
                    chunks: "initial",        // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    test: /react|lodash/,     // 正则规则验证，如果符合就提取 chunk
                    name: "vendor",           // 要缓存的 分隔出来的 chunk 名称
                    minSize: 0,
                    minChunks: 1,
                    enforce: true,
                    maxAsyncRequests: 1,       // 最大异步请求数， 默认1
                    maxInitialRequests: 1,    // 最大初始化请求书，默认1
                    reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
                }
            }
        }
    },
    plugins:plg,
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        alias: {
            "actions": path.resolve(__dirname, "src/actions"),
            "components": path.resolve(__dirname, "src/components"),
            "containers": path.resolve(__dirname, "src/containers"),
            "reducers": path.resolve(__dirname, "src/reducers"),
            "utils": path.resolve(__dirname, "src/utils")
        }
    },
    output: {
        filename: pro ? '[name].[hash].js' : '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: pro ? './' : `http://localhost:${dev_port}/dist/`
    },
    devtool: false,
    module: {
        rules: [{
            test: /\.js?$/,
            use: ['babel-loader'],
            exclude: /(node_modules)/
        }, {
            test: /\.scss/,
            use: [MiniCssExtractPlugin.loader, {
                loader: 'css-loader?importLoaders=1',
                options: {
                    minimize: true //css压缩
                }
            }, "sass-loader"]
        }, {
            test: /\.(less|css)$/,
            use: [MiniCssExtractPlugin.loader, {
                loader: 'css-loader?importLoaders=1',
                options: {
                    minimize: true //css压缩
                }
            }, {loader: 'less-loader', options: {javascriptEnabled: true}}]
        }, {
            test: /\.(png|jpg|gif|md)$/,
            use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: ['url-loader?limit=10000&mimetype=images/svg+xml']
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            use: "json-loader"
        }]
    },
    devServer: {//webpack-dev-server配置热更新以及跨域
        historyApiFallback: true,//不跳转
        noInfo: true,
        inline: true,//实时刷新
        port: dev_port,
        hot: true,
        proxy: {
            '/list': {
                target: 'http://lol.qq.com/web201310/js/videodata/LOL_VIDEOLIST_IDX3.js',
                pathRewrite: {'^/list': ''},
                changeOrigin: true,
                secure: false
            }
        }
    }
};