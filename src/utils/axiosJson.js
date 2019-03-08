import axios from 'axios';


//以application/json进行提交
const axiosJson = axios.create({
    baseURL: 'http://localhost/',
    timeout: 4000,
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

// request interceptor
axiosJson.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})


axiosJson.interceptors.response.use((res) => {
    if (res.status !== 200) {
      throw new Error('请求错误');
    }
    return res.data;
  }, (error) => {
    return Promise.reject(error);
});

export default axiosJson;