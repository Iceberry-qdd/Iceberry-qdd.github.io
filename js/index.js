let myChart;

window.onload = function () {
    myChart = echarts.init(document.getElementById('skill-radar-chart'));
    myChart.setOption(option);
}

const option = {
    color:['#88d2a2'],
    tooltip:{
        show:true,
        trigger:'axis'
    },
    radar: {
        axisName:{
            color: '#333'
        },
        axisLine:{
            lineStyle:{
                color:'#88d2a2'
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#e0f4e7'
            }
        },
        splitArea:{
            areaStyle:{
                color:['#e0f4e7']
            }
        },
        shape: 'circle',
        silent: false,
        indicator: [
            { name: 'Java', max: 100 },
            { name: '数据结构', max: 100 },
            { name: '算法', max: 100 },
            { name: '计算机基础', max: 100 },
            { name: 'Javascript', max: 100 },
            { name: '数据库', max: 100 }
        ]
    },
    series: [
        {
            name: 'Iceberry\'s skill tree',
            type: 'radar',
            tooltip: {
                trigger: 'axis'
              },
            data: [
                {
                    value: [65, 70, 56, 49, 31, 20],
                    name: 'Iceberry',
                    areaStyle:{
                        color:'#c6ebd3'
                    }
                }
            ]
        }
    ]
};

