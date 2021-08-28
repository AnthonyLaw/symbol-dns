import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Error from '@/views/Error.vue';
import Lookup from '@/views/Lookup.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/lookup',
        name: 'Lookup',
        component: Lookup,
    },
    {
        path: '/error',
        name: 'Error',
        component: Error,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
