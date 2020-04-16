import Vue from 'vue';
import JWT from "../jwt-token.service";
import HandlerService from "../handler.service";
import axios from 'axios';
import store from "../../store";
import router from "../../router";

Vue.use(JWT);
Vue.use(HandlerService);

let $http = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'X-Requested-With' : 'XMLHttpRequest'
    },
    withCredentials: false,
    crossDomain: true,
    params: {}
});

$http.interceptors.request.use(request => {
    if (Vue.prototype.$jwt.token()) {
        request.headers.authorization = `Bearer ${Vue.prototype.$jwt.bearer()}`;
    }
    return request;

}, error => {

        Vue.prototype.$handler.error(error);
});

$http.interceptors.response.use( response => {
    return response;
}, error => {
    switch (error.response.status) {
        case 401:
            Vue.prototype.$handler.info(error.response.data.error,
                'Переавторизироваться',
                () => {
                    Vue.prototype.$httpService.get('api/user/v1/auth/refresh', {
                        headers: {
                            Authorization: `Bearer ${Vue.prototype.$jwt.bearer()}`,
                        }
                    })
                        .then( response => {
                            Vue.prototype.$jwt.store(response.headers['authorization']);
                            store.commit('authenticate', response.headers['authorization']);
                            Vue.prototype.$handler.success(response.data.success);
                        })
                });
            break;
        case 404:
        case 403:
        case 409:
        case 500:
        case 502:
            Vue.prototype.$handler.error(error.response.data.error);
            break;
        case 406:
            Vue.prototype.$handler.warning('Попробуй перелогиниться',
                'Залогиниться',
                () => {
                    router.push({name: 'login'})
                });
            break;
        case 422:
            for(let err in error.response.data.errors) {
                Vue.prototype.$handler.error(error.response.data.errors[err][0]);
            }
            break;
    }
});

const HttpService = {
    install(Vue) {
        Vue.prototype.$httpService = $http;
    }
};

export default (HttpService);
