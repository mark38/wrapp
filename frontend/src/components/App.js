import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Service from './Service';
import PersonList from './PersonList';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Service />
                {/* <PersonList /> */}
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))