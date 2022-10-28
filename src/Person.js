import React, { Component } from "react";

export default class Person extends Component {
  state = {
    name: "",
    age: "",
    profession: "",
  };

  handleChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });
  render() {
    return (
      <div>
        <label for="name">Name:</label>{" "}
        <input
          id="name"
          name="name"
          type="text"
          onChange={this.handleChange}
        ></input>
        <label for="age">Age:</label>{" "}
        <input
          id="age"
          name="age"
          type="text"
          onChange={this.handleChange}
        ></input>
        <label for="profession">Profession:</label>{" "}
        <input
          id="profession"
          name="profession"
          type="text"
          onChange={this.handleChange}
        ></input>
        <button
          onClick={() =>
            this.props.handlePersonAdd({
              name: this.state.name,
              age: this.state.age,
              profession: this.state.profession,
            })
          }
        >
          Add
        </button>
        <div>
          <p>{this.state.name}</p>
          <p>{this.state.age}</p>
          <p>{this.state.profession}</p>
        </div>
      </div>
    );
  }
}
