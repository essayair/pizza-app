import axios from 'axios';
import { getToken } from '../utils/auth';

axios.defaults.baseURL = 'http://pizza.ap-southeast-2.elasticbeanstalk.com/api';
// axios.defaults.baseURL = 'https://jr-cms.herokuapp.com/v1';



const appendAuthToken = config => {
    const jwtToken = getToken();
    const Authorization = jwtToken && `Bearer ${jwtToken}`;

    return { ...config, headers: { Authorization, ...config.header } };
};



export const get = (url, config = {}) =>
    axios.get(url, appendAuthToken(config));

export const post = (url, data, config = {}) =>
    axios.post(url, data, appendAuthToken(config));

export const put = (url, data, config = {}) =>
    axios.put(url, data, appendAuthToken(config));

export const del = (url, config = {}) =>
    axios.delete(url, appendAuthToken(config));