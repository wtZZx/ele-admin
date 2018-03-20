<template>
    <el-amap vid="amapDemo" :zoom="zoom" :center="center">
    </el-amap>
</template>

<script>
import { AMapManager } from 'vue-amap'

export default {
    name: 'emMap',
    data() {
        return {
            AMapManager,
            zoom: 12,
            center: [131.59996, 31.197646],
            events: {
                init: (o) => {
                    console.log(o.getCenter())
                    console.log(this.$refs.map.$$getInstance())
                    o.getCity(result => {
                        console.log(result)
                    })
                },
                'moveend': () => {},
                'zoomchange': () => {},
                'click': (e) => {
                    alert('map clicked');
                }
            },
            plugin: ['ToolBar', {
                pName: 'MapType',
                defaultType: 0,
                events: {
                    init(o) {
                        console.log(o);
                    }
                }
            }]
        };
    },
    methods: {
        getMap() {
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
