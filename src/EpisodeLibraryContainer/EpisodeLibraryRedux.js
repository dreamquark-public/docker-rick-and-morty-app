import produce from 'immer';
import GraphQLFetcher from '../helpers/fetchHelpers';

// actions types
const REQUEST_EPISODES_LIST = 'REQUEST_EPISODES_LIST';
const RECEIVE_EPISODES_LIST = 'RECEIVE_EPISODES_LIST';
const ERROR_EPISODES_LIST = 'ERROR_EPISODES_LIST';

// actions generators
const requestEpisodesList = () => ({ type: REQUEST_EPISODES_LIST });
const receiveEpisodeList = (episodeListJson) => (
  { type: RECEIVE_EPISODES_LIST, data: episodeListJson }
);
const errorEpisodeList = (errorJson) => ({ type: ERROR_EPISODES_LIST, error: errorJson });

/* eslint-disable no-console */
// async action
export const fetchEpisodesList = (graphQlFields) => async (dispatch) => {
  const formatedGraphQlQuery = `
    query getEpisodeList($skip: Int!) {
      episodesLibrary(skip: $skip) {
        ${graphQlFields}
      }
    } 
  `;

  dispatch(requestEpisodesList());

  try {
    const episodes = await GraphQLFetcher(formatedGraphQlQuery, 'episodesLibrary', { skip: 0 });
    dispatch(receiveEpisodeList(episodes));
  } catch (err) {
    console.error(err);
    dispatch(errorEpisodeList(err));
  }
};

// reducer
/* eslint-disable no-param-reassign, consistent-return */
const getEpisodesList = produce((draft = {}, action) => {
  switch (action.type) {
    case REQUEST_EPISODES_LIST:
      draft.episodeLibrary = {
        isFetching: true,
      };
      break;
    case RECEIVE_EPISODES_LIST:
      draft.episodeLibrary = {
        isFetching: false,
        episodes: action.data.episodes,
        totalCount: action.data.totalCount,
      };
      break;
    case ERROR_EPISODES_LIST:
      draft.episodeLibrary = {
        isFetching: false,
        error: { message: action.error },
      };
      break;
    default:
      return {
        episodeLibrary: {},
      };
  }
});

// selector
export const episodeListSelector = (state) => state.EpisodeLibraryContainer.episodeLibrary;

export default getEpisodesList;
