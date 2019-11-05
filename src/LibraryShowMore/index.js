import React from 'react';
import PropTypes from 'prop-types';

import { useQueryString } from '../hooks/query-string-hooks';
import { updateQueryString } from '../helpers/url-helpers';

function LibraryShowMore(props) {
  const { onFetch, history } = props;

  const { skip = 0, limit = 10 } = useQueryString();

  return (
    <div className="library-show-more">
      <button
        type="button"
        className="library-show-more__button"
        onClick={() => updateQueryString(history, { skip: +skip + 8, limit: +limit })
          && onFetch({ skip: +skip + 8, limit: +limit })}
      >
        Show More Episodes
      </button>
    </div>
  );
}

LibraryShowMore.propTypes = {
  onFetch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default LibraryShowMore;
