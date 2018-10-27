<template>
    <div class="index">
        <xheader></xheader>
        <kv></kv>
        <portal></portal>
    </div>
</template>

<script>
    import xheader from '@/components/index/xheader'
    // import kv from '@/components/index/kv'
    import kv from '../components/index/kv.vue'
    import portal from '@/components/index/portal'

    export default {
        components: {xheader, kv, portal}
        
    }
</script>

<style lang="less">
.index {
    width: 980px;
    margin: 0 auto;
}
</style>