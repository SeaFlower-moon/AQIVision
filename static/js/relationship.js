var ROOT_PATH =
    'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

var chartDom = document.getElementById('pm10');
var relationshipChart = echarts.init(chartDom);
var  relationshipoption;

relationshipChart.showLoading();
$.getJSON(ROOT_PATH + '/data/asset/data/les-miserables.json', function (graph) {
    relationshipChart.hideLoading();
    graph.nodes.forEach(function (node) {
        node.label = {
            show: node.symbolSize > 30
        };
    });
    relationshipoption = {
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [
            {
                // selectedMode: 'single',
                data: graph.categories.map(function (a) {
                    return a.name;
                })
            }
        ],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                },
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 10
                    }
                }
            }
        ]
    };
    relationshipChart.setOption(relationshipoption);
});

relationshipoption && relationshipChart.setOption(relationshipoption);
