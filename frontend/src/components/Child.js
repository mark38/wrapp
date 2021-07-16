import React, { Component } from 'react';

export default class Child extends React.Component {
    
    render() {
      return (
        <li>Name: {this.props.name}</li>
      )
    }
}