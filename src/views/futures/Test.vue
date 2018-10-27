<template>
    <div>
        <el-button @click="dialogVisible = true">新增</el-button>
        <create :visible="dialogVisible" @close="handleClose"></create>
    </div>
</template>

<script>
 import create from '@/components/coefficient/create/index'
    export default {
        data() {
            return {
                dialogVisible: true
            }
        },
        components: { create },
        methods: {
            handleClose() {
                this.dialogVisible = false;
            }
        }
    }
</script>

<style scoped>

</style>