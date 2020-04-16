import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import HttpService from "../services/http.service"
import FormDataService from "../services/form-data.service";
import RouterService from "../services/router.service";
import HandlerService from "../services/handler.service";
import CaptchaService from "../services/captcha.service";
import VueCookies from "vue-cookies";
import "../vee-validate";
Vue.use(BootstrapVue);
Vue.use(HttpService);
Vue.use(FormDataService);
Vue.use(RouterService);
Vue.use(HandlerService);
Vue.use(CaptchaService);
Vue.use(VueCookies);
