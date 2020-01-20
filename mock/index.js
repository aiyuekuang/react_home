// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/list', 'post', {
    code: 1,
    msg: '成功',
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'data|1-5': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'sid|+1': 1,
        // 属性 userId 是一个5位的随机码
        'userId|5': ''
    }]
})
