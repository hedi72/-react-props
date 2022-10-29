import React, { Component } from "react";
import "./App.css";
import Person from "./Person";

export default class AppF extends Component {
  constructor(props) {
    console.log("i m constructeur");
    super(props);
    this.state = {
      persons: [],
      count: 0,
      show: true,
    };
    this.conteur = 0;
  }
  //   incrementCount = () => {
  //     this.conteur++;
  //     console.log(this.conteur);
  //   };
  incrementCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log(this.state.count)
    );
  };
  handlePersonAdd = (newPerson) =>
    this.setState({
      // persons:this.persons.push(newPerson)
      // spereder operation
      persons: [...this.state.persons, newPerson],
    });
  decrementCount = () => {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => console.log(this.state.count)
    );
  };
  resetCount = () => {
    this.setState(
      {
        count: 0,
      },
      () => console.log(this.state.count)
    );
  };

  componentDidMount = () => {
    console.log("App will Mount");
  };
  componentDidUpdate = () => {
    console.log("did update");
  };
  render() {
    return (
      <div className="App">
        {console.log("i am render methods")}
        {/* if else */}
        <h4>{this.state.count}</h4>
        <button onClick={this.decrementCount}>-</button>
        <button onClick={this.resetCount}>reset</button>
        <button onClick={this.incrementCount}>+</button>
        <button
          onClick={() =>
            this.setState({
              show: !this.state.show,
            })
          }
        >
          Toggle
        </button>
        <hr />
        {this.state.show && <Person handlePersonAdd={this.handlePersonAdd} />}
        <hr />

        {this.state.persons.map((person) => (
          <div>{person.nom}</div>
        ))}
      </div>
    );
  }
}

// export default AppF
