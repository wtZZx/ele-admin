<template>
    <div class="em-box em-box-primary">
    </div>
</template>
<script>
export default {
    name: 'emBaseForm',
    data() {
        return {
            activeName: "second"
        };
    },
    
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style lang="scss" scoped>
.em-tab-table {
    padding: 0 20px 0 20px;
}
</style>
