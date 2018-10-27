<template>
    <div class='rightPieChart'>
        <div class="title border">
            <span class="titleItem">自成交笔数：56笔</span>
            <span class="titleItem">自成交手数：1245手</span>
        </div>
        <div id='rightPieChart' class="border" style="width: 100%;height: 400px"></div>
    </div>
</template>

<script>
    export default {
        name: 'rightPieChart',
        components: {},
        mixins: [],
        props: {},
        data() {
            return {};
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
                let rightPieChart = this.$echarts.init(document.getElementById('rightPieChart'));
                rightPieChart.setOption({
                    // title : {
                    //     text: '南丁格尔玫瑰图',
                    //     subtext: '纯属虚构',
                    //     x:'center'
                    // },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        x: 'center',
                        y: 'bottom',
                        data: ['自成交次数', '总成交次数']
                    },
                    // toolbox: {
                    //     show : true,
                    //     feature : {
                    //         mark : {show: true},
                    //         dataView : {show: true, readOnly: false},
                    //         magicType : {
                    //             show: true,
                    //             type: ['pie', 'funnel']
                    //         },
                    //         restore : {show: true},
                    //         saveAsImage : {show: true}
                    //     }
                    // },
                    calculable: true,
                    series: [
                        {
                            type: 'pie',
                            radius: [50, 80],
                            center: ['50%', '50%'],
                            roseType: 'radius',
                            data: [
                                {
                                    value: 5, name: '自成交次数',
                                    itemStyle: {
                                        normal: {
                                            color: '#d48265'
                                        }
                                    }
                                },
                                {
                                    value: 15, name: '总成交次数',
                                    itemStyle: {
                                        normal: {
                                            color: '#61a0a8'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }, false);
            }
        },
        beforeDestory() {
        }
    };
</script>

<style lang='less' scoped>
    .rightPieChart {

    }
</style>
