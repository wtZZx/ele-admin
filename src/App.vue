<template>
    <div id="app">
        <el-container>
            <el-aside width="215px" class="em-aside">
                <em-menu></em-menu>
            </el-aside>

            <el-container class="content-wrap">
                <el-header class="em-header">
                    <el-row class="em-header-row">
                        <el-col v-bind:span="2">
                            <div class="em-logo">
                            </div>
                        </el-col>
                    </el-row>
                </el-header>

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

// .em-logo {
//     height: 100%;
//     background: #50d2d2;
//     border-radius: .5rem;
// }

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
    padding: .5rem;
}

.el-col {
    height: 100%;
}

.em-aside {
    position: fixed;
    height: 100%;
    background: #fff;
    border-right: solid 1px #e6e6e6
}

.content-wrap {
    margin-left: 215px;
}
</style>

