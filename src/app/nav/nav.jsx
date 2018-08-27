import React, { Component } from "react";
import _ from "lodash";
export class Navbar extends Component {
  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
    this.state = {
      navs: [
        {
          path: "clock",
          label: "Clock",
          active: false,
          onActive: () => this.navigate("clock")
        },
        {
          path: "timer",
          label: "Timer",
          active: true,
          onActive: () => this.navigate("timer")
        },
        {
          path: "stopwatch",
          label: "Stop Watch",
          active: false,
          onActive: () => this.navigate("stopwatch")
        }
      ]
    };
  }

  navigate = path => {
    this.state.navs.map(nav => (nav.active = false));
    let selectedPath = _.find(this.state.navs, { path: path });
    selectedPath.active = true;
    this.setState({
      navs: this.state.navs
    });
  };

  render() {
    return (
      <nav className="navbar nav-pills">
        <ul className="nav">
          {this.state.navs.map(nav => {
            return (
              <li className="nav-item" key={nav.path}>
                <a
                  className={nav.active ? "nav-link active" : "nav-link"}
                  href="javascript:void(0)"
                  onClick={nav.onActive}
                >
                  {nav.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
