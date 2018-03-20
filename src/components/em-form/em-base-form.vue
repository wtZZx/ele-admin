<template>
    <div>
        <div class="em-breadcrumb-wrap">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>普通表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-row>
            <el-col :span="24">
                <el-card class="form-wrap">
                    <div slot="header" class="clearfix">
                        <span>行内表单</span>
                    </div>
                    <div>
                        <el-form :inline="true" :model="formInline" class="demo-form-inline">
                            <el-form-item label="姓名">
                                <el-input v-model="formInline.user" placeholder="请输入姓名"></el-input>
                            </el-form-item>
                            <el-form-item label="性别">
                                <el-select v-model="formInline.sex" placeholder="请选择姓别">
                                    <el-option label="男" value="male"></el-option>
                                    <el-option label="女" value="female"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="10">
                <el-card class="form-wrap">
                    <div slot="header" class="clearfix">
                        <span>水平表单</span>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="14">
                <el-card class="form-wrap">
                    <div slot="header" class="clearfix">
                        <span>垂直表单</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <el-card class="form-wrap">
                    <div slot="header" class="clearfix">
                        <span>带验证的表单</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'emBaseForm',
    data() {
        return {
            formInline: {
                user: '',
                sex: ''
            }
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

.form-wrap {
    margin: .5rem;
}
</style>
