import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Project } from './Portal';

interface ProjectListWithShareProps {
  projects: Project[];
  onShareToLinkedIn: (project: Project) => void;
  onShareToFacebook: (project: Project) => void;
  onShareToInstagram: (project: Project) => void;
}

const ProjectListWithShare: React.FC<ProjectListWithShareProps> = ({
  projects,
  onShareToLinkedIn,
  onShareToFacebook,
  onShareToInstagram,
}) => {
  return (
    <div className='box'>
      <h1 className='title is-4'>Podziel się postem o projekcie, który wspierasz!</h1>
      {projects ? projects.map((project, index) => (
        <div key={index} className='box is-flex is-align-items-center is-justify-content-space-between mb-4'>
          <div className='is-flex-grow-1'>
            <h2 className='title is-5'>{project.name}</h2>
            <p className='content'>{project.description}</p>
          </div>
          <div className='buttons'>
            <button
              className='button'
              style={{
                backgroundColor: '#0077b5',
                color: 'white',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => onShareToLinkedIn(project)}
              title='Share to LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
            <button
              className='button'
              style={{
                backgroundColor: '#1877f2',
                color: 'white',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => onShareToFacebook(project)}
              title='Share to Facebook'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </button>
            <button
              className='button'
              style={{
                background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #e1306c)',
                color: 'white',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => onShareToInstagram(project)}
              title='Share to Instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </div>
        </div>
      )) : <div className="skeleton-block" />}
    </div>
  );
};

export default ProjectListWithShare;
