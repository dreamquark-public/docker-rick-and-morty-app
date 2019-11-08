
import { episodeListSelector, fetchEpisodesList } from './EpisodeLibraryRedux';

import Library from '../Library';
import EpisodeList from '../EpisodeList';

const episodeListGraphQLFields = `
  totalCount
  collection {
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

export default Library({
  action: fetchEpisodesList,
  selector: episodeListSelector,
  graphQLFields: episodeListGraphQLFields,
})(EpisodeList);
