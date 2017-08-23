var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


//当前运行环境
const pro = process.env.NODE_ENV === 'production';
process.noDeprecation = true;
var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",//和上面配置的入口对应
        minChunks:2,
    })
]

var app = [
    'babel-polyfill',
    './src/index'
]


if (pro) {
    plugins.push(
        new ExtractTextPlugin('styles.[contenthash:6].css'),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html') // Load a custom template
        })

    )
} else {
    plugins.push(
        new ExtractTextPlugin('styles.css'),
        new webpack.HotModuleReplacementPlugin()
    )
}

module.exports = {
    devtool: false,
    entry: {
        app: app,
        vendor: ['react','react-dom']
    },
    output: {
        filename:pro ?  '[name].[hash].js':'[name].js',
        path: path.join(__dirname, 'build'),
        publicPath:  pro ? 'http://111.111.11.11/build/' : 'http://localhost:3012/build/',
        chunkFilename:pro ? '[name].[hash].js': '[name].js'
    },
    // BASE_URL是全局的api接口访问地址
    plugins,
    // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        alias: {
            "actions": path.resolve(__dirname, "src/actions"),
            "components": path.resolve(__dirname, "src/components"),
            "reducers": path.resolve(__dirname, "src/reducers"),
            "utils": path.resolve(__dirname, "src/utils")
        }
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }, {
            test: /\.scss/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options:{
                        minimize: true //css压缩
                    }
                }, "sass-loader"]
            })
        }, {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                        loader: 'css-loader',
                        options:{
                            minimize: true //css压缩
                        }
                    }, "less-loader"]
            })
        }, {
            test: /\.(png|jpg|gif|md)$/,
            use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: ['url-loader?limit=10000&mimetype=images/svg+xml']
        },{
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        },{
            test: /\.json$/,
            use: 'json-loader'
        }]

    },
    devServer: {//webpack-dev-server配置热更新以及跨域
        historyApiFallback: true,//不跳转
        noInfo: true,
        inline: true,//实时刷新
        port: '3012',
        hot:true,
        proxy: {
            '/list': {
                target: 'http://lol.qq.com/web201310/js/videodata/LOL_VIDEOLIST_IDX3.js',
                pathRewrite: {'^/list': ''},
                changeOrigin: true,
                secure: false
            }
        }
    },
};