import React from 'react';
import PropTypes from 'prop-types';

import imagePlaceholder from './placeholder.png';

function EpisodeCard(props) {
  const {
    name, number, duration, image, summary, season,
  } = props;

  return (
    <div className="episode-card">
      <div className="episode-card__header">
        <h4>
          {number}
          -
          {name}
        </h4>
        <div className="episode-card__season-infos">
          <div>
            <span>season: </span>
            {season.number}
          </div>
          <div>
            <span>diffusion: </span>
            {season.diffusionDate}
          </div>
        </div>
      </div>
      <img className="episode-card__img" src={image || imagePlaceholder} alt={`Rick and Morty ${name}`} />
      <div className="episode-card__duration">
        <span>Duration: </span>
        {duration}
      </div>
      <div>{summary}</div>
    </div>
  );
}

EpisodeCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  image: PropTypes.string,
  summary: PropTypes.string,
  season: PropTypes.shape({
    number: PropTypes.number,
    diffusionDate: PropTypes.string,
  }).isRequired,
};

EpisodeCard.defaultProps = {
  image: undefined,
  summary: '',
};

export default EpisodeCard;
