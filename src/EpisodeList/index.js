import React from 'react';
import PropTypes from 'prop-types';

import EpisodeCard from '../EpisodeCard';

function EpisodeList(props) {
  const { episodes } = props;

  return (
    <div className="episode-list">
      <>
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            name={episode.name}
            number={episode.number}
            duration={episode.duration}
            image={episode.image}
            summary={episode.summary}
            season={episode.season}
          />
        ))}
      </>
    </div>
  );
}

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
      duration: PropTypes.string,
      image: PropTypes.string,
      summary: PropTypes.string,
      season: PropTypes.shape({
        number: PropTypes.number,
        diffusionDate: PropTypes.string,
      }),
    }),
  ),
};

EpisodeList.defaultProps = {
  episodes: [
    {
      id: 1,
      name: 'Pilot',
      number: 1,
      duration: '22:30',
      image: 'http://static.tvmaze.com/uploads/images/medium_landscape/15/37912.jpg',
      summary: '<p>Rick takes Morty to another dimension to get some seeds for him but Morty\'s parents are considering to put Rick in a retirement home for keeping Morty away from school to help him in his lab.</p>',
      season: {
        number: 1,
        diffusionDate: '2013',
      },
    },
    {
      id: 2,
      name: 'Lawnmower Dog',
      number: 2,
      duration: '22:30',
      image: 'http://static.tvmaze.com/uploads/images/medium_landscape/15/37913.jpg',
      summary: '<p>Morty\'s small, white dog Snuffles gets on the nerves of the family, so Rick quickly builds a knowledge enhancing helmet for the dog. In the meantime, Rick and Morty decide to incept the dreams of Morty\'s math teacher, Mr. Goldenfold in order to convince him to give Morty A\'s in math. While the duo are sent on an epic dream world journey, Snuffles slowly gains sentience, which leads to a slew of even more problems.</p>',
      season: {
        number: 1,
        diffusionDate: '2013',
      },
    },
    {
      id: 3,
      name: 'Anatomy Park',
      number: 3,
      duration: '22:30',
      image: 'http://static.tvmaze.com/uploads/images/medium_landscape/15/37914.jpg',
      summary: '<p>It\'s around Christmas time and Jerry\'s parents are coming to visit so he wants everybody to have a normal holiday without technology and without Rick. Fortunately for him, Rick has other plans, involving building a molecular theme park inside of a friend of his named Ruben, and he shrinks down Morty and sends him in there to test it out.</p>',
      season: {
        number: 1,
        diffusionDate: '2013',
      },
    },
    {
      id: 4,
      name: 'M. Night Shaym-Aliens!',
      number: 4,
      duration: '22:30',
      image: 'http://static.tvmaze.com/uploads/images/medium_landscape/15/37915.jpg',
      summary: '<p>Rick and Morty try to get to the bottom of a mystery in this M. Night Shyamalan style twistaroony of an episode.</p>',
      season: {
        number: 1,
        diffusionDate: '2013',
      },
    },
    {
      id: 5,
      name: 'Meeseeks and Destroy',
      number: 5,
      duration: '22:30',
      image: 'http://static.tvmaze.com/uploads/images/medium_landscape/15/37916.jpg',
      summary: '<p>Rick provides the family with a solution to their problems, freeing him up to go on an adventure led by Morty. Sounds good, better record this one, broh!</p>',
      season: {
        number: 1,
        diffusionDate: '2013',
      },
    },
  ],
};

export default EpisodeList;
