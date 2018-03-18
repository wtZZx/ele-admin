<template>
    <div class="em-box em-box-primary">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="em-tab-table">
            <el-tab-pane label="评价审核" name="first">评价审核</el-tab-pane>
            <el-tab-pane label="医院评价" name="second">医院评价</el-tab-pane>
            <el-tab-pane label="医生投诉" name="third">医生投诉</el-tab-pane>
        </el-tabs>
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
