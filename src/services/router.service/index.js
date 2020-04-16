import router from "../../router";

const RouterService = {
  install(Vue) {
      Vue.prototype.$routerService = {
          goTo: (name) => {
              router.push({name: name}).catch( () => {})
          }
      }
  }
};

export default (RouterService);
