<template>
    <div>
        <el-menu :unique-opened="true" class="em-el-menu">
            <el-menu-item index="2">
                <i class="ion-ios-speedometer em-menu-icon"></i>
                <span slot="title">控制台</span>
            </el-menu-item>
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
</style>
