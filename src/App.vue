<template>
    <div id="app">
        <el-container>
            <el-header class="em-header">
                <el-row>
                    <el-col v-bind:span="2">
                        <div class="em-logo">
                            <h2>仪表盘</h2>
                        </div>
                    </el-col>
                </el-row>
            </el-header>

            <el-container>
                <el-aside width="215px">
                    <em-menu></em-menu>
                </el-aside>

                <el-container class="em-el-container">
                    <el-main class="em-box em-box-primary">
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
    }
};
</script>

<style scope lang="scss">
.app-wrap {
  height: 100%;
}

.em-logo {
    color: #fff;
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
</style>

