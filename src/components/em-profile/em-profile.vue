<template>
    <div class="em-box em-box-primary">
        <div class="page-header">
            <p class="page-header-text">麻鸡详情</p>
        </div>
        <div class="em-box-controls">

        </div>
    </div>
</template>

<script>
export default {
    name: "emProfile",
    data() {
        return {
            msg: "Great"
        }
    },
    
    methods: {
        open() {
            this.$notify({
                title: '系统错误',
                message: 'service[eh.shoppingService] method[findShoppingOrdersWithInfo] parameters are not compatible',
                type: 'error'
            });
        }
    }
};
</script>
