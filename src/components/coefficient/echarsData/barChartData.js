export default {
    methods: {
        // 柱状图
        barChartData() {
            window.barChartId = this.$echarts.init(
                document.getElementById("barChart")
            );

            let option = {

                // title: {
                //     text: "账户组浏览及合并"
                // },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ["账户1", "账户2", "账户3"],
                    textStyle: {
                        //图例文字的样式
                        fontSize: 12
                    }
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                yAxis: {
                    type: "value",
                    axisLine: {
                        lineStyle: {
                            color: '#162436'
                        }
                    },
                },
                xAxis: {

                    type: "category",
                    data: ["周一", "周二", "周三", "周四", "周五"]
                },
                series: [{
                        name: "账户1",
                        type: "bar",
                        stack: "总量",
                        barWidth: '40%',
                        itemStyle: {
                            normal: {
                                color: '#91c7ae'
                            }
                        },

                        data: [5320, 1302, 1101, 2334, 2190],
                        markLine: {
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed',
                                        color: 'red'
                                    }
                                }
                            },
                            label: {
                                formatter: '限仓线'
                            },
                            data: [
                                [{
                                        yAxis: '3000',
                                        symbol: 'none',
                                        x: '10%'
                                    },
                                    {
                                        yAxis: '3000',
                                        symbol: 'none',
                                        x: '93%'
                                    }
                                ]
                            ]
                        },
                    },
                    {
                        name: "账户2",
                        type: "bar",
                        stack: "总量",
                        itemStyle: {
                            normal: {
                                color: '#d48265'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: "insideRight"
                            }
                        },
                        data: [1120, 1232, 1301, 1344, 2950],
                        markLine: {
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed',
                                        color: 'red'
                                    }
                                }
                            },
                            label: {
                                formatter: '限仓线'
                            },
                            data: [
                                [{
                                        yAxis: '3000',
                                        symbol: 'none',
                                        x: '10%'
                                    },
                                    {
                                        yAxis: '3000',
                                        symbol: 'none',
                                        x: '93%'
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        name: "账户3",
                        type: "bar",
                        stack: "总量",
                        itemStyle: {
                            normal: {
                                color: '#61a0a8'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: "insideRight"
                            }
                        },
                        data: [3220, 4182, 1191, 2234, 1290],
                        markLine: {
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed',
                                        color: 'red'
                                    }
                                }
                            },
                            label: {
                                formatter: '限仓线'
                            },
                            data: [
                                [{
                                        yAxis: '3000',
                                        symbol: 'none',
                                        x: '10%'
                                    },
                                    {
                                        yAxis: '3000',
                                        symbol: 'none',
                                        x: '93%'
                                    }
                                ]
                            ]
                        }

                    }
                ]
            };
            barChartId.setOption(option);
        },
    }
}
