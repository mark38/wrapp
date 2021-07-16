import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        startDate: null,
        endDate: null
    };
    this.setDateRange = this.setDateRange.bind(this);
  }

  setDateRange(date) {
    console.log(date)
    // this.setState({
    //     dateRange: date
    // })
    // console.log(this.state.dateRange)
    // return true
  }
  
  render() {
    return (
        <div>
            Укажите период:
            <DatePicker
                dateFormat="dd.MM.yyyy"
                maxDate={new Date()}
                startDate={this.startDate}
                endDate={this.endDate}
                onChange={(update) => {
                    this.setDateRange(update);
                }}
                selectsRange
                inline
            />
        </div>
    );
  }

}

export default Filter;