import vueRouter from 'vue-router'
import Login from './components/Login'
import Signup from './components/Signup'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user',
            name: "user",
            component: Login
        },
        {
            path: '/user/signup',
            name: "user_signup",
            component: Signup
        },
    ]
})
export default router