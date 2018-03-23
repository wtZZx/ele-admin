// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './assets/theme/index.css'
import './assets/index.scss'

// 引入vue-amap
import VueAMap from 'vue-amap';

import util from './utils/util'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })
Vue.use(VueAMap);

Vue.directive('permission', {
    inserted(el, binding) {
        if(!util.hasPermission(binding.expression)) {
            el.remove()
        }
    }
})

// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德的key
    key: 'c1e421d8943979dd65b2a639f41b0ca9',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})


// c1e421d8943979dd65b2a639f41b0ca9