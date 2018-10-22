const getters = {
    userInfo: state => state.home.userInfo,
    params: state => state.home.params,
    //权限相关
    roles: state => state.user.roles,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
};

export default getters;