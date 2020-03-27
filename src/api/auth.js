import { post } from './axios';

const LOGIN_URL = '/auth';

export const login = (email, password) => {
    return post(LOGIN_URL, {
        email,
        password,
    }).then(res => res.data.token);  //>?? here is not res.data.data.token
};


