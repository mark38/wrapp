import React, { Component } from 'react';
import ReactECharts from 'echarts-for-react';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: {
                title: {
                    text: props.chartName
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        magicType: {show: true, type: ['stack', 'tiled']},
                        saveAsImage: {show: true}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: props.dataX
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    name: props.chartName,
                    type: 'line',
                    smooth: true,
                    data: props.dataY
                }]
            }
        }
    }

    render() {
        return (
            <div>
                <ReactECharts
                    option={this.state.option}
                    style={{ height: 400 }}
                />
            </div>
        );
    }
}