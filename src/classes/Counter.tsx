import React, { Component } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
}

export default Counter;
