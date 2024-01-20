
$(function () {
    echarts_1();
    echarts_2();
	echarts_3();
	echarts_4();
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        Chart1 = echarts.init(document.getElementById('echart1'));
        // 指定图表的配置项和数据
        ec_1_option = {
            tooltip: {},
            grid: {
                x: 100,
                y2: 180,
            },
            legend: {
                orient: 'horizontal',
                x:'center',
                y:'bottom',
                textStyle: {
                    color: 'white'
                },
                data:['平均评分']
            },
            xAxis: {
                type: 'category',
                 axisLabel: {
                    interval: 0,    //强制文字产生间隔
                    rotate: 45,     //文字逆时针旋转45°
                    textStyle: {    //文字样式
                        color: "white",
                        fontSize: 16
                    },
                    color: "white"
                },
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "white"
                    }
                },
                data: g1
            },
            yAxis: {
                textStyle: {
                    color: 'white'
                },
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "white"
                    }
                },
                min: 9.0,
                max: 10.0,
                interval: 0.1
            },
            series: {
                name: '平均评分',
                type: 'line',
                data: g2
            },
            color: ['rgb(255, 99, 132)']
        };
        // 使用刚指定的配置项和数据显示图表。
        Chart1.setOption(ec_1_option);
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        Chart2 = echarts.init(document.getElementById('echart2'));
        // 指定图表的配置项和数据
        ec_2_option = {
            tooltip: {},
            grid: {
                x: 120,
                y2: 180,
            },
            legend: {
                orient: 'horizontal',
                x:'center',
                y:'bottom',
                textStyle: {
                    color: 'white'
                },
                data:['评分']
            },
            xAxis: {
                type: 'category',
                 axisLabel: {
                    interval: 0,    //强制文字产生间隔
                    rotate: 45,     //文字逆时针旋转45°
                    textStyle: {    //文字样式
                        color: "white",
                        fontSize: 16
                    },
                    color: "white"
                },
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "white"
                    }
                },
                data: f1
            },
            yAxis: {
                textStyle: {
                    color: 'white'
                },
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "white"
                    }
                },
                min: 9.0,
                max: 10.0,
                interval: 0.1
            },
            series: {
                name: '评分',
                type: 'line',
                data: f2
            },
            color: ['rgb(255, 205, 86)']
        };
        // 使用刚指定的配置项和数据显示图表。
        Chart2.setOption(ec_2_option);
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        Chart3 = echarts.init(document.getElementById('echart3'));
        // 指定图表的配置项和数据
        ec_3_option = {
            tooltip: {},
            grid: {
                x: 100,
                y2: 180,
            },
            legend: {
                orient: 'horizontal',
                x:'center',
                y:'bottom',
                textStyle: {
                    color: 'white'
                },
                data:['数量']
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    interval: 0,    //强制文字产生间隔
                    rotate: 45,     //文字逆时针旋转45°
                    textStyle: {    //文字样式
                        color: "white",
                        fontSize: 16
                    },
                    color: "white"
                },
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "white"
                    }
                },
                data: d1
            },
            yAxis: {
                textStyle: {
                    color: 'white'
                },
                axisLine: {
                    lineStyle: {
                        color: "white"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "white"
                    }
                }
            },
            series: {
                name: '数量',
                type: 'bar',
                data: d2
            },
            color: ['rgb(54, 162, 235)']
        };
        // 使用刚指定的配置项和数据显示图表。
        Chart3.setOption(ec_3_option);
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        Chart4 = echarts.init(document.getElementById('echart4'));
        // 饼图配置文件
        ec_4_option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                x:'center',
                y:'bottom',
                textStyle: {
                    color: 'white'
                },
                data: ['1950-2000','2001-2010','2011-2020']
            },
            series: [
                {
                    name: '年份',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        {value: v1, name: '1950-2000'},
                        {value: v2, name: '2001-2010'},
                        {value: v3, name: '2011-2020'}],
                    itemStyle: {
                        normal: {
                            borderWidth: 4,
                            borderColor: '#ffffff',
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ],
            color: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
        };
        function makePie() {
            Chart4.clear();
            Chart4.setOption(ec_4_option);//setOption方法生成一个简单的饼状图
        }
        // 初始化选择画饼图
        makePie()
    }
})