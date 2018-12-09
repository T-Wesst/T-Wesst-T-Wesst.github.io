import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
  // hard coded project DB
  state = {
    projects: [
      {
        id: 1,
        title: "Veg-LA",
        desc:
          "A web application that publishes crowd sourced reviews about local vegan business in the Los Angeles area.",
        imgSrc: "https://t-wesst.github.io/images/la.jpg",
        alt: "some image"
      },
      {
        id: 2,
        title: "Project 2",
        desc: "An app in progress...",
        imgSrc: "https://t-wesst.github.io/images/la.jpg",
        alt: "some image"
      },
      {
        id: 3,
        title: "Project 3",
        desc: "Some app that I will build....eventually",
        imgSrc: "https://t-wesst.github.io/images/la.jpg",
        alt: "some image"
      }
    ]
  };
  render() {
    const { projects } = this.state;
    return (
      <React.Fragment>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </React.Fragment>
    );
  }
}

export default Projects;
