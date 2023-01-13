import { createRouter, createWebHistory } from 'vue-router';
import loginPage from '../../src/views/loginPage.vue';
import adminHomePage from '../../src/views/adminHomepage.vue';
import detailPage from '../../src/views/detailPage.vue';
import contactPage from '../../src/views/contactPage.vue';
import thesisPage from '../../src/views/thesisPage.vue';
import aboutusPage from '../../src/views/aboutusPage.vue';

const routes = [
    {
        path: '/',
        name: 'loginPage',
        component: loginPage
    },
    {
        path: '/homepage',
        name: 'adminPage',
        component: adminHomePage
    },
    {
        path: '/detailPage',
        name: 'detailPage',
        component: detailPage
    },
    {
        path: '/contactPage',
        name: 'contactPage',
        component: contactPage
    },
    {
        path: '/thesisPage',
        name: 'thesisPage',
        component: thesisPage
    },
    {
        path: '/aboutusPage',
        name: 'aboutusPage',
        component: aboutusPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
export default router