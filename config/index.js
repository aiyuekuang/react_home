//本地调试时的地址
export let ip = 'localhost';
//本地调试时的端口
export let dev_port = 3008;




//网站站点地址
export let localhost = is_pro(`http://${ip}:${dev_port}`, "http://121.41.62.98:9006","http://www.nj13zhs.cn/zhxy");

//生产环境和开发环境的文件上传的前缀
export let url = is_pro("","","");

//api接口的数组
export let api = is_pro("/api", "/api","/api");

//接口的映射地址（dev的选项中，不要更改，就使用api就可以了）
export let api_mapping=is_pro({name:"/api",url:"https://api.apiopen.top/getImages"},{name:"/api",url:"https://api.apiopen.top/getSongPoetry"},{name:"/proapi",url:"https://apps.game.qq.com/wmp/v3.1"});

//现在路由中进行路由地址拼接的目录的路径
export let url_add =is_pro("", "","/zhxy");




//数据请求用到的字段模型
export let api_callback=(data,fun,erro)=>{
    if(data.code == 200){
        fun(data)
    }else {
        erro(data.message)
    }
}


//使用json还是表单提交的形式：json = true，formdata=false
export let parm_json = false;

//发布后的网站title
export let title = 'react_home';

//需要预加载的dns
export let dns = ['http://www.baidu.com'];

//判断是开发环境还是正式环境，还是测试环境
export let envi = envir();

//判断是node环境还是浏览器环境，加载不同的环境判断
function envir(){
    let sw = null;
    try {
        sw = environment
    }catch (e) {
        sw = process.env.NODE_ENV
    }
    return sw;
}

export function is_pro (dev, env = "", pro = '') {
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
};