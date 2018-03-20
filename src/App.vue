<template>
    <div id="app">
        <el-container>
            <el-aside width="215px" class="em-aside" v-bind:class="{ 'em-aside-collspse' : isCollapse}">
                <em-menu v-bind:isCollapse=isCollapse></em-menu>
            </el-aside>

            <el-container class="content-wrap" v-bind:class="{ 'em-content-collspan' : isCollapse }">
                <el-header class="em-header">
                    <el-row class="em-header-row">
                        <el-col v-bind:span="1">
                            <div class="sidebar-toggle" @click="handleIsCollapse">
                                <i class="ion-android-menu"></i>
                            </div>
                        </el-col>
                        <el-col v-bind:span="2">
                            <div class="em-logo">
                            </div>
                        </el-col>

                        <el-col v-bind:span="2" :offset="19">
                            

                            <el-dropdown>
                                <div class="avatar">
                                    <div class="avatar-img">
                                        <img src="./assets/image/avatar-default.png">
                                    </div>
                                    <div class="avatar-name">
                                        <span>邓布利多</span>
                                    </div>
                                </div>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>
                                        <i class="ion-person"></i>
                                        个人中心
                                    </el-dropdown-item>
                                    <el-dropdown-item :divided="true">
                                        <i class="ion-gear-a"></i>
                                        设置
                                    </el-dropdown-item>
                                    <el-dropdown-item :divided="true">
                                        <i class="ion-log-out"></i>
                                        退出登录
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                    </el-row>
                </el-header>

                <el-container class="em-el-container">
                    <el-main>
                        <router-view/>
                    </el-main>

                    <el-footer height="50px"></el-footer>
                </el-container>
            </el-container>

        </el-container>
    </div>
</template>

<script>
import emMenu from "./components/em-menu/em-menu.vue";

export default {
    name: "App",
    components: {
        emMenu
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        handleIsCollapse() {
            this.isCollapse = !this.isCollapse
        }
    }
};
</script>

<style scope lang="scss">
.app-wrap {
  height: 100%;
}

.em-logo {
    height: 100%;
    // background: url('./assets/image/logo.png');
    background: #50d2d2;
    background-size: cover;
}

.em-logo > h2 {
    font-weight: 300;
    & > i {
        vertical-align: middle;
    }
}

#id {
  height: 100%;
}

.em-header-row {
    height: 100%;
}

.el-col {
    height: 100%;
}

.em-aside {
    position: fixed;
    height: 100%;
    background: #fff;
    border-right: solid 1px #e6e6e6;
    transition: width .5s;
    z-index: 99999;
}

.content-wrap {
    margin-left: 215px;
}

.sidebar-toggle {
    height: 100%;
    box-sizing: border-box;
    padding: 14px 22px;
    cursor: pointer;

    & > i {
        font-size: 30px;
    }
}

.avatar {
    height: 85%;
    margin: .3rem;
    padding: .3rem;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    cursor: pointer;
    color: rgba(94, 96, 235, .8);
    border-radius: 5px;
    transition: all .5s;

    &:hover {
        background: rgba(94, 96, 235, .8);
        color: #fff;
    }
}

.avatar-img {
    margin: 0 5px;

    & > img {
        width: 2.5rem;
        height: 2.5rem;
        transition: transform .5s;

        &:hover {
            transform: rotate(-45deg);
        }
    }

}

.avatar-name {
    align-self: center;
    font-size: 14px;

    & > span {
        margin: 0 5px;
    }
}
</style>

