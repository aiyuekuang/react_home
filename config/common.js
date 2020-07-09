//这里存放配置项目用到的全局配置
export function getLocalIP() {
    const interfaces = require('os').networkInterfaces(); // 在开发环境中获取局域网中的本机iP地址
    let IPAdress = '';
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (
                alias.family === 'IPv4' &&
                alias.address !== '127.0.0.1' &&
                !alias.internal
                && alias.mac.split(':')[0] !== '00'
            ) {
                IPAdress = alias.address;
            }
        }
    }
    return IPAdress;
}

//判断是node环境还是浏览器环境，加载不同的环境判断
export function envir() {
    let sw = null;
    try {
        sw = environment;
    } catch (e) {
        sw = process.env.NODE_ENV;
    }
    return sw;
}

export function is_pro(dev, env = '', pro = '') {
    let sw = envir();
    switch (sw) {
        case 'development':
            return dev;
            break;
        case 'env':
            return env;
            break;
        case 'production':
            return pro;
            break;
        default:
            return env;
            break;
    }
}

//开发环境和正式环境的地址前缀
export let url_add = is_pro('', "", '');

//本地调试时的地址
export let ip = getLocalIP();

//本地调试时的端口
export let dev_port = 3016

//网站站点地址
export let localhost = is_pro(`http://${ip}:${dev_port}`, "", "")

//发布后的网站title
export let title = 'react_home'

//需要预加载的dns
export let dns = ['www.baidu.com', 'www.qq.com']

//接口的映射地址（dev的选项中，不要更改，就使用api就可以了）
export let api = {name: "/api", url: "http://v1.alapi.cn"};
