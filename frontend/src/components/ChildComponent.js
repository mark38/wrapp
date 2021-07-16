import React from 'react';

export default class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        
        console.log("OK");
    }

    render() {
      return (
        <div>
            <p>Props: {this.props.name}</p>
            <ul>
                {
                    this.props.persons.map(person => <li>{person.name}</li>)
                }
            </ul>
        </div>
      )
    }
}