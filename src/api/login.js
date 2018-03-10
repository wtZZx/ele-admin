import $service from '../utils/request.js'

const methods = {
    logon(uid = "gaojian", pwd = "21218cca77804d2ba1922c33e0151105", rid = "admin") {
        return $service({
            url: 'api/op/login',
            method: 'post',
            data: {
                uid: uid,
                pwd: pwd,
                rid: rid
            }
        })
    }
}

export default methods