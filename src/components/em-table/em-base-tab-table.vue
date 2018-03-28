<template>
    <div>
        <div class="em-breadcrumb-wrap">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>标签列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="em-box em-box-primary">    
            <el-tabs :value="activeName" @tab-click="switchTab" class="em-tab-table">
                <el-tab-pane label="格兰芬多" name="1" >
                    <div class="em-box-controls with-border">
                        <el-form ref="form" :model="queryArg" :inline="true">
                            <el-form-item>
                                <el-input v-model="queryArg.name" placeholder="姓名"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-input v-model="queryArg.mobile" placeholder="手机号"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button-group>
                                    <el-button icon="ion-refresh"> 重置</el-button>
                                    <el-button type="primary" icon="ion-search" @click="query"> 查询</el-button>
                                </el-button-group>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="斯莱特林" name="2">
                    <div class="em-box-controls with-border">
                        <el-form ref="form" :inline="true">
                            <el-form-item>
                                <el-input placeholder="姓名"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="拉文克劳" name="3">
                    
                </el-tab-pane>
                <el-tab-pane label="赫奇帕奇" name="4">
                    
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    name: 'emBaseTabTable',
    data() {
        return {
            activeName: this.id,
            queryArg: {
                name: '',
                mobile: ''
            }
        };
    },
    props: ['id'],
    methods: {
        switchTab(tab, event) {
            this.$router.push({ name: 'tab-table', params: { id: tab.name }})
        },
        query() {

        }
    }
};
</script>

<style lang="scss" scoped>
.em-tab-table {
    padding: 0 20px 0 20px;
}
</style>
