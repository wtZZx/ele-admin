import Vue from 'vue'
import Router from 'vue-router'

// Components
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
            component: emDashBoard,
            meta: {
                permission: '01'
            }
        },
        {
            path: '/worksplace',
            name: 'worksplace',
            component: emWorksplace,
            meta: {
                permission: '02'
            }
        },
        {
            path: '/table',
            name: 'table',
            component: emBaseTable,
            props: (route) => ({ query: route.query.q }),
            meta: {
                permission: '03'
            }
        },
        {
            path: '/tab-table',
            name: 'tab-table',
            component: emBaseTabTable,
            props: (route) => ({ query: route.query.q }),
            meta: {
                permission: '04'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: emLogin,
            meta: {
                permission: '05'
            }
        },
        {
            path: '/stand-form',
            name: 'stand-form',
            component: emBaseFrom,
            meta: {
                permission: '06'
            }
        },
        {
            path: '/profile/:id',
            name: 'profile',
            component: emProfile,
            props: true,
            meta: {
                permission: '07'
            }
        },
        {
            path: '/map',
            name: 'map',
            component: emMap,
            meta: {
                permission: '08'
            }
        },
        {
            path: '/forbidden',
            name: 'forbidden',
            component: emAccessDenied,
            meta: {
                permission: '99'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path == '/forbidden') { // 如果是 forbidden 直接放行
        next()
    } else if (util.hasPermission(to.meta.permission)) {
        next()
    } else {
        next({ name: 'forbidden' })
    }
})

export default router
