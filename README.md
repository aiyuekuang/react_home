# react_home
这是一个react的脚手架项目，其中包含着当前最新得脚手架配置方式，技术技术栈包括react16+redux+antd+react-router4++webpack3+sass/less+axios+immutable+proxy，我会长期，并定期维护这个脚手架，将当下react生态圈最新技术运用进去,适用于新手或者关注进阶的朋友学习参考。（广大撸友觉得能用上的，也不要吝啬自己的star哦）  

# 更新日志  
**2017.09.27** [日志地址](https://github.com/aiyuekuang/react_home/blob/master/doc/doc.MD)  

1. 升级react v15至v16

![列表图](https://github.com/aiyuekuang/react_home/blob/master/doc/img/react_home.png?raw=true)

# 功能与特色
1. 项目集成了当前react中最好得ui轮子antd，不解释，已配置好，直接使用
2. 项目具备了本地开发和打包上线得2个不同状态得场景，在开发状态，本地服务已配置了http-proxy，方便用户跨域调用后端开发得接口，并且本地调试阶段用得是根目录下得index.html，打包上线得时候部署到服务器得是加过hash得index.html这样就避免了测试人员总是无法刷新出新得界面得问题
3. 项目集成了sass和less这2种样式开发，方便2个阵营得都能愉快使用
4. 项目没有containers功能块，大家可以看下，我已将这块得代码写入component中，这是因为，在实际得开发过程中，会发现重复写containers非常烦躁，所以我就将他整合进component中，减少不必要得代码量，提高效率与代码清晰度
5. 本项目使用得axios来作为ajax，有简单得库在utils中的fetchData
6. immutable我觉得是如今和reducers配合最好得数据处理库，没有之一，新手朋友百度学习吧
7. 本项目引入了[esn](https://github.com/aiyuekuang/esn.git)得库，一个很小巧得数据操作库，在开发过程中，里面得很多功能都能用到，2个字方便
8. 本项目没有尝试服务器端渲染，笔者认为，spa最大得特色就是使得前后端得开发模式发生了变化，让整个开发流程变得舒服，前端人员开发出来得代码可以随意得部署在任何地方，而不需要考虑服务器上得问题，而首屏加载过慢得问题可以通过gzip来解决，我想这能满足大多数人得需求，当然了，项目有特殊性，还是有很多项目需要用到服务端渲染，这可以加强研究


# 使用方法：
    安装模块：npm install  
    
    开发模式：npm start  

    打包：npm run build
    
    访问地址：http://localhost:3012
    
# 打包上线
* 将webpack.config.js中的publicPath的 http://111.111.11.11/build/ 改成你线上的地址，比如 http://129.0.0.111 之类，然后再执行npm run build
* 打包后直接将build文件夹提交至你们项目得根目录中
* 命令并且呵斥你们得后端人员，将404指向build/index.html，这样基本就可以愉快得查看了
* 如果在上线后首屏调用速度较慢，这样得情况得话，可以鞭挞后端人员，开启服务器得gzip压缩功能将js压缩一下，压缩后大小基本只有原来得三分之一，这个很实用

# 希望
* 本项目是根据react社区一些朋友分享得脚手架综合，并且实际项目运用后所得出得经验
* 朋友们如果有一些对本项目得建议，或者想法欢迎issues，将持续改进