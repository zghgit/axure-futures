<template>
    <div class="lineCharts">
        <div class="title border">相关系数识别</div>
        <div id='lineChart' class="border"  style="width: 100%;height: 400px"></div>
    </div>
</template>

<script>
    export default {
        name: 'lineChart',
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
            this.draw()
        },
        methods: {
            draw() {
                let lineChart = this.$echarts.init(document.getElementById('lineChart'));
                lineChart.setOption({
                    // title: {
                    //     text: '相关系数识别',
                    //     left: 'center',
                    // },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['账户1','账户2','账户3'],
                        bottom: '3%'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2018-08-02', '2018-08-03', '2018-08-04', '2018-08-05', '2018-08-06', '2018-08-07', '2018-08-08', '2018-08-09', '2018-08-10', '2018-08-11']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'账户1',
                            type:'line',
                            data:[200, 500, 700, 400, 600, 900, 500,760,820,620]
                        },
                        {
                            name:'账户2',
                            type:'line',
                            data:[100, 380, 801, 534, 720, 1030, 420,500,930,510]
                        },
                        {
                            name:'账户3',
                            type:'line',
                            data:[320, 720, 901, 334, 590, 1230, 620,900,1200,830]
                        }
                    ]

                },false)
            }
        },
        beforeDestory() {
        }
    };
</script>

<style lang='less' scoped>
  .lineCharts {

  }
</style>
