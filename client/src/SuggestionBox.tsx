import React from 'react';

interface Project {
  name: string;
  image: string;
  short_description: string;
  values: string[];
  altButtonText?: string;
}

interface SuggestionBoxProps {
  projects: Project[];
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({
                                                       projects,
                                                     }) => {

  return (
    <div className='suggestion-box box'>
      <h2 className='title is-4'>Projekty które możesz wesprzeć</h2>
      <div className='suggestion-list columns is-multiline'>
        {projects.map((project, index) => (
          <div key={index} className='suggestion-item column is-one-fifth'>
            <div className='card is-flex is-flex-direction-column' style={{height: '100%'}}>
              <div className='card-image is-flex is-justify-content-center'>
                <figure className='image' style={{width: '192px', maxHeight: '192px', overflow: 'hidden'}}>
                  <img src={project.image} alt={project.name}
                       style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                </figure>
              </div>
              <div className='card-content' style={{flexGrow: 1}}>
                <h2 className='title is-5 mt-3'>{project.name}</h2>
                <p className='content'>{project.short_description}</p>
                <p className='has-text-grey is-size-7'>
                  {project.values.length > 0 && "Dlaczego polecamy: "}{project.values.join(', ')}
                </p>
              </div>
              {project.altButtonText ?
                <button className='button is-danger has-text-white card-button'>Zgłoś</button>:
                <button className='card-button button'>Zobacz</button>}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default SuggestionBox;
