import {getUserInfo} from '@/api/home';

export default {
    state: {
        userInfo: {
            name: ''
        },
        params: {
            a: ''
        }
    },
    mutations: {
        SET_USERINFO(state, userInfo) {
            state.userInfo = userInfo;
        },
        SET_PARAMS(state, params) {
            state.params = params;
        }
    },
    actions: {
        async getUserInfo({commit, state}) {
            const { userInfo } = await getUserInfo();
            commit('SET_USERINFO', userInfo);
            return userInfo;
        },
        //获取页面传递过来的参数
        getActionParam({commit}, params) {
            commit('SET_PARAMS', params);
        }
    }
};