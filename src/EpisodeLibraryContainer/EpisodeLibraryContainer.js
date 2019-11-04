import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import EpisodeList from '../EpisodeList';

function EpisodeLibraryContainer(props) {
  const { getEpisodesList, episodesLibrary } = props;

  useEffect(() => {
    getEpisodesList();
  }, [getEpisodesList]);

  return (
    <>{ !episodesLibrary.isFetching && <EpisodeList episodes={episodesLibrary.episodes} />}</>
  );
}

EpisodeLibraryContainer.propTypes = {
  getEpisodesList: PropTypes.func.isRequired,
  episodesLibrary: PropTypes.shape({
    isFetching: PropTypes.bool,
    error: PropTypes.object,
    episodes: PropTypes.array,
  }).isRequired,
};

export default EpisodeLibraryContainer;
