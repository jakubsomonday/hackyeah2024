import React from 'react';

const SuggestionBox = () => {
    const similarProjects = [
        {
            name: 'Akademia Równych Szans',
            short_description: 'Bezpłatne zajęcia wyrównawcze dla dzieci z rodzin o niskich dochodach.',
            image: '/static/academy.webp',
            values: ['równość', 'edukacja', 'wsparcie', 'dostępność']
        },
        {
            name: 'Klub Kreatywności Dziecięcej',
            short_description: 'Warsztaty artystyczne i technologiczne dla dzieci z marginalizowanych środowisk.',
            image: '/static/creativeclub.webp',
            values: ['kreatywność', 'integracja', 'równość', 'rozwój']
        },
        {
            name: 'Młodzi Odkrywcy Świata',
            short_description: 'Zajęcia edukacyjne z przyrody i nauki dla dzieci z trudnych warunków.',
            image: '/static/youngexplorers.webp',
            values: ['inspiracja', 'nauka', 'zabawa', 'dostępność']
        },
        {
            name: 'Twój projekt!',
            short_description: 'Masz pomysł na projekt? Razem mozemy go zrealizować!',
            image: '/static/question.webp',
            values: []
        },
    ];

    return (
        <div className='suggestion-box box'>
  <h2 className='title is-4'>Projekty które mozesz wesprzec</h2>
  <div className='suggestion-list columns is-multiline'>
    {similarProjects.map((project, index) => (
      <div key={index} className='suggestion-item column is-one-fifth'>
        <div className='card is-flex is-flex-direction-column' style={{ height: '100%' }}>
          <div className='card-image is-flex is-justify-content-center'>
            <figure className='image' style={{ width: '192px', maxHeight: '192px', overflow: 'hidden' }}>
              <img src={project.image} alt={project.name} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </figure>
          </div>
          <div className='card-content' style={{ flexGrow: 1 }}>
            <h2 className='title is-5 mt-3'>{project.name}</h2>
            <p className='content'>{project.short_description}</p>
            <p className='has-text-grey is-size-7'>
              { project.values.length > 0 && "Dlaczego polecamy: "}{project.values.join(', ')}
            </p>
          </div>
            <button className='button is-primary'>Zobacz</button>
        </div>
      </div>
    ))}
  </div>
</div>

    );
}

export default SuggestionBox;
