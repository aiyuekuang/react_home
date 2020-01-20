class BasicPlugin {
    // 在构造函数中获取用户给该插件传入的配置
    constructor(options) {
    }

    // Webpack 会调用 BasicPlugin 实例的 apply 方法给插件实例传入 compiler 对象
    apply(compiler) {
        // emit（'编译器'对'生成最终资源'这个事件的监听）
        compiler.plugin('emit', function (compilation, callback) {
            console.log(compilation);

            // callback在最后必须调用
            callback();
        });
    }
}

// 导出 Plugin
module.exports = BasicPlugin;