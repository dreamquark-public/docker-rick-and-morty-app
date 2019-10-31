import { connect } from 'react-redux';

import { episodeListSelector, fetchEpisodesList } from './EpisodeLibraryRedux';
import EpisodeLibraryContainer from './EpisodeLibraryContainer';

const episodeListGraphQLFields = `
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
`;

function mapStateToProps(state) {
  return {
    episodes: episodeListSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEpisodesList: () => dispatch(fetchEpisodesList(episodeListGraphQLFields)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EpisodeLibraryContainer);
