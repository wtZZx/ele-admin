<template>
    <div id="chart" style="width: 800px; height: 800px;">
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
    mounted () {
        
        echarts.init(document.getElementById('chart')).setOption({
            tooltip: { trigger: 'item' },
            grid: { 
                left: '5px',
                right: '5px',
                top: '5px',
                bottom: '5px'
            },
            visualMap: {
                min: 0,
                max: 500,
                left: '3%',
                bottom: '3%',
                text:['高','低'],           // 文本，默认为数值文本
                calculable : true,
                inRange: {
                    color: ['#F2F0FB', '#5E60EB']
                }
            },
            series: [
                {
                    name: '机构数量',
                    type: 'map',
                    map: 'china',
                    left: 'center',
                    top: 'middle',
                    roam: false,
                    label: {
                        normal: {
                            //show: true
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                    itemStyle: {
                        normal: { areaColor: '#FFFFFF', borderColor: '#9B89DF' },
                        emphasis: { areaColor: '#DDD7F4' }
                    }
                }
            ]
        });
    }
}
</script>

