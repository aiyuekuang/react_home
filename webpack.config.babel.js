import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; //html
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; //css压缩
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import {api, devPort, dns, ip, title} from './config/common';
import CopyWebpackPlugin from 'copy-webpack-plugin'; //复制静态html
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //清空

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //视图分析webpack情况

//多线程运行
const PUBLIC_PATH = `http://${ip}:${devPort}/`;

/**
 * 公共打包插件
 */
const pluginsBuild = [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin() // 热更新插件
];

export default (env, argv) => {
    let isDev = argv.mode


    /**
     * 公共插件
     */
    const pluginsPublic = [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.ejs'), // Load a custom template
            inject: 'body', //注入到哪里
            filename: 'index.html', //输出后的名称
            hash: false, //为静态资源生成hash值
            title: title,
            ip: ip,
            devPort: devPort,
            dns: dns,
            url: PUBLIC_PATH,
            isDev
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[fullhash].css',
            chunkFilename: 'css/[chunkhash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
    ];

    const minimize = {
        //本地
        development: false,
        //测试
        test: false,
        //生产环境
        production: true
    };

    const plugins = {
        development: pluginsPublic.concat(pluginsBuild),
        test: pluginsPublic.concat(pluginsBuild),
        production: pluginsPublic.concat([])
    };

    const devtool = {
        //本地
        development: 'eval-source-map',
        //测试
        test: 'eval-source-map',
        //生产环境
        production: false
    }

    return {
        optimization: {
            runtimeChunk: {
                name: 'manifest'
            },
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                        format: {
                            comments: false
                        }
                    }
                })
            ],
            splitChunks: {
                chunks: 'async',
                minSize: 20000,
                minRemainingSize: 0,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                automaticNameDelimiter: '~',
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        },
        devServer: {
            // contentBase: path.join(__dirname, 'dist'), //开发服务运行时的文件根目录
            host: ip,
            compress: true, //开发服务器是否启动gzip等压缩
            port: devPort, //端口
            historyApiFallback: true, //不会出现404页面，避免找不到
            hot: true,
            proxy: {
                '/api': {
                    target: api.url,
                    changeOrigin: true,
                    secure: false
                }
            }
        },
        devtool: devtool[isDev], //cheap-eval-source-map  是一种比较快捷的map,没有映射列
        entry: {
            //入口
            index: ['babel-polyfill', './src/index.js']
        },
        output: {
            //出口
            path: path.resolve(__dirname, 'dist'), //出口路径
            filename: 'js/[name].[fullhash].js',
            chunkFilename: 'js/[chunkhash].js', //按需加载名称
            publicPath: PUBLIC_PATH //公共路径
        },
        resolve: {
            mainFields: ['browser', 'main', 'jsnext:main'], //npm读取先后方式  jsnext:main 是采用es6模块写法
            extensions: ['.ts', '.tsx', '.js'],
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
                '@mock': path.resolve(__dirname, 'mock'),
                '@enum': path.resolve(__dirname, 'src/work/enum')
            },
            fallback: {'os': require.resolve('os-browserify/browser')}
        },
        module: {
            noParse: /node_modules\/(moment|chart\.js)/, //不解析
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/, //排除
                    //include: [path.resolve(__dirname, 'src')], //包括
                    // loader: 'happypack/loader?id=babel'
                    use: ['babel-loader']
                },
                {
                    test: /\.ts?$/,
                    use: ['ts-loader'],
                    exclude: /(node_modules|bower_components)/
                },
                {
                    test: /\.css$/,
                    use: [
                        {loader: MiniCssExtractPlugin.loader},
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: minimize[isDev] //压缩
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
                    test: /\.less$/,
                    use: [{loader: MiniCssExtractPlugin.loader},
                        {
                            loader: 'css-loader?importLoaders=1',
                            options: {}
                        }, {
                            loader: 'less-loader', options: {
                                lessOptions: {
                                    javascriptEnabled: true,
                                    modifyVars: {
                                        'primary-color': '#1DA57A',
                                        'link-color': '#1DA57A',
                                        'border-radius-base': '2px'
                                    }
                                }
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
                                // sourceMap: minimize[dev],
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        plugins: plugins[isDev]
    }
};
