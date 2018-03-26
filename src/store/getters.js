const getters = {
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles,
    permission: state => state.user.permission,
    status: state => state.user.status
}

export default getters