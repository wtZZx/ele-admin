export default {
    hasPermission(permission) {
        const ps = ['01', '02', '03', '04', '05', '06', '07', '08', '80.99']
        for (let i = 0; i < ps.length; i++) {
            if (ps[i] === permission) {
                return true
            }
        }
        return false
    }
}