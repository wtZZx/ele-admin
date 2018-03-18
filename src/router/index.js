import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'
import emDashBoard from '@/components/em-dashboard/em-dashboard.vue'
import emBaseTable from '@/components/em-table/em-base-table.vue'
import emLogin from '@/components/em-login/em-login.vue'
import emBaseTabTable from '@/components/em-table/em-base-tab-table.vue'

import emBaseFrom from '@/components/em-form/em-base-form.vue'

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
            path: '/tab-table',
            name: 'tab-table',
            component: emBaseTabTable,
            props: (route) => ({ query: route.query.q })
        },
        {
            path: '/login',
            name: 'login',
            component: emLogin
        },
        {
            path: '/stand-form',
            name: 'stand-form',
            component: emBaseFrom
        }
    ]
})
