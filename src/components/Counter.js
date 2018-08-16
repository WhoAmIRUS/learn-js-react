import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../AC';

class Counter extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  render() {
    const { count } = this.props;
    console.log('update counter');
    return (
      <div>
        {count}
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default connect(state => ({
  count: state.counter,
}), { increment })(Counter);
