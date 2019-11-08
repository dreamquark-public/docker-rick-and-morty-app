import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash/fp';

import { useQueryString } from '../hooks/query-string-hooks';
import { updateQueryString } from '../helpers/url-helpers';
import LibraryShowMore from '../LibraryShowMore';

function Library({ action, selector, graphQLFields }) {
  return function LibraryHOC(LibraryComponent) {
    function ConnectedLibrary(props) {
      const { libraryFetcher, library, history } = props;

      const { skip, limit } = useQueryString();
      if (!skip && !limit) {
        updateQueryString(history, { skip: 0, limit: 8 });
      }

      useEffect(() => {
        if (!library.collection && skip && limit) {
          libraryFetcher({ skip: 0, limit: +skip + +limit });
        } else if (skip && limit) {
          libraryFetcher({ skip: +skip, limit: +limit });
        }
      }, [libraryFetcher, skip, limit]);

      const haveAllCollection = library.totalCount === get('collection.length', library);

      return (
        <>
          { (!library.isFetching || !library.collection) && (
            <>
              <LibraryComponent collection={library.collection} />
              { (!haveAllCollection)
                && <LibraryShowMore history={history} onFetch={libraryFetcher} />}
            </>
          )}
        </>
      );
    }

    function mapStateToProps(state) {
      return {
        library: selector(state),
      };
    }

    function mapDispatchToProps(dispatch) {
      return {
        libraryFetcher: (libraryParameters) => dispatch(
          action(graphQLFields, libraryParameters),
        ),
      };
    }

    ConnectedLibrary.propTypes = {
      libraryFetcher: PropTypes.func.isRequired,
      library: PropTypes.shape({
        isFetching: PropTypes.bool,
        error: PropTypes.object,
        collection: PropTypes.array,
        totalCount: PropTypes.number,
      }).isRequired,
      history: PropTypes.shape({
        replace: PropTypes.func.isRequired,
      }).isRequired,
    };

    return connect(mapStateToProps, mapDispatchToProps)(ConnectedLibrary);
  };
}


export default Library;
