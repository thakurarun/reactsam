import React, { Component } from "react";

export class Timer extends Component {
  count = 0;
  render() {
    return <h2>Timer rendered here {this.count > 0 && <span>MER</span>}.</h2>;
  }
}
