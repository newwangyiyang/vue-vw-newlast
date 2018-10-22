import { getUserInfo } from '@/api/login';

const user = {
    state: {
        name: '',
        roles: []
    },
    mutations: {
        initUserInfo(state, res) {
            state.name = res.name;
            state.roles = res.roles;
        }
    },
    actions: {
        async getUserInfo({commit}) {
            const res = await getUserInfo();
            commit('initUserInfo', res);
            return res;
        }
    }
};

export default user;