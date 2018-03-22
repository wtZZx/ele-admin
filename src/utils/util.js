export default {
    hasPermission(permission) {
        const ps = ['80']
        for (let i = 0; i < ps.length; i++) {
            if (ps[i] === permission) {
                return true
            } else {
                return false
            }
        }
    }
}