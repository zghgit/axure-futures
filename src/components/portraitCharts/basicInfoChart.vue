<template>
    <div class="basicInfoChartWarp">
        <div class="title border">客户基本信息识别</div>
        <div id='basicInfoChart' class="border" style="width: 100%;height: 400px"></div>
    </div>
</template>

<script>
    export default {
        name: 'basicInfoChart',
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
                let basicInfoChart = this.$echarts.init(document.getElementById('basicInfoChart'));
                basicInfoChart.setOption({
                    backgroundColor: '#fff',
                    // title: {
                    //     text: '客户基本信息识别',
                    //     left:'center'
                    // },
                    tooltip: {},
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    color:['#83e0ff','#45f5ce','#b158ff'],
                    // legend: {
                    //     show: true,
                    //     data: [
                    //         {name: '人',textStyle:{color:'#000'} },
                    //         {name: '物证',textStyle:{color:'#000'}},
                    //         {name: '不明物体',textStyle:{color:'#000'}},
                    //     ],
                    //     bottom:'3%'
                    // },
                    series: [
                        {
                            type: 'graph',
                            layout: 'force',
                            force:{
                                repulsion:450,
                                edgeLength:50
                            },
                            symbolSize: 35,
                            roam: true,
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            edgeSymbolSize: [4, 20],
                            edgeLabel: {
                                normal: {
                                    show:true,
                                    textStyle: {
                                        fontSize: 10
                                    },
                                    formatter: "{c}"
                                }
                            },

                            data: [
                                {
                                    name: '账户1',
                                    symbolSize: 20,
                                    draggable: true,
                                    category: 1,
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#04f2a7',
                                            borderWidth: 6,
                                            shadowBlur: 20,
                                            shadowColor: '#04f2a7',
                                            color: '#001c43',
                                        }
                                    }
                                },
                                {
                                    name: '账户2',
                                    symbolSize: 20,
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#04f2a7',
                                            borderWidth: 4,
                                            shadowBlur: 10,
                                            shadowColor: '#04f2a7',
                                            color: '#001c43',
                                        }
                                    },
                                    category: 1,

                                },
                                {
                                    name: '账户3',
                                    symbolSize: 20,
                                    category: 1,
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#04f2a7',
                                            borderWidth: 4,
                                            shadowBlur: 10,
                                            shadowColor: '#04f2a7',
                                            color: '#001c43',
                                        }
                                    },

                                },
                                {
                                    name: '账户4',
                                    symbolSize: 20,
                                    category: 0,
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#82dffe',
                                            borderWidth: 4,
                                            shadowBlur: 10,
                                            shadowColor: '#04f2a7',
                                            color: '#001c43',
                                        }
                                    },

                                },
                                {
                                    name: '账户5',
                                    symbolSize: 20,
                                    category: 0,
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#82dffe',
                                            borderWidth: 4,
                                            shadowBlur: 10,
                                            shadowColor: '#04f2a7',
                                            color: '#001c43',
                                        }
                                    },

                                },
                                {
                                    name: '账户6',
                                    category: 0,
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#82dffe',
                                            borderWidth: 4,
                                            shadowBlur: 10,
                                            shadowColor: '#04f2a7',
                                            color: '#001c43',
                                        }
                                    },

                                },
                                {
                                    name: '账户7',
                                    category: 2,
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#b457ff',
                                            borderWidth: 4,
                                            shadowBlur: 10,
                                            shadowColor: '#b457ff',
                                            color: '#001c43'
                                        }
                                    },

                                },
                                {
                                    name: '账户8',
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#82dffe',
                                            borderWidth: 4,
                                            shadowBlur: 10,
                                            shadowColor: '#04f2a7',
                                            color: '#001c43'

                                        }
                                    },
                                    category: 0,

                                },
                                {
                                    name: '账户9',
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#82dffe',
                                            borderWidth: 4,
                                            shadowBlur: 10,
                                            shadowColor: '#04f2a7',
                                            color: '#001c43'
                                        }
                                    },
                                    category: 0,

                                },
                                {
                                    name: '账户10',
                                    category: 0,
                                    itemStyle: {
                                        normal: {
                                            borderColor: '#82dffe',
                                            borderWidth: 4,
                                            shadowBlur: 10,
                                            shadowColor: '#04f2a7',
                                            color: '#001c43'
                                        }
                                    },

                                }],
                            links: [
                                {
                                    source: '账户1',
                                    target: '账户2',
                                    value: '地址相同',
                                    lineStyle: {
                                        normal: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: '#e0f55a' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#639564' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            }
                                        }
                                    }

                                },
                                {
                                    source: '账户1',
                                    target: '账户3',
                                    value: '电话相同',
                                    lineStyle: {
                                        normal: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: '#eda553' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#7c785b' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            }
                                        }
                                    },
                                },
                                {
                                    source: '账户1',
                                    target: '账户4',
                                    value: '电话相同',
                                    lineStyle: {
                                        normal: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: '#eda553' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#7c785b' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            }
                                        }
                                    },
                                },
                                {
                                    source: '账户1',
                                    target: '账户5',
                                    value: '地址相同',
                                    lineStyle: {
                                        normal: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: '#e0f55a' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#639564' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            }
                                        }
                                    }
                                },
                                {
                                    source: '账户1',
                                    target: '账户4'
                                },
                                {
                                    source: '账户2',
                                    target: '账户6',
                                    value: '地址相同',
                                    lineStyle: {
                                        normal: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: '#e0f55a' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#639564' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            }
                                        }
                                    }
                                },
                                {
                                    source: '账户2',
                                    target: '账户7', value: '地址相同',
                                    lineStyle: {
                                        normal: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: '#e0f55a' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#639564' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            }
                                        }
                                    }

                                },
                                {
                                    source: '账户5',
                                    target: '账户8',
                                    value: '地址相同',
                                    lineStyle: {
                                        normal: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: '#e0f55a' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#639564' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            }
                                        }
                                    }
                                },
                                {
                                    source: '账户5',
                                    target: '账户9',
                                    value: '身份证相同',
                                    lineStyle: {
                                        normal: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: '#df6f30' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#915034' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            }
                                        }
                                    },
                                },
                                {
                                    source: '账户9',
                                    target: '账户10',
                                    value: '电话相同',
                                    lineStyle: {
                                        normal: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: '#eda553' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#7c785b' // 100% 处的颜色
                                                }],
                                                globalCoord: false // 缺省为 false
                                            }
                                        }
                                    },
                                }
                            ],
                            lineStyle: {
                                normal: {
                                    opacity: 0.9,
                                    width: 4,
                                    curveness: 0
                                }
                            },
                            categories:[
                                {name: '人'},
                                {name: '物证'},
                                {name: '不明物体'}
                            ]
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
    .basicInfoChartWarp{
        #basicInfoChart {

        }
    }
</style>
