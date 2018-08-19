import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar nav-pills">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="javascript:void(0)">
              CLOCK
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0)">
              Timer
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0)">
              Stop watch
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
