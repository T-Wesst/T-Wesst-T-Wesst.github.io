import React, { Component } from "react";
class Project extends Component {
  render() {
    return (
      <div className="card box-shadow">
        <div className="item">
          <img
            src="https://t-wesst.github.io/images/la.jpg"
            alt="temp img"
            className="card-img-top"
          />
          <div className="card-body">
            <h4 className="text-center">Veg-LA</h4>
            <p className="card-body">
              A web application that publishes crowd-sourced reviews about local
              vegan business in the Los Angeles area.
            </p>
            <small>
              <i className="fas fa-external-link-alt" />
              <a href="/" target="_blank" className="card-link">
                Preview
              </a>
              <br />
              <i className="fas fa-code" />
              <a href="/" target="_blank" className="card-link">
                Source
              </a>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
