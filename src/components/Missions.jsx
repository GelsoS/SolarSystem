import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missao">
          {missions.map((missao) => (<MissionCard
            key={ missao.name }
            name={ missao.name }
            year={ missao.year }
            country={ missao.country }
            destination={ missao.destination }
          />))}
        </div>
      </div>
    );
  }
}
export default Missions;
