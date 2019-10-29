import React from 'react';
import PropTypes from 'prop-types';

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
      <img className="episode-card__img" src={image} alt={`Rick and Morty ${name}`} />
      <div className="episode-card__duration">
        <span>Duration: </span>
        {duration}
      </div>
      <div>{summary}</div>
    </div>
  );
}

EpisodeCard.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  duration: PropTypes.string,
  image: PropTypes.string,
  summary: PropTypes.string,
  season: PropTypes.shape({
    number: PropTypes.number,
    diffusionDate: PropTypes.string,
  }),
};

EpisodeCard.defaultProps = {
  name: 'Pilot',
  number: 1,
  duration: '22:30',
  image: 'http://static.tvmaze.com/uploads/images/medium_landscape/15/37912.jpg',
  summary: "<p>Rick takes Morty to another dimension to get some seeds for him but Morty's parents are considering to put Rick in a retirement home for keeping Morty away from school to help him in his lab.</p>",
  season: {
    number: 1,
    diffusionDate: '2013',
  },
};

export default EpisodeCard;
