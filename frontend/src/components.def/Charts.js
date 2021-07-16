import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
// import Page from './Page';
// import Filter from "./Filter";
// import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";

export default function Charts() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [appState, setAppState] = useState();

    return (
        <div>Укажите период: <DatePicker
            dateFormat="dd.MM.yyyy"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            // onSelect = {
            //     console.log("DATERANGE", dateRange),
            //     console.log("TEST", startDate, " - ", endDate)
            // }
            onChange={(update) => {
                // console.log(startDate)
                // console.log(endDate)
                // setDateRange(update);
                // if (update[0] && update[1]) {
                //     console.log("dataRange:",update);
                // }
            }}
            isClearable={true}
        />
        <div><Filter /></div>
        <div><Page /></div>
        </div>
    );
}