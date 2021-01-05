import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN FROM INSTANCE';

instance.interceptors.request.use(reqConfig=> {
    console.log(reqConfig);
    return reqConfig;
},err => {
    console.log(err);
    return Promise.reject(err);
})

export default instance;