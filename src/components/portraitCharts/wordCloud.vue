<template>
    <div class='wordCloud'>
        <div class="title border ">词云</div>
        <div id="wordCloudCharts" class="border" style="width: 100%;height: 300px;"></div>
    </div>
</template>

<script>
    require('echarts-wordcloud')
    export default {
        name: 'wordCloud',
        components: {},
        mixins: [],
        props: {},
        data() {
            return {
                wordCloudData:[
                    {name: "地址相同", value: 10000, itemStyle: {normal: {color: 'black'}}},
                    {name: "电话相同", value: 6181, itemStyle: this.getRandomColor()},
                    {name: "基金经理相同", value: 4386, itemStyle: this.getRandomColor()},
                    {name: "报单次数超限", value: 4055, itemStyle: this.getRandomColor()},
                    {name: "报单速度高", value: 2467, itemStyle: this.getRandomColor()},
                    {name: "撤单率高", value: 2244, itemStyle: this.getRandomColor()},
                    {name: "下单人相同", value: 1898, itemStyle: this.getRandomColor()},
                    {name: "净买入强相关", value: 1484, itemStyle: this.getRandomColor()},
                    {name: "净卖出强相关", value: 1112, itemStyle: this.getRandomColor()},
                    {name: "空头持仓强相关", value: 965, itemStyle: this.getRandomColor()},
                    {name: "多头持仓强相关", value: 847, itemStyle: this.getRandomColor()},
                    {name: "盈亏相关", value: 582, itemStyle: this.getRandomColor()},
                    {name: "客户信息高度相关", value: 555, itemStyle: this.getRandomColor()},
                    {name: "高频交易", value: 550, itemStyle: this.getRandomColor()},
                    {name: "相关系数高", value: 462, itemStyle: this.getRandomColor()}
                    // {name: "相关", value: 366, itemStyle: this.getRandomColor()}
                ]
            };
        },
        computed: {},
        watch: {},
        created() {

        },
        mounted() {
            this.draw()
        },
        methods: {
            getRandomColor() {
                return {
                    normal: {
                        color: 'rgb(' + [
                            Math.round(Math.random() * 256),
                            Math.round(Math.random() * 256),
                            Math.round(Math.random() * 256)
                        ].join(',') + ')'
                    }
                }
            },
            draw(){
                let myChart = this.$echarts.init(document.getElementById('wordCloudCharts'))
                myChart.setOption({
                    // title: {
                    //     text: '关系词云',
                    //     left:'center'
                    // },
                    width: '100%',
                    tooltip: {
                        show: true
                    },
                    series: [{
                        name: '关系',
                        type: 'wordCloud',
                        size: ['80%', '80%'],
                        textRotation : [0, 45, 90, -45],
                        textPadding: 10,
                        autoSize: {
                            enable: false,
                            minSize: 14
                        },
                        data: this.wordCloudData
                    }]
                },false)
            }
        },
        beforeDestory() {
        }
    };
</script>

<style lang='less' scoped>
    .wordCloud {
        // width: 48%;
    }
</style>
