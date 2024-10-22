import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/index';
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'login', component: Login
  },
  {
    path: '/Home',
    name: 'home',
    component: () => import('../components/Home.vue')
  },
   {
    path: '/about',
    name: 'about',
    component: () => import('../components/About.vue')
  },

  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/AdminDashboard.vue'),
    meta: { requiereAuth: true, role: 'admin'}, 
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiereAuth && !authStore.isAuthenticated) {
    next({ name: 'login' })
  }else if (to.meta.role && !authStore.isAdmin) {
    next({ name: 'login' })
  } else {
    next()
  }

})


export default router;

