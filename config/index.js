//这里存放用户开发时自己用到的全局配置

//是mock模式还是dataform的模式
export let isMock = true;

//获取站点地址
export let getLocation = () => {
    return location.origin;
};

