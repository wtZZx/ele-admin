import axios from 'axios'
import { Message } from 'element-ui'

const $service = axios.create({
    baseURL: process.env.baseURL
})

console.log(process.env)

$service.bindService = function (service, method) {
    return function() {
        const data = Array.from(arguments)
        return $service.request({
            url: "*.jsonRequest",
            headers: {
                'X-Service-Id': service,
                'X-Service-Method': method
            },
            data: data,
            method: 'post'
        })
    }
}

$service.getMockData = function (sid, mtd) {
    return function() {
        const data = Array.from(arguments)
        return $service.request({
            url: '*.jsonRequest',
            data: {
                sid: sid,
                mtd: mtd,
                data: data
            },
            method: 'post'
        })
    }
}

$service.interceptors.request.use((config) => {
    // do sometings brefore request send
    console.log(config)
    return config
}, (error) => {
    return Promise.reject(error)
})

$service.interceptors.response.use(response => {
    return response
}, (error) => {
    Message({
        message: `${error}`,
        type: 'error'
    })
    return Promise.reject(error)
})

export default $service