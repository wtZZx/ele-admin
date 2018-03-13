import $service from '../utils/request.js'

const methods = {
    queryList: $service.getMockData('/organ/list')
}

export default methods