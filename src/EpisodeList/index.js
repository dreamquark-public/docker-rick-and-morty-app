import React from 'react';
import PropTypes from 'prop-types';

import EpisodeCard from '../EpisodeCard';

function EpisodeList(props) {
  const { episodes } = props;


  return (
    <div className="episode-list">
      <>
        {episodes.map((episode) => episode && (
        <EpisodeCard
          key={episode.id}
          name={episode.name}
          number={episode.number}
          duration={episode.duration}
          image={episode.image}
          summary={episode.summary}
          season={episode.season}
        />
        ))}
      </>
    </div>
  );
}

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
      duration: PropTypes.string,
      image: PropTypes.string,
      summary: PropTypes.string,
      season: PropTypes.shape({
        number: PropTypes.number,
        diffusionDate: PropTypes.string,
      }),
    }),
  ),
};

EpisodeList.defaultProps = {
  episodes: [],
};

export default EpisodeList;
