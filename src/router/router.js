import { createRouter, createWebHistory } from 'vue-router';
import loginPage from '../../src/views/loginPage.vue';
import adminPage from '../../src/views/adminDashboard.vue'

const routes = [
    {
        path: '/',
        name: 'loginPage',
        component: loginPage
    },
    {
        path: '/dashboard',
        name: 'adminPage',
        component: adminPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
export default router