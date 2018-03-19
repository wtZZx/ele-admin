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
                        <el-select v-model="queryArg.food" v-bind:clearable="true" placeholder="请选择食物">
                            <el-option
                            v-for="item in foodOptions"
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
                <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="简称">
                </el-table-column>
                <el-table-column prop="name" label="类型"></el-table-column>
                <el-table-column prop="address" label="等级"></el-table-column>
                <el-table-column label="行政归属"></el-table-column>
                <el-table-column label="状态"></el-table-column>
                <el-table-column label="创建日期"></el-table-column>
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
            foodOptions: [
                {
                    value: '小笼',
                    label: '小笼'
                },
                {
                    value: '猫耳朵',
                    label: '猫耳朵'
                },
                {
                    value: '生煎',
                    label: '生煎'
                }
            ],
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, 
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, 
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, 
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        }
    },
    mounted: function () {
        console.log($server, this)
        this.query()
    },
    methods: {
        query() {
            $server.queryList().then(res => {
                console.log(res)
            })
        },
        handleCurrentChange() {

        }
    }
}
</script>
