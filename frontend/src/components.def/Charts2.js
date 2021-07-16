import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import Page from './Page';
import Filter from "./Filter";
import axios from 'axios';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import User from './User';

import "react-datepicker/dist/react-datepicker.css";

export default function Charts2() {
    const [startDate, setStartDate] = useState(new Date());
    const [appState, setAppState] = useState();
    const [endDate, setEndDate] = useState(null);

    const area = 'persons';
    const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    const { promiseInProgress } = usePromiseTracker({ area });
    const [ persons, setPersons ] = useState(null);
  
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        if (start && end) {
            console.log("start: ", start);
            console.log("end: ", end);

            trackPromise(axios.get(apiUrl), area).then(({ data }) => {
                setPersons(data);
            });
            
            // //const apiUrl = 'http://127.0.0.1:8000/api/statistics/';
            // const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
            // let config = {
            //     params: {
            //         start: start,
            //         end: end
            //     },
            // }
            // axios.get(apiUrl, config).then((resp) => {
            //     const allPersons = resp.data;
            //     setAppState(allPersons);
            // });
        }
    };

    return (
        <div className="app">
            <div><DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            /></div>
        </div>
  );
}