<template>
    <div>
        <div class="em-breadcrumb-wrap">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>标签列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        <div class="em-box em-box-primary">
            
            <el-tabs v-model="activeName" @tab-click="handleClick" class="em-tab-table">
                <el-tab-pane label="格兰芬多" name="Gryffindor">格兰芬多</el-tab-pane>
                <el-tab-pane label="斯莱特林" name="Slytherin">斯莱特林</el-tab-pane>
                <el-tab-pane label="拉文克劳" name="Ravenclaw">拉文克劳</el-tab-pane>
                <el-tab-pane label="赫奇帕奇" name="Hufflepuff">赫奇帕奇</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    name: 'emBaseTabTable',
    data() {
        return {
            activeName: "second"
        };
    },
    
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style lang="scss" scoped>
.em-tab-table {
    padding: 0 20px 0 20px;
}
</style>
