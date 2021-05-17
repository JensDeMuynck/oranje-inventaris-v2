import { createRouter, createWebHistory } from 'vue-router'
import Overview from '/src/views/Overview.vue'
import Login from '/src/views/Login.vue'
import Register from '/src/views/Register.vue'
import Toys from '/src/views/Toys.vue'
import AddToy from '/src/views/AddToy.vue'

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
        path: '/toys/:uid',
        name: 'Toys',
        component: Toys,
    },
    {
        path: '/add-toy',
        name: 'Add Toy',
        component: AddToy,
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