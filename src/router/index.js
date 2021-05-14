import { createRouter, createWebHistory } from 'vue-router'
import Overview from '/src/views/Overview.vue'
import Login from '/src/views/Login.vue'
import Register from '/src/views/Register.vue'
import Toys from '/src/views/Toys.vue'

const routes = [
    {
        path: '/',
        name: 'Overview',
        component: Overview,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/toys',
        name: 'Toys',
        component: Toys,
    },
]

const router = createRouter({
	scrollBehavior() {
	  return { x: 0, y: 0 };
	},
    history: createWebHistory(),
    routes,
})

export default router