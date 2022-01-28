import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePerson extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  onChangeFirstname(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  onChangeLastname(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  onSubmit(e) {
    // e.preventDefault();
    const person = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }

    console.log(person);

    axios.post('http://localhost:5000/people/add', person)
      .then(res => console.log(res.data));

    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.firstName}
                onChange={this.onChangeFirstname}
                />
            <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.lastName}
                onChange={this.onChangeLastname}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Person" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}