import React, { Component } from 'react';
import axios from 'axios';

const Person = props => (
    <div>
    <h3>{props.person.firstName} {props.person.lastName}</h3>
    </div>
)

export default class ShowPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {people: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/')
      .then(response => {
        this.setState({ people: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  personList() {
    return this.state.people.map(currentperson => {
      return <Person person={currentperson}/>;
    })
  }

  render() {
    return (
      <div>
        {this.personList()}
      </div>
    )
  }
}