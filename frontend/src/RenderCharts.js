import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Chart from './Chart';
import { array } from 'prop-types';

export default class RenderCharts extends Component {
    apiUrl = 'http://192.168.18.9:8000/api/statistics/';

    constructor(props) {
        super(props);
        this.state = {
            startDate: props.startDate,
            endDate: this.props.endDate,
            weatherReport: new Object()
        };
    }

    componentDidMount() {
        let config = {
            params: {
                start_date: moment(this.state.startDate).format('YYYY-MM-DD'),
                end_date: moment(this.state.endDate).format('YYYY-MM-DD')
            },
        };

        axios.get(this.apiUrl, config)
            .then(respons => {
                var data = respons.data;
                if (data.length) {
                    var weather = new Object();
                    data.forEach(function(item, i, data) {
                        if (!weather[item.indicator]) {
                            let indicator = null;
                            switch(item.indicator) {
                                case 1: indicator = 'Температура'; break;
                                case 3: indicator = 'Давление'; break;
                            }
                            weather[item.indicator] = {
                                indicator: indicator,
                                dataX: new Array(),
                                dataY: new Array()
                            };
                        }
                        weather[item.indicator].dataX.push(item.date);
                        weather[item.indicator].dataY.push(item.value);
                    });

                    this.setState({
                        weatherReport: weather
                    });
                }
                
            }).catch(() => {
                console.error('Error respons')
            });
    }

    renderChart = (data) => {
        if (data) {
            return <Chart chartName={data.indicator} dataX={data.dataX} dataY={data.dataY} />;
        }
    }

    render() {
        // weather = this.state.weatherReport;
        return (
            <div>
                {this.renderChart(this.state.weatherReport[1])}
                {this.renderChart(this.state.weatherReport[2])}
                {this.renderChart(this.state.weatherReport[3])}
            </div>
        )
    };
}