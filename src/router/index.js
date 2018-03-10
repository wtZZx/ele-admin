import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'
import emDashBoard from '@/components/em-dashboard/em-dashboard.vue'
import emBaseTable from '@/components/em-table/em-base-table.vue'
import emLogin from '@/components/em-login/em-login.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: emDashBoard
        },
        {
            path: '/table',
            name: 'table',
            component: emBaseTable,
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/login',
            name: 'login',
            component: emLogin
        }
    ]
})
