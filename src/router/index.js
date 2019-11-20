import Vue from 'vue'
import Router from 'vue-router'
const DashboardLayout = () => import( /* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue')
const LoginLayout = () => import('../components/loginLayout.vue')

function loadView(view) {
    return () => import(
        /* webpackChunkName: "view-
        [request]" */
        `../components/dashboardContents/${view}.vue`)
}
const routes = [{
    path: '/dashboard',
    component: DashboardLayout,
    children: [
        {
            name: 'UserController',
            path: '',
            component: loadView('userController')
        },
        {
            name: 'layananKendaraan',
            path: '/layananKendaraan',
            component: loadView('layananKendaraan')
        }
    ]
    },
    {
        path: '/',
        component: LoginLayout,
        name: 'LoginLayout'
    } ]
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: routes
})
export default router