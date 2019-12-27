import axios from 'axios'

let ajax = axios.create({
    timeout: 7000
});

ajax.interceptors.request.use(config => {
    return config;
}, err => {
    return Promise.reject(err)
});

ajax.interceptors.response.use(res => {
    return res;
}, err => {
    return err;
});

export default ajax