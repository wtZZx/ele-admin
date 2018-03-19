<template>

    <div>
        <div class="em-breadcrumb-wrap">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>基础表格</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="em-box em-box-primary">
            <div class="em-box-controls with-border">
                <el-form ref="form" :model="queryArg" :inline="true">
                    <el-form-item>
                        <el-input v-model="queryArg.name" placeholder="姓名"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input v-model="queryArg.mobile" placeholder="手机号"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-select v-model="queryArg.food" v-bind:clearable="true" placeholder="请选择学院">
                            <el-option
                            v-for="item in houseOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button-group>
                            <el-button icon="ion-refresh"> 重置</el-button>
                            <el-button type="primary" icon="ion-search" @click="query"> 查询</el-button>
                        </el-button-group>
                    </el-form-item>
                </el-form>
            </div>

            <div class="em-box-body">
                <el-table :data="students" stripe style="width: 100%">
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="age" label="年龄"></el-table-column>
                <el-table-column prop="house" label="学院"></el-table-column>
                <el-table-column prop="blood" label="血统"></el-table-column>
                <el-table-column prop="enrollment" label="入学日期"></el-table-column>
            </el-table>
            </div>

            <div class="em-box-controls clearfix">
                <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                layout="total, prev, pager, next, jumper"
                :total="total"
                class="pull-right">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import $server from '@/api/list.js'

export default {
    name: 'emBaseTable',
    data() {
        return {
            str: 'Organs',
            currentPage: 1,
            total: 50,
            queryArg: {
                name: '',
                mobile: '',
                food: ''
            },
            houseOptions: [],
            students: []
        }
    },
    mounted() {
        $server.getHouseList().then(res => {
            this.houseOptions = res.data.houses
        })
        this.query()
    },
    methods: {
        query() {
            $server.queryList().then(res => {
                console.log(res)
                this.students = res.data.students
            })
        },
        handleCurrentChange() {

        }
    }
}
</script>
