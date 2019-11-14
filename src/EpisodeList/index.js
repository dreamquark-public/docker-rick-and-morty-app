import React, { memo } from 'react';
import PropTypes from 'prop-types';

import EpisodeCard from '../EpisodeCard';

const EpisodeList = memo((props) => {
  const { collection } = props;


  return (
    <div className="episode-list">
      <>
        {collection.map((episode) => episode && (
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
});

EpisodeList.propTypes = {
  collection: PropTypes.arrayOf(
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
  collection: [],
};

export default EpisodeList;
