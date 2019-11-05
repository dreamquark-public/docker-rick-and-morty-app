import { connect } from 'react-redux';

import { episodeListSelector, fetchEpisodesList } from './EpisodeLibraryRedux';
import EpisodeLibraryContainer from './EpisodeLibraryContainer';

const episodeListGraphQLFields = `
  totalCount
  episodes {
    id
    name
    number
    duration
    image
    summary
    season {
      number
      diffusionDate
    }
  }
`;

function mapStateToProps(state) {
  return {
    episodesLibrary: episodeListSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEpisodesList: (episodeLibraryParameters) => dispatch(fetchEpisodesList(
      episodeListGraphQLFields,
      episodeLibraryParameters,
    )),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EpisodeLibraryContainer);
