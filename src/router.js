import vue from 'vue'
import vueRouter from 'vue-router'


import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
import Secure from './views/Secure'

vue.use(vueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },

  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword
  },
  {
    path: '/secure',
    name: 'secure',
    component: Secure
  }
]

const router = new vueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
