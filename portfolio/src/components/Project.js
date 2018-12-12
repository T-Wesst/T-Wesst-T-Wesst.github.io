import React from "react";
const Project = props => {
  const { imgSrc, desc, url, srcCode, title, alt } = props.project;
  return (
    <div className="card box-shadow">
      <div className="item">
        <img src={imgSrc} alt={alt} className="card-img-top" />
        <div className="card-body">
          <h4 className="text-center">{title}</h4>
          <p className="card-body">{desc}</p>
          <small>
            <i className="fas fa-external-link-alt" />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Preview
            </a>
            <br />
            <i className="fas fa-code" />
            <a
              href={srcCode}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Source
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Project;
