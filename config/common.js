import {networkInterfaces} from "os"

//这里存放配置项目用到的全局配置
export function getLocalIP() {
    const interfaces = networkInterfaces(); // 在开发环境中获取局域网中的本机iP地址
    let IPAddress = '';
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
                IPAddress = alias.address;
            }
        }
    }
    return IPAddress;
}

//本地调试时的地址
export let ip = getLocalIP();

//本地调试时的端口
export let devPort = 3016


//发布后的网站title
export let title = 'react_home'

//需要预加载的dns
export let dns = ['www.baidu.com', 'www.qq.com']

//接口的映射地址（dev的选项中，不要更改，就使用api就可以了）
export let api = {name: "/api", url: "http://v1.alapi.cn"};
