<template>
    <div class='leftPieChart'>
        <div class="title border">
            <span class="titleItem">报单次数：267</span>
            <span class="titleItem">撤单率：79%</span>
        </div>
        <div id='leftPieChart' class="border" style="width: 100%;height: 400px"></div>
    </div>
</template>

<script>
    export default {
        name: 'leftPieChart',
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
                let leftPieChart = this.$echarts.init(document.getElementById('leftPieChart'));
                leftPieChart.setOption({
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
                        data: ['成交次数', '撤单次数']
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
                                    value: 10, name: '成交次数',
                                    itemStyle: {
                                        normal: {
                                            color: '#d48265'
                                        }
                                    }
                                },
                                {
                                    value: 5, name: '撤单次数',
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
    .leftPieChart {

    }
</style>
