<template>
    <div>
        <el-menu :unique-opened="true" class="em-el-menu">
            <el-submenu v-for="menu in menus" :key="menu.key" :index="menu.key">
                <template slot="title">
                    <i :class="menu.icon" class="em-icon-color"></i>
                    <span>{{menu.name}}</span>
                </template>
                <el-menu-item v-for="sub in menu.subs" :key="sub.key" :index="sub.key">
                    <i :class="sub.icon" class="em-icon-color"></i>
                    <router-link :to="sub.link">{{sub.name}}</router-link>
                </el-menu-item>
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
    }
}
</script>

<style scoped lang="scss">
.em-el-menu {
    height: 100vh;
}

.el-menu > li > a {
    color: #303133;
}
</style>
