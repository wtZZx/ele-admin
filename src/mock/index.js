import Mock from 'mockjs'

Mock.mock('/api/op/login', 'post', function () {

})

Mock.mock(/\/organ\/list/, 'get', () => {
    return Mock.mock({
        'sortname|10': '老高级了',
        'type|10': '三级',
        'level|10': 5 
    })
})

export default Mock