var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');
var request = require('request');
var app = express();
var path = require('path')
var port = 3012;
// var open = require('open')


var proxy = require('http-proxy-middleware')


const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    historyApiFallback: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    headers: {"X-Custom-Header": "yes"},
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));
app.use('/build',express.static(__dirname + '/build/'))


//context可以是单个字符串，也可以是多个字符串数组，分别对应你需要代理的api,星号（*）表示匹配当前路径下面的所有api
//options可选的配置参数请自行看readme.md文档，通常只需要配置target，也就是你的api所属的域名。

//将options对象用proxy封装起来，作为参数传递
//这里得111什么得，是我乱写得，你实际用得时候改成你们得接口地址得ip

const apiProxy = proxy({
    target: 'http://111.111.11.11',
    changeOrigin: true
});


//现在你只需要执行这一行代码，当你访问需要跨域的api资源时，就可以成功访问到了。
app.use(`/better-consult-pf-web/*`, apiProxy);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})


app.listen(port, function (err) {
    if (err) {
        console.log('err : ', err)
    } else {
        console.log(`http://localhost:${port}`)
    }
})
