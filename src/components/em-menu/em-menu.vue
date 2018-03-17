<template>
    <div>
        <el-menu :unique-opened="true" class="em-el-menu" :collapse="isCollapse" v-bind:class="{ 'em-el-collaspen': isCollapse }">            
            <el-submenu v-for="menu in menus" :key="menu.key" :index="menu.key">
                <template slot="title">
                    <i :class="menu.icon" class="em-icon-color em-menu-icon"></i>
                    <span>{{menu.name}}</span>
                </template>

                <template v-for="sub in menu.subs">
                    <router-link :to="sub.link" :key="sub.key">
                        <el-menu-item  :index="sub.key">
                            <i :class="sub.icon" class="em-icon-color em-menu-icon"></i>
                            <span>{{sub.name}}</span>
                        </el-menu-item>
                    </router-link>
                </template>
                
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import menu from './config'

export default {
    name: 'emMenu',
    data() {
        return {
            menus: menu
        }
    },
    props: {
        isCollapse: Boolean
    },
    methods: {
    },
    watch: {
        isCollapse(nv, ov) {
            console.log(nv, ov, this)
        }
    }
}
</script>

<style scoped lang="scss">
.el-menu > li > a {
    color: #303133;
}

.em-menu-icon {
    padding-right: 8px;
}

.em-el-menu {
    border-right: none;
}

.em-el-collaspen {
    width: 54px !important;
    transition: all .5s;
}
</style>
