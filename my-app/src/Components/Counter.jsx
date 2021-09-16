import React from "react";

class Counter extends React.PureComponent {
  constructor() {
    super();
    this.increase = this.increase.bind(this);
  }

  state = {
    counter: 0,
  };

  increase() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default Counter;