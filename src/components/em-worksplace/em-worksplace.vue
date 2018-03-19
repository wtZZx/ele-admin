<template>
    <div>
        <el-row>
            <el-col :span="24" class="card-wrap">
                <el-card>
                    <el-row>
                        <el-col :span="1">
                            <img src="../../assets/image/avatar-default.png" class="ws-avatar">
                        </el-col>
                        
                        <el-col :span="20" class="desc">
                            <p class="desc-welcome">早上好 破特</p>
                            <p class="desc-info">大难不死的破特 | 神秘事务司</p>
                        </el-col>
                    </el-row>
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
                        {{'研究麻瓜' + o }}
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
                        <el-alert
                            title="赫敏"
                            type="info"
                            description="成功的研制了福灵剂"
                            show-icon>
                        </el-alert>

                        <el-alert
                            title="伏地怪"
                            type="warning"
                            description="制造了一个新的魂器"
                            show-icon>
                        </el-alert>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="14" class="card-wrap">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>魔法值</span>
                    </div>
                    <div id="info">
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
        echarts.init(document.querySelector('#info')).setOption({
            xAxis: {},
            yAxis: {},
            series: [{
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.0, 6.95],
                    [13.0, 7.58],
                    [9.0, 8.81],
                    [11.0, 8.33],
                    [14.0, 9.96],
                    [6.0, 7.24],
                    [4.0, 4.26],
                    [12.0, 10.84],
                    [7.0, 4.82],
                    [5.0, 5.68]
                ],
                type: 'scatter'
            }]
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

.ws-avatar {
    width: 72px;
    height: 72px;
}

.desc {
    margin-left: 30px;
}

.desc-welcome {
    font-size: 20px;
    color: rgba(0, 0, 0, .85);
    margin: .5em 0;
}

.desc-info {
    color: rgba(0, 0, 0, .4);
}

#info {
    height: 20rem;
}
</style>


