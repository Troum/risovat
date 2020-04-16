import Vue from "vue"
import VueRouter from "vue-router"
import middlewarePipeline from "./middlewarePipeline";
import store from "../store";
import auth from "./middlewares/auth";
import {VBModalPlugin} from "bootstrap-vue";
Vue.use(VueRouter);
Vue.use(VBModalPlugin);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/classes",
    name: "classes",
    component: () => import("../views/Classes.vue")
  },
  {
    path: "/lesson",
    name: "lesson",
    component: () => import("../views/Lesson.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/course/sketching",
    name: "course.sketching",
    component: () => import("../views/Course.vue")
  },
  {
    path: "/course/3d-modeling",
    name: "course.3dmodeling",
    component: () => import("../views/Course.vue")
  },
  {
    path: "/course/animation",
    name: "course.animation",
    component: () => import("../views/Course.vue")
  },
  {
    path: "/verified",
    name: "verified",
    component: () => import("../views/Verified.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      middleware: [
        auth
      ]
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  document.querySelectorAll('.modal').forEach(item => {
    item.parentElement.style.display = 'none';
  });
  document.querySelectorAll('.connection').forEach(item => {
    item.remove();
  });
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
});

export default router
