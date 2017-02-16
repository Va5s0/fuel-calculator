import React, { Component } from 'react';

class Output extends Component {

  render() {
    let total_price = this.props.data.total_price;
    return (
      <div className="output">
        <h3>{total_price}</h3>
      </div>
    );
  }
}

export default Output;
