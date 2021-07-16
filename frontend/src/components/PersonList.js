import React from 'react';
import axios from 'axios';
import ChildComponent from './ChildComponent';
import Child from './Child';

export default class PersonList extends React.Component {
  state = {
    persons: [],
    name: 'Yulia'
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      }).catch(() => {
          console.error('Error respons')
      });
  }

  render() {
    return (
        <div>
            <ul>
                { this.state.persons.map(person => <li>{person.name}</li>) }
            </ul>
            <ul>
                { this.state.persons.map(person => <Child name={person.name} />) }
            </ul>
            <div><ChildComponent name={this.state.name} persons={this.state.persons} /></div>
        </div>
    )
  }
}