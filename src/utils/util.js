import store from '../store/index'

export default {
    hasPermission(permission) {
        const ps = store.getters.permission
        for (let i = 0; i < ps.length; i++) {
            if (ps[i] === permission) {
                return true
            }
        }
        return false
    }
}