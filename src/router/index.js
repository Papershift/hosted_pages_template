import Vue from 'vue';
import Router from 'vue-router';
import api from '@/api';
import Sessions from '@/components/Sessions';
import Login from '@/components/Login';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Sessions',
      component: Sessions,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if(to.name == 'Login') {
    next();
  }

  // Ping token
  api.validateToken().then(response=> {
    next();
  }).catch(error => {
    api.removeToken();
    next('/login');
  });

});

export default router;
