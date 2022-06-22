import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetas">
          {planets.map((plt, index) => (<PlanetCard
            className="planeta"
            key={ index }
            planetName={ plt.name }
            planetImage={ plt.image }
          />))}

        </div>
      </div>
    );
  }
}
export default SolarSystem;
