import React, { Component } from "react";
export class Clock extends Component {
  on = true;
  constructor() {
    super();
    this.state = { date: new Date(), buttonText: "Pause" };
    this.pauseClock = this.pauseClock.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  pauseClock(e) {
    this.on = !this.on;
    if (!this.on) {
      clearInterval(this.timerID);
      this.setState({
        buttonText: "Start"
      });
    } else {
      this.timerID = setInterval(() => this.tick(), 1000);
      this.setState({
        buttonText: "Pause"
      });
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">{this.state.date.toLocaleString()}</h1>
        <hr className="my-4" />
        <p className="lead">World Clock</p>
        <ChildClock date={this.state.date.toLocaleString()} />
        <p className="lead">
          <button className="btn btn-primary btn-lg" onClick={this.pauseClock}>
            {this.state.buttonText}
          </button>
        </p>
      </div>
    );
  }
}

export class ChildClock extends Component {
  render() {
    return <h3>{this.props.date}</h3>;
  }
}
