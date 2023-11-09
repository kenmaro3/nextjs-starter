import axios from 'axios';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_END_POINT, // dev
    timeout: 50000,
});

// Add a request interceptor
api.interceptors.request.use(
    function (config: any) {
        // Set the access token into headers if logged in
        if (!!localStorage.getItem('act')) config.headers['Authorization'] = `Bearer ${localStorage.getItem('act')}`;
        console.debug('Returning config', config);
        return config;
    },
    function (error: any) {
        return Promise.resolve(error.response.data);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    function (response: any) {
        return response.data;
    },
    function (error: any) {
        // If this is timeout, retry again
        if (error.code === 'ECONNABORTED' && error.config.retry < 3) {
            error.config.retry += 1;
            return api.request(error.config);
        }
        if (error.response.status === 401) {
            localStorage.removeItem('act');
            localStorage.removeItem('un');
            window.location.replace('/login');
        }
        else if (error.response.status === 400) {
            console.log('this is error middleware!!!!==============')
            console.log(error.response.data)
            alert(error.response.data.error_message)
        }
        else if (error.response.status === 500) {
            console.log('this is error middleware!!!!==============')
            console.log(error.response.data)
            alert(error.response.data.error_message)
        }
        return Promise.resolve(error.response.data);
    }
);

export { api };
