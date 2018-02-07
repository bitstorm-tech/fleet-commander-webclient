import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import Overview from '@/components/Overview.vue';
import { UserService } from '@/shared/user-service';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '', component: Login },
    { path: '/overview', component: Overview, beforeEnter: checkAuthentication },
    { path: '*', redirect: '/' },
  ],
});

function checkAuthentication(to: any, from: any, next: any) {
  if (UserService.isAuthenticated()) {
    next();
  } else {
    next('/');
  }
}
