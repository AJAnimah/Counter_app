import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  reset = () => {
    this.setState({ count: 0 });
  };
  increment = () => {
    this.setState({ count: this.state.count + 5 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 5 });
  };

  render() {
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="card-body">
            <h2 className="count-heading">Simple Counter App</h2>

            <p className="count-display">Counter - {this.state.count}</p>

            <button className="reset-button" onClick={this.reset}>
              Reset
            </button>
            <button className="inc-button" onClick={this.increment}>
              Increment
            </button>
            <button className="dec-button" onClick={this.decrement}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
