<template>
    <div class='wordCloud'>
        <div class="title border ">关系词云</div>
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
                    {name: "打压", value: 10000, itemStyle: {normal: {color: 'black'}}},
                    {name: "私募", value: 6181, itemStyle: this.getRandomColor()},
                    {name: "虚假", value: 4386, itemStyle: this.getRandomColor()},
                    {name: "地址", value: 4055, itemStyle: this.getRandomColor()},
                    {name: "超仓", value: 2467, itemStyle: this.getRandomColor()},
                    {name: "拉抬", value: 2244, itemStyle: this.getRandomColor()},
                    {name: "频繁", value: 1898, itemStyle: this.getRandomColor()},
                    {name: "控股", value: 1484, itemStyle: this.getRandomColor()},
                    {name: "撤单率", value: 1112, itemStyle: this.getRandomColor()},
                    {name: "电话", value: 965, itemStyle: this.getRandomColor()},
                    {name: "申报", value: 847, itemStyle: this.getRandomColor()},
                    {name: "报单", value: 582, itemStyle: this.getRandomColor()},
                    {name: "系数", value: 555, itemStyle: this.getRandomColor()},
                    {name: "自买自卖", value: 550, itemStyle: this.getRandomColor()},
                    {name: "相同", value: 462, itemStyle: this.getRandomColor()},
                    {name: "相关", value: 366, itemStyle: this.getRandomColor()}
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

    }
</style>
