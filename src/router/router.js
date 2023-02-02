import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
//  route main
    {
        path: '/',
        component: () => import(/*webpackChunkName:"ListTask"*/'../components/TaskList.vue'),
    },
//  form route for add and edit
    {
        path: '/form',
        component: () => import(/*webpackChunkName:"FormTask"*/'../components/FormTask.vue'),
    },
    // rute  for the task details
    {

        name: 'taskDetails',
        path: '/task/details/:id',
        component: () => import(/*webpackChunkName:"FormTask"*/'../components/FormTask.vue'),
    },
    // route for edit
    {
        path: '/task/edit/:id',
        component: () => import(/*webpackChunkName:"FormTask"*/'../components/FormTask.vue'),
    }
]
// creamos router
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;