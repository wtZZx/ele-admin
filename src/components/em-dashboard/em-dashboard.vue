<template>
    <div>
        <el-row>
            <el-col :span="6" class="card-wrap">
                <el-card>
                    <el-row>
                        <el-col :span="12">
                            <h2>STUDENTS</h2>
                        </el-col>
                        <el-col :span="12">
                            <h2 style="color: #707cd2; text-align: center;">
                                <i class="ion-person-stalker"></i>
                                {{ info.stu }}</h2>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="6" class="card-wrap">
                <el-card>
                    <el-row>
                        <el-col :span="12">
                            <h2>NEW WAND</h2>
                        </el-col>
                        <el-col :span="12">
                            <h2 style="color: #7ace4c; text-align: center;">
                                <i class="ion-wand"></i>
                                {{ info.wand }}</h2>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="6" class="card-wrap">
                <el-card>
                    <el-row>
                        <el-col :span="12">
                            <h2>Azkaban</h2>
                        </el-col>
                        <el-col :span="12">
                            <h2 style="color: #41b3f9; text-align: center;">
                                <i class="ion-nuclear"></i>
                                {{ info.Azkaban }}</h2>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="6" class="card-wrap">
                <el-card>
                    <el-row>
                        <el-col :span="12">
                            <h2>NEW WORK</h2>
                        </el-col>
                        <el-col :span="12">
                            <h2 style="color: #f33155; text-align: center;">
                                <i class="ion-coffee"></i>
                                {{ info.work }}</h2>
                        </el-col>
                    </el-row>
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
            str: 'DashBoard',
            info: {
                stu: 35597,
                wand: 988,
                Azkaban: 5,
                work: 12
            }
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
            }
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

h2 {
    font-weight: 500;
    text-align: center;
}

#mag {
    height: 10rem;
}
</style>


