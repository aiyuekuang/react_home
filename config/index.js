//这里存放配置项目用到的全局配置
export let is_pro= (dev, pro = '')=>{
  var bool = process.env.NODE_ENV == 'production'
  if (bool) {
    return pro;
  } else {
    return dev;
  }
};
//生产环境和开发环境后台资源文件的存放目录，比如上传图片后的地址前缀
export let img_add_url = is_pro("./","./");
//判断是开发环境还是正式环境
export let pro = process.env.NODE_ENV == 'production';
//开发环境和正式环境的地址前缀
export let url_add = is_pro('', '/zhxy');
//是mock模式还是dataform的模式
export let is_mock = true;
//网站站点地址
export let localhost =is_pro("http://localhost:3006","http://www.baidu.com/")


//本地调试时的地址
export let ip = 'localhost';
//本地调试时的端口
export let dev_port = 3012
//发布后的网站title
export let title = 'react_home'
//需要预加载的dns
export let dns = ['www.baidu.com', 'www.qq.com']
//api接口的数组
export let api = is_pro("/list","/");
//数据接口使用哪种提交数据的方式
export let parm_json = true
