import React, { Component } from "react";
import { Navbar } from "./nav/nav.jsx";
import { Clock } from "./clock/clock.jsx";
import { Timer } from "./timer/timer.jsx";
import { StopWatch } from "./stopwatch/stopwatch";

class App extends Component {
  constructor() {
    super();
    this.state = { activeView: undefined };
  }

  onNavigation(path) {
    this.setState({
      activeView: this.resolveView(path)
    });
    console.log("Changed: ");
  }

  resolveView(path) {
    switch (path) {
      case "timer":
        return <Timer />;
        break;
      case "stopwatch":
        return <StopWatch />;
        break;
      case "clock":
        return <Clock />;
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="container">
        <section>
          <Navbar onChange={path => this.onNavigation(path)} />
        </section>
        <section>{this.state.activeView}</section>
      </div>
    );
  }
}

export default App;
