import store from "../../store";
const CaptchaService = {
    install(Vue) {
        Vue.prototype.$captcha = {
            generate: () => {
                const captcha = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
                store.commit('captcha', captcha);
                const c = document.getElementById("captcha");
                const ctx = c.getContext("2d");
                ctx.font="44px sans-serif";
                ctx.strokeText(`${captcha}`, 90, 40);
            }
        }
    }
};

export default (CaptchaService);
