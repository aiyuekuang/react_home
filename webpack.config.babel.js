import path from 'path';

const theme = require(path.join(__dirname, '/package.json')).theme;
import HtmlWebpackPlugin from 'html-webpack-plugin'; //html
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; //css压缩
import ExtendedDefinePlugin from 'extended-define-webpack-plugin'; //全局变量
const {CleanWebpackPlugin } = require('clean-webpack-plugin'); //清空
import CopyWebpackPlugin from 'copy-webpack-plugin'; //复制静态html
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //视图分析webpack情况
import {ip, title, dev_port, dns, localhost, api, getLocalIP} from './config/common';
import HappyPack from 'happypack';
//多线程运行
let happyThreadPool = HappyPack.ThreadPool({size: 4});
let dev = process.env.NODE_ENV === 'development' ? 'development' : 'production';
let dev_bool = process.env.NODE_ENV !== 'development';
const PUBLIC_PATH = localhost + '/';

const devtool = {
    env: false,
    development: 'cheap-module-eval-source-map',
    production: false
};

const minimize = {
    env: false,
    development: false,
    production: true
};

const stylus = {
    dev: ['cache-loader', 'style-loader', 'css-loader', 'stylus-loader'],
    development: ['style-loader', 'css-loader', 'stylus-loader'],
    production: [
        {loader: MiniCssExtractPlugin.loader},
        {
            loader: 'css-loader',
            options: {
                minimize: true //压缩
                // sourceMap: true,
            }
        },
        {loader: 'stylus-loader'}
    ]
};

/**
 * 公共插件
 */
const pluginsPublic = [
    new CopyWebpackPlugin([
        {
            from: path.resolve(__dirname, './public'),
            to: path.resolve(__dirname, 'dist')
        },
        {
            from: path.resolve(__dirname, './dll/Dll.js'),
            to: path.resolve(__dirname, 'dist')
        }
    ]),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '/src/index.ejs'), // Load a custom template
        inject: 'body', //注入到哪里
        filename: 'index.html', //输出后的名称
        hash: false, //为静态资源生成hash值
        title: title,
        ip: ip,
        dev_port: dev_port,
        dns: dns,
        url: PUBLIC_PATH,
        pro: dev_bool
    }),
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[chunkhash].css'
    }),
    new HappyPack({
        //多线程运行 默认是电脑核数-1
        id: 'babel', //对于loaders id
        loaders: ['cache-loader', 'babel-loader?cacheDirectory=true'], //是用babel-loader解析
        threadPool: happyThreadPool,
        verboseWhenProfiling: true //显示信息
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
];
/**
 * 公共打包插件
 */
const pluginsBuild = [
    new ExtendedDefinePlugin({
        //全局变量
        environment: process.env.NODE_ENV,
        IP: getLocalIP()
    }),
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin()
];
const plugins = {
    dev: [].concat(pluginsPublic, pluginsBuild),
    development: [].concat(pluginsPublic, pluginsBuild),
    production: [].concat(
        pluginsPublic,
        pluginsBuild,
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/manifest.json')
        })
    )
};

export default {
    optimization: dev_bool
        ? {
            runtimeChunk: {
                name: 'manifest'
            },
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true, // Must be set to true if using source-maps in production
                    terserOptions: {
                        // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    }
                })
            ],
            splitChunks: {
                chunks: 'async',
                minSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~', //名称分隔符，默认是~
                name: true, //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔
                cacheGroups: {
                    vendor: {
                        name: 'vendor',
                        chunks: 'initial',
                        priority: 10,
                        minChunks: 2, //最少被几个chunk引用
                        reuseExistingChunk: true, //  如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
                        test: /node_modules\/(.*)\.js/
                    },
                    styles: {
                        name: 'index',
                        test: /\.(scss|css)$/,
                        chunks: 'all',
                        minChunks: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            }
        }
        : {},
    devServer: {
        contentBase: path.join(__dirname, 'dist'), //开发服务运行时的文件根目录
        host: ip,
        compress: true, //开发服务器是否启动gzip等压缩
        port: dev_port, //端口
        historyApiFallback: true, //不会出现404页面，避免找不到
        hot: false,
        proxy: {
            '/api': {
                target: api.url,
                changeOrigin: true,
                secure: false
            }
        }
    },
    devtool: devtool[dev], //cheap-eval-source-map  是一种比较快捷的map,没有映射列
    performance: {
        maxEntrypointSize: 250000, //入口文件大小，性能指示
        maxAssetSize: 250000, //生成的最大文件
        hints: false
        // hints: 'warning', //依赖过大是否错误提示
        // assetFilter: function(assetFilename) {
        //   return assetFilename.endsWith('.js');
        // }
    },
    entry: {
        //入口
        index: ['babel-polyfill', './src/index.js']
    },
    output: {
        //出口
        path: path.resolve(__dirname, 'dist'), //出口路径
        filename: '[name].[hash].js',
        chunkFilename: '[chunkhash].js', //按需加载名称
        publicPath: PUBLIC_PATH //公共路径
    },
    resolve: {
        mainFields: ['browser', 'main', 'jsnext:main'], //npm读取先后方式  jsnext:main 是采用es6模块写法
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        alias: {
            //快捷入口
            '@config': path.resolve(__dirname, 'config'),
            '@components': path.resolve(__dirname, 'src/work/components'),
            '@images': path.resolve(__dirname, 'src/work/images'),
            '@style': path.resolve(__dirname, 'src/work/style'),
            '@server': path.resolve(__dirname, 'src/work/server'),
            '@common': path.resolve(__dirname, 'src/work/common'),
            '@mobx': path.resolve(__dirname, 'src/work/mobx'),
            '@page': path.resolve(__dirname, 'src/work/page'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@mock': path.resolve(__dirname, 'mock')
        }
    },
    module: {
        noParse: /node_modules\/(moment|chart\.js)/, //不解析
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //排除
                //include: [path.resolve(__dirname, 'src')], //包括
                loader: 'happypack/loader?id=babel'
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: minimize[dev] //压缩
                            // sourceMap: minimize[dev],
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src'], //为了做图片懒加载，那些属性需要被，制定什么属性被该loader解析
                        minimize: false
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg|ttf|svg)$/,
                exclude: /(node_modules|bower_components)/,
                include: [path.resolve(__dirname, 'src/work/images')],
                use: [
                    {
                        loader: 'url-loader?limit=8024', //limit 图片大小的衡量，进行base64处理
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                exclude: /(node_modules|bower_components)/,
                include: [path.resolve(__dirname, 'src')],
                use: ['cache-loader', 'style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader?importLoaders=1',
                    options: {
                        minimize: true //css压缩
                    }
                }, {
                    loader: 'less-loader', options: {
                        javascriptEnabled: true,
                        // modifyVars: {
                        //     'primary-color': '#1DA57A',
                        //     'link-color': '#1DA57A',
                        //     'border-radius-base': '2px',
                        // }
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},

                    {
                        loader: 'css-loader',
                        options: {
                            minimize: minimize[dev], //压缩
                            // sourceMap: minimize[dev],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {modifyVars: theme}
                    },
                ],
            }
        ]
    },
    plugins: plugins[dev]
};
