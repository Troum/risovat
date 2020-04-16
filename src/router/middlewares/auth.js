import Vue from 'vue';
import JWT from '../../services/jwt-token.service';

Vue.use(JWT);

export default function auth({next, store}){
  if(!store.getters.auth && !Vue.prototype.$jwt.token()) {
      return next({
          name: 'login'
      })
  }
  return next()
}
