<template>
    <div class='radarChart'>
        <div class="title border">关系权重评分：95</div>
        <div id="radarCharts" class="border" style="width:100%;height: 300px;"></div>
    </div>
</template>

<script>
    export default {
        name: 'radarChart',
        components: {},
        mixins: [],
        props: {},
        data() {
            return {
                radarChartData: [{
                    value: [95, 50, 70, 80],
                    name: '关系权重评分'
                }]
            };
        },
        computed: {},
        watch: {},
        created() {

        },
        mounted() {
            this.draw();
        },
        methods: {
            draw() {
                let radarCharts = this.$echarts.init(document.getElementById('radarCharts'));
                radarCharts.setOption({
                    // title:{
                    //     text:'关系权重评分：95',
                    //     left:'center'
                    // },
                    tooltip: {},
                    width: '100%',
                    radar: {
                        // shape: 'circle',
                        indicator: [
                            {name: '相关系数', max: 100},
                            {name: '私募基金', max: 100},
                            {name: '高频交易', max: 100},
                            {name: '基本信息', max: 100}
                        ],
                        splitNumber: 3,
                        center: ['50%', '55%'],
                        name: {
                            formatter: '{value}',
                            textStyle: {
                                fontSize: 16,
                                color: 'rgba(87, 203, 204, 1)'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(0, 0, 0, 0)',
                                    'rgba(87, 203, 204, 0.2)', 'rgba(0, 0, 0, 0)',
                                    'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
                                shadowColor: 'rgba(255, 255, 255, 1)',
                                shadowBlur: 40
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(87, 203, 204, 0.3)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(87, 203, 204, 0.6)',
                            }
                        },
                        radius: 85
                    },
                    series: [{
                        name: '关系权重评分',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data: this.radarChartData
                    }]
                }, false);
            }
        },
        beforeDestory() {
        }
    };
</script>

<style lang='less' scoped>
    .radarChart {

    }
</style>
