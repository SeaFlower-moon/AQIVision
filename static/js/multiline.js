
var multilinechartDom = document.getElementById('pm25');
var multilineChart = echarts.init(multilinechartDom);
var multilineoption;

multilineoption = {
    title: {
        text: '今日污染物含量'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['aqi', 'pm2.5', 'pm10', 'no2', 'so2','o3','co']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'aqi',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'pm2.5',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'pm10',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'no2',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'so2',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: 'o3',
            type: 'line',
            stack: 'Total',
            data: [45, 232, 42, 54, 23, 43, 54]
        },
        {
            name: 'co',
            type: 'line',
            stack: 'Total',
            data: [23, 43, 54, 65, 76, 87, 978]
        }
    ]
};

multilineoption && multilineChart.setOption(multilineoption);
