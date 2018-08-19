import React, { Component } from "react";
import { Navbar } from "./nav/nav.jsx";
import { Clock } from "./clock/clock.jsx";
import { Timer } from "./timer/timer.jsx";

class App extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <Navbar />
        </section>
        <section>
          <Clock />
          <Timer />
        </section>
      </div>
    );
  }
}

export default App;
