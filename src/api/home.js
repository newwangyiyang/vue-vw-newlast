import axios from '@/utils/axios';

//home页面所有api
export const getUserInfo = () => {
    return axios.get('bins/18fquc')
};