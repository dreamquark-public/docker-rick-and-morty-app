import { combineReducers } from 'redux';

import EpisodeLibraryReducer from './EpisodeLibraryContainer/EpisodeLibraryRedux';

export default combineReducers({
  EpisodeLibraryContainer: EpisodeLibraryReducer,
});
