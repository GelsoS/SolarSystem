import React from 'react';
import Prot from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">
          { name }
          {' '}
        </p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}
export default MissionCard;

MissionCard.propTypes = {
  name: Prot.string.isRequired,
  year: Prot.string.isRequired,
  country: Prot.string.isRequired,
  destination: Prot.string.isRequired,
};
