import axios from 'axios';
// import { storeToken } from '../utils/auth';

axios.defaults.baseURL = 'http://pizza.ap-southeast-2.elasticbeanstalk.com/api';

// const appendAuthToken = config => {
//     const jwtToken = getToken();
//     const Authorization = jwtToken && `Bearer ${jwtToken}`;

//     return { ...config, headers: { Authorization, ...config.header } };
// };

export const get = (url, data,config = {}) =>
    axios.get(url,data, config);

export const post = (url, data, config = {}) =>
    axios.post(url, data, config);

export const put = (url, data, config = {}) =>
    axios.put(url, data, config);

export const del = (url, config = {}) =>
    axios.delete(url, config);