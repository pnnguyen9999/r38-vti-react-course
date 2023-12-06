import React, { Component } from "react";

export default class CardClassComponent extends Component {
  giaTri1 = 10;

  render() {
    return (
      <div>
        {this.giaTri1}
        <h1>Card name 2: {this.props.name}</h1>
        <h5>Card {this.props.description}</h5>
      </div>
    );
  }
}
