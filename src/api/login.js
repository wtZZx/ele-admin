import $service from '../utils/request.js'

const methods = {
    login: $service.getMockData('http://rap2api.taobao.org/app/mock/7852/POST/login', 'post')
}

export default methods