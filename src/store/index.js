import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
    slogan: "",
    captcha: "",
    name: "",
    search: "",
    auth: false,
    images: [
      {
        name: "classes",
        image: "first.png"
      },
      {
        name: "about",
        image: "second.png"
      },
      {
        name: "exit",
        image: "third.png"
      }
    ],
    classes: [
      {
        name: "sketching",
        image: "sketching.png"
      },
      {
        name: "3dmodeling",
        image: "3dmodeling.png"
      },
      {
        name: "animation",
        image: "animation.png"
      }
    ],
    users: {
      online: [],
      offline: []
    }
  },
  getters: {
    online(state) {
      return state.users.online;
    },
    offline(state) {
      return state.users.offline;
    },
    images(state) {
      return state.images;
    },
    classes(state) {
      return state.classes;
    },
    slogan(state) {
      return state.slogan;
    },
    captcha(state) {
      return state.captcha;
    },
    name(state) {
      return state.name;
    },
    search(state) {
      return state.search;
    },
    auth(state) {
      return state.auth;
    },
    show(state) {
      return state.show;
    }
  },
  mutations: {
    show(state, data) {
      state.show = data;
    },
    slogan(state, data){
      state.slogan = data;
    },
    captcha(state, data) {
      state.captcha = data;
    },
    name(state, data) {
      state.name = data;
      localStorage.setItem('name', data)
    },
    search(state, data) {
      state.search = data;
    },
    auth(state, data) {
      state.auth = data;
    },
    users(state, data) {
      state.users = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
