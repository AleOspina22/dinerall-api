import vueRouter from 'vue-router'
import User from './components/User'
import UserSignup from './components/UserSignup'
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
                path: '/user/:username',
                name: "user",
                component: User
            },
            {
                path: '/user/UserSignup/:username',
                name: "user_signup",
                component: UserSignup
            },
        ]
    })

export default router
