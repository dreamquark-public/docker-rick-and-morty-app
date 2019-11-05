import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import EpisodeList from '../EpisodeList';
import { useQueryString } from '../hooks/query-string-hooks';
import { updateQueryString } from '../helpers/url-helpers';
import LibraryShowMore from '../LibraryShowMore';

function EpisodeLibraryContainer(props) {
  const { getEpisodesList, episodesLibrary, history } = props;

  const { skip = 0, limit = 8 } = useQueryString();
  if (!skip && !limit) {
    updateQueryString(history, { skip: 0, limit: 8 });
  }

  useEffect(() => {
    getEpisodesList({ skip: +skip, limit: +limit });
  }, [getEpisodesList, skip, limit]);

  return (
    <>
      { !episodesLibrary.isFetching && (
        <>
          <EpisodeList episodes={episodesLibrary.episodes} />
          <LibraryShowMore history={history} onFetch={getEpisodesList} />
        </>
      )}
    </>
  );
}

EpisodeLibraryContainer.propTypes = {
  getEpisodesList: PropTypes.func.isRequired,
  episodesLibrary: PropTypes.shape({
    isFetching: PropTypes.bool,
    error: PropTypes.object,
    episodes: PropTypes.array,
  }).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default EpisodeLibraryContainer;
