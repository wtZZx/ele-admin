<template>
    <div>
        <img src="../../assets/image/forbidden.jpg">

        <el-button type="danger" v-permission="80.99">删除</el-button>
    </div>
</template>

<script>
export default {
    name: 'emAccessDenied',
    data() {
        return {

        }
    }
}
</script>