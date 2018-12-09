import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Project from "./components/Project";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Tyroo J. M. West" />
        <div className="container">
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
