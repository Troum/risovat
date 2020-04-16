const JWT = {
    install(Vue) {
        Vue.prototype.$jwt = {
            store: (token) => {
                localStorage.setItem('_token', token)
            },
            remove: () => {
                localStorage.removeItem('_token');
                localStorage.removeItem('_user');
                localStorage.removeItem('name');
            },
            token: () => {
                return '_token' in localStorage;
            },
            bearer: () => {
                return localStorage.getItem('_token');
            },
            setUser: (user) => {
                localStorage.setItem('_user', JSON.stringify(user));
            },
            getUser: () => {
                return JSON.parse(localStorage.getItem('_user'));
            }
        }
    }

};

export default (JWT);
