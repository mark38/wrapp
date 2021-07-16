import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Main() {
    const [appState, setAppState] = useState();

    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/statistics/';
        axios.get(apiUrl).then((resp) => {
          const allPersons = resp.data;
          setAppState(allPersons);
        });
    }, [setAppState]);

    return (
        <div className="app">
        
        </div>
      );
}

export default Main;