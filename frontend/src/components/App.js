import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Service from './Service';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Service />
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))