import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import RenderCharts from './RenderCharts';
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";

export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            setDateRange: false
        };
    }

    setDateRange(data) {
        this.setState({
            startDate: data[0]
        });
        if (data[1]) {
            this.setState({
                endDate: data[1],
                setDateRange: true
            });
        } else {
            this.setState({
                endDate: null,
                setDateRange: false
            });
        }

        return true;
    }

    renderCharts = () => {
        if (this.state.setDateRange) {
            return <RenderCharts startDate={this.state.startDate} endDate={this.state.endDate} />;
        }
    }

    render() {
        return (
            <div>
                <div>
                    <strong>Укажите период: </strong>
                    <DatePicker
                        onChange={(update) => {
                            this.setDateRange(update)
                        }}
                        dateFormat="dd.MM.yyyy"
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        selectsRange={true}
                        minDate={new Date('2021-07-01')}
                        maxDate={new Date()}
                    />
                </div>
                {this.renderCharts()}
            </div>
        );
    }
}