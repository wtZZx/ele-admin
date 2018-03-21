<template>
    <div>
        <el-card>
            <div slot="header" class="clearfix">
                <span>学生信息</span>
                <el-button style="float: right; padding: 3px 0; color: #f56c6c" type="text" @click="specil">注销信息</el-button>
            </div>

            <el-row class="desc-list">
                <h3 class="desc-title">基本信息</h3>
                <el-col :span="24">
                    <el-row class="desc-row">
                        <el-col :span="6">
                            <label>学号：</label>
                            <span>{{ stu.id }}</span>
                        </el-col>

                        <el-col :span="6">
                            <label>学号：</label>
                            <span>{{ stu.name }}</span>
                        </el-col>

                        <el-col :span="6">
                            <label>性别：</label>
                            <span>{{ stu.sex }}</span>
                        </el-col>

                        <el-col :span="6">
                            <label>年龄：</label>
                            <span>{{ stu.age }}</span>
                        </el-col>
                    </el-row>
                </el-col>

                <el-col :span="24">
                    <el-row class="desc-row">
                        <el-col :span="6">
                            <label>地址：</label>
                            <span>{{ stu.addr }}</span>
                        </el-col>

                        <el-col :span="6">
                            <label>血统：</label>
                            <span>{{ stu.blood }}</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            
            <el-row class="desc-list">
                <h3 class="desc-title">在校记录</h3>
                <div>
                    <el-table :data="stu.timeline" stripe style="width: 100%">
                        <el-table-column prop="id" label="ID"></el-table-column>
                        <el-table-column prop="grade" label="年级"></el-table-column>
                        <el-table-column prop="time" label="时间"></el-table-column>
                        <el-table-column prop="info" label="事件"></el-table-column>
                    </el-table>
                </div>
            </el-row>

        </el-card>
    </div>
</template>

<script>
export default {
    name: "emProfile",
    data() {
        return {
            stu: {
                id: 'g-10086',
                name: 'HarryPotter',
                sex: '男',
                age: '18',
                addr: 'Privet Drive',
                blood: '混血',
                timeline: [
                    { id: '1', grade: 1, time: '1991-1992', info: '入学，狮院' },
                    { id: '2', grade: 1, time: '1991-1992', info: '参与魁地奇并胜利' },
                    { id: '3', grade: 1, time: '1991-1992', info: '成功保护了魔法石不被伏地怪抢走' },
                    { id: '4', grade: 2, time: '1992-1993', info: '认识了家养小精灵-多比' },
                    { id: '5', grade: 2, time: '1992-1993', info: '成功找到了秘室并找破坏了一个魂器' },
                    { id: '6', grade: 3, time: '1993-1994', info: '学会了呼神护卫神技' },
                ]
            }
        }
    },
    
    methods: {
        specil() {
            this.$notify({
                title: '成功',
                message: '成功注销了破特的学籍!',
                type: 'success'
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.desc-list {
    color: rgba(0, 0, 0, .65);
    margin-bottom: 1rem;
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.desc-title {
    font-weight: 500;
}

.desc-row {
    margin: .8rem 0;
}

</style>

