<template>
    <div>
        <el-row>
            <el-col :span="6" class="card-wrap">
                <el-card >
                    <h3>NEW USER</h3>
                </el-card>
            </el-col>
            <el-col :span="6" class="card-wrap">
                <el-card>
                    <h3>NEW PATIENT</h3>
                </el-card>
            </el-col>
            <el-col :span="6" class="card-wrap">
                <el-card>
                    <h3>NEW PROJECT</h3>
                </el-card>
            </el-col>
            <el-col :span="6" class="card-wrap">
                <el-card>
                    <h3>NEW WORK</h3>
                </el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="14" class="card-wrap">
                <el-card>
                    <div id="mag"></div>
                </el-card>
            </el-col>

            <el-col :span="10" class="card-wrap">
                <el-card>
                    <canvas></canvas>
                </el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="10" class="card-wrap">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../../assets/image/weather-bg.jpg" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>



    </div>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'emDashboard',
    data() {
        return {
            str: 'DashBoard'
        }
    },
    mounted() {
        echarts.init(document.querySelector('#mag')).setOption({
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '魔法预警',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: '安全值'}]
                }
            ]
        })
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

#mag {
    height: 10rem;
}
</style>


