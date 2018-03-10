import $service from '../utils/request.js'

const methods = {
    queryList: $service.getMockData('em.list', 'queryList')
}

export default methods