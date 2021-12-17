import React, { Component } from "react";

import "./App.css";
import { Router } from "./route/Router";

const { app } = window.require("electron").remote;

class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
