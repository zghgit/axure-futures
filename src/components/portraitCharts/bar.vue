<template>
    <div class='bar'>
        <div class="title border">
            <span class="titleItem">合并持仓：23456</span>
            <span class="titleItem">最大持仓：34567</span>
            <span class="titleItem">超仓比例：<span style="color:red">270% </span></span>
            <span class="titleItem">超仓天数：5天</span>
            <el-button type="primary" size="mini" @click="showDetail" style="float: right;margin: 2px 20px 2px ">{{detailCon}}
            </el-button>
        </div>
        <div v-show="!isShowDetail" id="barChart" class="border" style="width: 100%;height: 400px"></div>
        <div v-show="isShowDetail" class="border">
            <el-table
                :data="tableData"
                stripe
                height="400px"
                style="width: 100%">
                <el-table-column
                    prop="tradDate"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="account1MaxVal"
                    label="账户1最大持仓"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="account2MaxVal"
                    label="账户2最大持仓">
                </el-table-column>
                <el-table-column
                    prop="account3MaxVal"
                    label="账户3最大持仓">
                </el-table-column>
                <el-table-column
                    prop="allVal"
                    label="合并持仓">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bar',
        components: {},
        mixins: [],
        props: {},
        data() {
            return {
                barData: {},
                tableData:[
                    {tradDate:'2018-08-02',account1MaxVal:'620',account2MaxVal:'250',account3MaxVal:'250',allVal:'250'},
                    {tradDate:'2018-08-03',account1MaxVal:'182',account2MaxVal:'212',account3MaxVal:'212',allVal:'212'},
                    {tradDate:'2018-08-04',account1MaxVal:'191',account2MaxVal:'201',account3MaxVal:'201',allVal:'201'},
                    {tradDate:'2018-08-05',account1MaxVal:'234',account2MaxVal:'154',account3MaxVal:'154',allVal:'154'},
                    {tradDate:'2018-08-06',account1MaxVal:'190',account2MaxVal:'210',account3MaxVal:'210',allVal:'210'},
                    {tradDate:'2018-08-07',account1MaxVal:'330',account2MaxVal:'630',account3MaxVal:'630',allVal:'630'},
                    {tradDate:'2018-08-08',account1MaxVal:'110',account2MaxVal:'110',account3MaxVal:'110',allVal:'110'},
                    {tradDate:'2018-08-09',account1MaxVal:'332',account2MaxVal:'191',account3MaxVal:'191',allVal:'191'},
                    {tradDate:'2018-08-10',account1MaxVal:'401',account2MaxVal:'234',account3MaxVal:'234',allVal:'234'},
                    {tradDate:'2018-08-11',account1MaxVal:'634',account2MaxVal:'290',account3MaxVal:'290',allVal:'290'},
                    {tradDate:'2018-08-12',account1MaxVal:'620',account2MaxVal:'250',account3MaxVal:'250',allVal:'250'},
                    {tradDate:'2018-08-13',account1MaxVal:'182',account2MaxVal:'212',account3MaxVal:'212',allVal:'212'},
                    {tradDate:'2018-08-14',account1MaxVal:'191',account2MaxVal:'201',account3MaxVal:'201',allVal:'201'},
                    {tradDate:'2018-08-15',account1MaxVal:'234',account2MaxVal:'154',account3MaxVal:'154',allVal:'154'},
                    {tradDate:'2018-08-16',account1MaxVal:'190',account2MaxVal:'210',account3MaxVal:'210',allVal:'210'},
                    {tradDate:'2018-08-17',account1MaxVal:'330',account2MaxVal:'630',account3MaxVal:'630',allVal:'630'},
                    {tradDate:'2018-08-18',account1MaxVal:'110',account2MaxVal:'110',account3MaxVal:'110',allVal:'110'},
                    {tradDate:'2018-08-19',account1MaxVal:'332',account2MaxVal:'191',account3MaxVal:'191',allVal:'191'},
                    {tradDate:'2018-08-20',account1MaxVal:'401',account2MaxVal:'234',account3MaxVal:'234',allVal:'234'},
                ],isShowDetail:false,
                detailCon:'明细'
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
                let barChart = this.$echarts.init(document.getElementById('barChart'));
                barChart.setOption({
                    // title: {
                    //     text: '合并持仓：23456        最大持仓：34567        超仓比例：270%          超仓天数：5天',
                    //     left: 'center',
                    // },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['账户1', '账户2', '账户3'],
                        bottom: '3%',
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '10%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value'
                    },
                    xAxis: {
                        type: 'category',
                        data:
                            ['2018-08-02', '2018-08-03', '2018-08-04', '2018-08-05', '2018-08-06', '2018-08-07',
                                '2018-08-08', '2018-08-09', '2018-08-10',
                                '2018-08-11', '2018-08-12', '2018-08-13', '2018-08-14', '2018-08-15', '2018-08-16', '2018-08-17', '2018-08-18', '2018-08-19', '2018-08-20']
                    },
                    series: [
                        {
                            name: '账户1',
                            type: 'bar',
                            stack: '总量',
                            itemStyle: {
                                normal: {
                                    color: '#91c7ae'
                                }
                            },
                            markLine: {
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: 'dashed', color: 'red'
                                        }
                                    }
                                },
                                label: {
                                    show: true,
                                    position: 'right',
                                    formatter: function() {
                                        return '限仓线';
                                    }
                                },
                                data: [
                                    [
                                        {
                                            yAxis: '700',
                                            symbol: 'none',
                                            x: '5%'
                                        },
                                        {
                                            yAxis: '700',
                                            symbol: 'none',
                                            x: '96%'
                                        }
                                    ]
                                ]
                            },
                            data: [620, 182, 191, 234, 190, 330, 110, 332, 401, 634, 620, 182, 191, 234, 190, 330, 110, 332, 401,]
                        },
                        {
                            name: '账户2',
                            type: 'bar',
                            stack: '总量',
                            itemStyle: {
                                normal: {
                                    color: '#d48265'
                                }
                            },
                            data: [250, 212, 201, 154, 210, 630, 110, 191, 234, 290, 250, 212, 201, 154, 210, 630, 110, 191, 234,]
                        },
                        {
                            name: '账户3',
                            type: 'bar',
                            stack: '总量',
                            itemStyle: {
                                normal: {
                                    color: '#61a0a8'
                                }
                            },
                            data: [520, 132, 401, 634, 190, 230, 120, 490, 630, 410, 520, 132, 401, 634, 190, 230, 120, 490, 630,]
                        }
                    ]
                }, false);
            },
            showDetail(){
                this.isShowDetail = !this.isShowDetail
                if(this.isShowDetail ){
                    this.detailCon = '显示柱状图'
                }else{
                    this.detailCon = '明细'
                }
            }
        },
        beforeDestory() {
        }
    };
</script>

<style lang='less' scoped>
    .bar {

    }
</style>
