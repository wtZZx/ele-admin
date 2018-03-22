import Vue from 'vue'
import Router from 'vue-router'
import emProfile from '@/components/em-profile/em-profile.vue'
import emDashBoard from '@/components/em-dashboard/em-dashboard.vue'
import emBaseTable from '@/components/em-table/em-base-table.vue'
import emLogin from '@/components/em-login/em-login.vue'
import emBaseTabTable from '@/components/em-table/em-base-tab-table.vue'

import emBaseFrom from '@/components/em-form/em-base-form.vue'
import emWorksplace from '@/components/em-worksplace/em-worksplace.vue'

import emMap from '@/components/em-map/em-map.vue'

import emAccessDenied from '@/components/em-access-denied/em-access-denied.vue'

import util from '../utils/util'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: emDashBoard
        },
        {
            path: '/worksplace',
            name: 'worksplace',
            component: emWorksplace
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
        },
        {
            path: '/profile/:id',
            name: 'profile',
            component: emProfile,
            props: true,
            meta: {
                permission: '80'
            }
        },
        {
            path: '/map',
            name: 'map',
            component: emMap
        },
        {
            path: '/forbidden',
            name: 'forbidden',
            component: emAccessDenied
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (util.hasPermission(to.meta.permission)) {
        next()
    } else if (to.path !== '/forbidden') {
        next({ path: '/forbidden' })
    }
})

export default router
