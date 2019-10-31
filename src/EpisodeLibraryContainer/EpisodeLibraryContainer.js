import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import EpisodeList from '../EpisodeList';

function EpisodeLibraryContainer(props) {
  const { getEpisodesList, episodes } = props;

  useEffect(() => {
    getEpisodesList();
  }, [getEpisodesList]);

  return (
    <>{ !episodes.isFetching && <EpisodeList episodes={episodes.data} />}</>
  );
}

EpisodeLibraryContainer.propTypes = {
  getEpisodesList: PropTypes.func.isRequired,
  episodes: PropTypes.shape({
    isFetching: PropTypes.bool,
    error: PropTypes.object,
    data: PropTypes.array,
  }).isRequired,
};

export default EpisodeLibraryContainer;
