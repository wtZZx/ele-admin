import $service from '../utils/request.js'

const methods = {
    queryList: $service.getMockData('http://rap2api.taobao.org/app/mock/7852/GET/students'),
    getHouseList: $service.getMockData('http://rap2api.taobao.org/app/mock/7852/GET/getHouses')
}

export default methods