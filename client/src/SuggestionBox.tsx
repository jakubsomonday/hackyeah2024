import React from 'react';
import { Project } from './Portal';

const NEW_PROJECT: Project = {
  name: 'Twój projekt!',
  description: 'Masz pomysł na projekt? Razem mozemy go zrealizować!',
  logo: '/static/question.webp',
  tags: [],
  altButtonText: 'Zgłoś',
  status: 'Todo',
  status_color: '#555',
  companies: ['']
};

interface SuggestionBoxProps {
  projects: Project[];
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ projects }) => {
  const projectsToRender = [...projects, NEW_PROJECT];
  return (
    <div className="suggestion-box box">
      <h2 className="title is-4">Impact Link - Projekty które możesz wesprzeć</h2>
      <div className="suggestion-list columns is-multiline">
        {projects.length > 0 || <>
          <div key={'place1'} className="suggestion-item column is-one-fifth">
            <div className="skeleton-block" style={{ height: "100%" }}></div>
          </div>
          <div key={'place3'} className="suggestion-item column is-one-fifth">
            <div className="skeleton-block" style={{ height: "100%" }}></div>
          </div>
          <div key={'place2'} className="suggestion-item column is-one-fifth">
            <div className="skeleton-block" style={{ height: "100%" }}></div>
          </div>
        </>}
        {projectsToRender.map((project, index) => (
          <div key={index} className="suggestion-item column is-one-fifth">
            <div
              className="card is-flex is-flex-direction-column"
              style={{ height: "100%" }}
            >
              <div className="card-image is-flex is-justify-content-center">
                <figure
                  className="image"
                  style={{
                    width: "192px",
                    maxHeight: "192px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={project.logo}
                    alt={project.name}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </figure>
              </div>
              <div className="card-content" style={{ flexGrow: 1 }}>
                <h2 className="title is-5 mt-3">{project.name}</h2>
                <p className="content">{project.description}</p>
                <p className="has-text-grey is-size-7">
                  {project.tags && "Dlaczego polecamy: "}
                  {project.tags}
                </p>
              </div>
              {project.altButtonText ? (
                <button className="button is-danger has-text-white card-button">
                  Zgłoś
                </button>
              ) : (
                <button className="card-button button">Zobacz</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionBox;
