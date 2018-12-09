import React, { Component } from "react";
class Project extends Component {
  render() {
    const { imgSrc, desc, title, alt } = this.props.project;
    return (
      <div className="card box-shadow">
        <div className="item">
          <img src={imgSrc} alt={alt} className="card-img-top" />
          <div className="card-body">
            <h4 className="text-center">{title}</h4>
            <p className="card-body">{desc}</p>
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
