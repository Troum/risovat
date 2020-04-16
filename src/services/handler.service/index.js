import Vue from 'vue';
import Snotify from 'vue-snotify';

Vue.use(Snotify);

const HandlerService = {
    install(Vue) {
        Vue.prototype.$handler = {
            success: (success) => {
                if (success && success.hasOwnProperty('data')) {
                    Vue.prototype.$snotify.success(success.data.success)
                }

            },
            warning: (message, button, action) => {
                Vue.prototype.$snotify.warning(message, {
                    buttons: [
                        {
                            text: button,
                            action: action
                        }
                    ]
                })
            },
            info: (message, button, action) => {
                Vue.prototype.$snotify.info(message, {
                    buttons: [
                        {
                            text: button,
                            action: action
                        }
                    ]
                })
            },
            error: (error) => {
                Vue.prototype.$snotify.error(error);
            }
        }
    }
};

export default (HandlerService);
