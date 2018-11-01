export default {
    methods: {
        // 散点图
        splashesDete() {
            let splashesId = this.$echarts.init(document.getElementById('splashes'));
            var data = [
                [
                    [28604, 69, 717096869, '167', 1990],
                    [31163, 77.4, 237662440, '123', 1990],
                    [1516, 70, 654605773, '115', 1990],
                    [13670, 74.7, 210582082, '310', 1990],
                    [28599, 73, 1569826705, '154', 1990]

                ],
                [
                    [44056, 81.8, 23968973, '23', 2015],
                    [43294, 81.7, 359399272, '3592', 2015],
                    [13334, 76.9, 337604894, '131', 2015],
                    [21291, 78.5, 913895621, '411', 2015],
                    [38923, 80.8, 150345734, '235', 2015]
                ]
            ];
            let option = {
                backgroundColor: new this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                    offset: 0,
                    color: '#f7f8fa'
                }, {
                    offset: 1,
                    color: '#cdd0d5'
                }]),
                title: {
                    text: ''
                },
                legend: {
                    right: 10,
                    data: ['相关程度', '账户组浏览及合并']
                },
                xAxis: {
                    name: '持仓量',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    name: '相关程度',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    scale: true
                },
                series: [{
                    name: '',
                    data: data[0],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(120, 36, 50, 0.5)',
                            shadowOffsetY: 5,
                            color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(251, 118, 123)'
                            }, {
                                offset: 1,
                                color: 'rgb(204, 46, 72)'
                            }])
                        }
                    },
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
                        data: [{
                            name: '限仓线',
                            xAxis: 30000
                        }, ]
                    }
                }, {
                    name: '',
                    data: data[1],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(25, 100, 150, 0.5)',
                            shadowOffsetY: 5,
                            color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(129, 227, 238)'
                            }, {
                                offset: 1,
                                color: 'rgb(25, 183, 207)'
                            }])
                        }
                    }
                }]
            };

            splashesId.setOption(option);

            splashesId.on('click', (params) => {
                // console.log(params);
                // this.barChartData();
                let option1 = window.barChartId.getOption();
                window.barChartId.clear();
                window.barChartId.setOption(option1);
                // this.candlestickData();
            });
        },
    }
}
