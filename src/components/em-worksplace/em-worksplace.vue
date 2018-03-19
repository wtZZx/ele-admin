<template>
    <div>
        <el-row>
            <el-col :span="24" class="card-wrap">
                <el-card >
                    <h4>早上好 XXX</h4>
                </el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="10" class="card-wrap">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>任务</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'任务' + o }}
                    </div>
                </el-card>
            </el-col>

            <el-col :span="14" class="card-wrap">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>项目进度</span>
                    </div>
                    <div>
                        <el-progress :percentage="0"></el-progress>
                        <el-progress :percentage="70"></el-progress>
                        <el-progress :percentage="100" status="success"></el-progress>
                        <el-progress :percentage="50" status="exception"></el-progress>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="10" class="card-wrap">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>动态</span>
                    </div>
                    <div>
                        
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'emWorksplace',
    data() {
        return {
            str: 'DashBoard'
        }
    },
    mounted() {
        
    }
}
</script>

<style lang="scss">
.card-wrap {
    padding: 1rem;
}

#map {
    width: 100%;
    height: 100%;
}
</style>


