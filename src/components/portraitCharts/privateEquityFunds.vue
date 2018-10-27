<template>
  <div class='privateEquityFunds'>
      <div class="title border">私募基金实控识别</div>
      <div id="privateEquityFundsCharts" class="border" style="width:100%;height: 400px;"></div>
  </div>
</template>

<script>
    export default {
        name: 'privateEquityFunds',
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
            draw(){
                let privateEquityFundsCharts = this.$echarts.init(document.getElementById('privateEquityFundsCharts'));
                privateEquityFundsCharts.setOption({
                    title: {
                        text: ''
                    },
                    tooltip: {},
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 12
                            },
                        }
                    },
                    legend: {
                        x: "center",
                        show: false,
                        data: ["同一投资经理", "同一权益持有人", '同一投资顾问']
                    },
                    series: [

                        {
                            type: 'graph',
                            layout: 'force',
                            symbolSize: 40,
                            focusNodeAdjacency: true,
                            roam: true,
                            categories: [{
                                name: '同一投资经理',
                                itemStyle: {
                                    normal: {
                                        color: "#009800",
                                    }
                                }
                            }, {
                                name: '同一权益持有人',
                                itemStyle: {
                                    normal: {
                                        color: "#4592FF",
                                    }
                                }
                            }, {
                                name: '同一投资顾问',
                                itemStyle: {
                                    normal: {
                                        color: "#3592F",
                                    }
                                }
                            }],
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        fontSize: 12
                                    },
                                }
                            },
                            force: {
                                repulsion: 600
                            },
                            edgeSymbolSize: [4, 50],
                            edgeLabel: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        fontSize: 10
                                    },
                                    formatter: "{c}"
                                }
                            },
                            data: [{
                                name: '账户1',
                                draggable: true,
                            }, {
                                name: '账户2',
                                category: 1,
                                draggable: true,
                            }, {
                                name: '账户3',
                                category: 1,
                                draggable: true,
                            }, {
                                name: '账户4',
                                category: 1,
                                draggable: true,
                            }, {
                                name: '账户5',
                                category: 1,
                                draggable: true,
                            }, {
                                name: '账户6',
                                category: 1,
                                draggable: true,
                            }, {
                                name: '账户7',
                                category: 1,
                                draggable: true,
                            }, {
                                name: '账户8',
                                category: 1,
                                draggable: true,
                            }, {
                                name: '账户9',
                                category: 1,
                                draggable: true,
                            }],
                            links: [{
                                source: 0,
                                target: 1,
                                category: 0,
                                value: '同一投资经理'
                            }, {
                                source: 0,
                                target: 2,
                                value: '同一权益持有人'
                            }, {
                                source: 0,
                                target: 3,
                                value: '同一投资经理'
                            }, {
                                source: 0,
                                target: 4,
                                value: '同一投资经理'
                            }, {
                                source: 1,
                                target: 2,
                                value: '同一权益持有人'
                            }, {
                                source: 0,
                                target: 5,
                                value: '同一投资经理'
                            }, {
                                source: 4,
                                target: 5,
                                value: '同一权益持有人'
                            }, {
                                source: 2,
                                target: 8,
                                value: '同一权益持有人'
                            }, {
                                source: 0,
                                target: 12,
                                value: '同一投资经理'
                            }, {
                                source: 6,
                                target: 11,
                                value: '爱同一投资顾问人'
                            }, {
                                source: 6,
                                target: 3,
                                value: '同一投资经理'
                            }, {
                                source: 7,
                                target: 5,
                                value: '同一投资经理'
                            }, {
                                source: 9,
                                target: 10,
                                value: '同一投资顾问'
                            }, {
                                source: 3,
                                target: 10,
                                value: '同一投资顾问'
                            }, {
                                source: 2,
                                target: 11,
                                value: '同一投资顾问'
                            }],
                            lineStyle: {
                                normal: {
                                    opacity: 0.9,
                                    width: 1,
                                    curveness: 0
                                }
                            }
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
  .privateEquityFunds {

  }
</style>
