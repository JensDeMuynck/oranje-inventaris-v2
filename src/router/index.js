import { createRouter, createWebHistory } from 'vue-router'
import Overview from '/src/views/Overview.vue'
import Login from '/src/views/Login.vue'

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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router