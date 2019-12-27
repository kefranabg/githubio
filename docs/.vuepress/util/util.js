import axios from '../lib/axios'

const xhrGet = (api, params) => {
    return new Promise((resolve, reject) => {
        axios.get(api, params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

const xhrPost = (api, params) => {
    return new Promise((resolve, reject) => {
        axios.post(api, params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

export {
    xhrGet,
    xhrPost
}