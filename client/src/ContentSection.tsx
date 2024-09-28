import React from 'react';

const ContentSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3">Czego nasi podopieczni potrzebują najbardziej?</h2>
        <div className="columns">
          <div className="column">
            <div className="box">
              <div className="content">
                <h3 className="title is-4">Twojego czasu</h3>
                <p>Content explaining why time donation matters.</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <div className="content">
                <h3 className="title is-4">Specjalistyczne wsparcie</h3>
                <p>Details about specialist support needed for the children.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
