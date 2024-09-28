import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero is-white">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-half">
              <figure className="image is-4by3">
                <img src="https://serdeczna.org/wp-content/uploads/2023/05/KAM7910a-scaled-1.jpeg" alt="Support Children and Youth" />
              </figure>
            </div>
            <div className="column is-half">
              <h1 className="title">Wspieraj z nami dzieci i młodzież!</h1>
              <p className="subtitle">
                W naszych projektach w pierwszej kolejności wspieramy osoby narażone na wykluczenie społeczne i zawodowe, w tym między innymi:
              </p>
              <ul>
                <li>Dzieci z domów dziecka</li>
                <li>Świetlic środowiskowych</li>
                <li>Małych miejscowości</li>
                <li>Z niepełnosprawnościami</li>
                <li>Z problemami zdrowia psychicznego</li>
                <li>Rodziny uchodźców</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
