import axios from '../utils/axios';

//获取用户的roles角色权限信息
export const getUserInfo = () => {
    return axios.get('bins/dp7ck');
};