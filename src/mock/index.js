import Mock from 'mockjs'

Mock.mock('/api/op/login', 'post', function () {

})

Mock.mock(/\*.jsonRequest/, 'post', function () {
    console.log(arguments)
    return [{acb: 1}]
})

export default Mock