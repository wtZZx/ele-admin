const user = {
    state: {
        avatar: '',
        id: '',
        name: '',
        status: 1,
        roles: [],
        permission: ['01', '02', '03', '04', '05', '06', '07', '08', '80.99']
    },
    mutations: {
        setAvatar(state, avatar) {
            state.avatar = avatar
        },
        setName(state, name) {
            state.name = name
        },
        setStatus(state, status) {
            state.status = status
        },
        setRoles(state, roles) {
            state.roles = roles
        },
        setPermission(state, permission) {
            state.permission = permission
        }
    },
    actions: {

    }
}

export default user