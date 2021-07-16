import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
 
import "react-datepicker/dist/react-datepicker.css";

class FilterD extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.setDateRange = this.setDateRange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  setDateRange(date) {
    this.setState({
      startDate: date
    })
    console.log(this.state.startDate)
    return false
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }
 
  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <div className="form-group">
          <DatePicker
              // selected={ this.state.startDate }
              // onChange={ this.handleChange }
              // onChange={ (update) => {
              //   this.setDateRange;
              // } }

              onChange={(update) => {
                // console.log(startDate)
                // console.log(endDate)
                // setDateRange(update);
                // if (update[0] && update[1]) {
                //     console.log("dataRange:",update);
                // }
            }}

              dateFormat="dd.MM.yyyy"
              selectsRange={true}
              startDate={this.startDate}
              // endDate={endDate}
              
              minDate={new Date()}
              maxDate={addDays(new Date(), 7)}
              withPortal
              isClearable={true}
          />
          <button className="btn btn-primary">Show Date</button>
        </div>
      </form>
    );
  }
    
}
  
  export default FilterD;