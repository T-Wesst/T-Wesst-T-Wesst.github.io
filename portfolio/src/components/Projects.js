import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
  // hard coded project DB
  state = {
    projects: [
      {
        id: 1,
        title: "Veg-LA",
        url: "https://veg-la.herokuapp.com/",
        srcCode: "https://github.com/T-Wesst/Veg-LA",
        desc:
          "Crowd sourced reviews about local vegan business in the Los Angeles area.",
        imgSrc:
          "https://images.unsplash.com/photo-1519105577358-d68dbbeecb80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        alt: "some image"
      },
      {
        id: 2,
        title: "Contact Manager",
        desc: "An app in progress...",
        url: "",
        srcCode: "",
        imgSrc:
          "https://images.unsplash.com/photo-1527067669193-6a36380de229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        alt: "some image"
      },
      {
        id: 3,
        title: "Videas",
        srcCode: "",
        desc:
          "An app that I will build eventually for content creators to register and write ideas for their next video.",
        url: "",
        imgSrc:
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        alt: "some image"
      },
      {
        id: 4,
        title: "Personal Stories",
        srcCode: "",
        desc: "A social network for creating public or private stories.",
        url: "",
        imgSrc:
          "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
