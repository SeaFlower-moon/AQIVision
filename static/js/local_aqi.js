// import { Gauge } from '@antv/g2plot';

// const ticks = [0, 1 / 3, 2 / 3, 1];
// const color = ['#F4664A', '#FAAD14', '#30BF78'];
const ticks = [0, 1 / 6, 1 / 3, 1 / 2,2 / 3,5 / 6,1];
const color = ['#30BF78', '#8CCE85', '#A9C9D0','#F1DCD1', '#F4664A', '#4D3748','#363533'];

const gauge = new Gauge('aqi', {
    percent: 0,
    range: {
        ticks: [0, 1],
        // color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
        color: ['l(0) 0:#30BF78 0.5:#FAAD14 1:#F4664A'],
        // ticks:  [0, 1 / 6, 1 / 3, 1 / 2,2 / 3,5 / 6,1],
        // color: ['l(0) 0:#30BF78 0.16:#8CCE85 0.32:#A9C9D0 0.48:#F1DCD1 0.54:#F4664A 0.7:#4D3748 1:#363533'],
    },
    indicator: {
        pointer: {
            style: {
                stroke: '#D0D0D0',
            },
        },
        pin: {
            style: {
                stroke: '#D0D0D0',
            },
        },
    },
    statistic: {
        title: {
            formatter: ({ percent }) => {
                if (percent < ticks[1]) {
                    return '优';
                }
                if (percent < ticks[2]) {
                    return '良';
                }if (percent < ticks[3]) {
                    return '轻度污染';
                }if (percent < ticks[4]) {
                    return '中度污染';
                }if (percent < ticks[5]) {
                    return '重度污染';
                }
                return '严重污染';
            },
            style: ({ percent }) => {
                let temp;
                if (percent < ticks[1]) {
                    temp=color[0];
                }else if(percent < ticks[2]) {
                    temp=color[1];
                }else if(percent < ticks[3]) {
                    temp=color[2];
                }else if(percent < ticks[4]) {
                    temp=color[3];
                }else if(percent < ticks[5]) {
                    temp=color[4];
                }else if(percent < ticks[6]) {
                    temp=color[5];
                }else {
                    temp=color[6];
                }
                return {
                    fontSize: '36px',
                    lineHeight: 1,
                    color:temp,
                    // color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2]
                };
            },
        },
        content: {
            offsetY: 36,
            style: {
                fontSize: '24px',
                color: '#4B535E',
            },
            formatter: () => 'aqi质量',
        },
    },
});

gauge.render();
// let data = 0.7;
// const interval = setInterval(() => {
//     if (data >= 1.5) {
//         clearInterval(interval);
//     }
//     data += 0.005;
//     gauge.changeData(data > 1 ? data - 1 : data);
// }, 100);
