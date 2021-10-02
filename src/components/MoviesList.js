import React from 'react';
import { FlatList } from 'native-base';
import MovieListItem from './MovieListItem';

export default () => {
  const data = [
    {
      image: 'https://www.edamam.com/web-img/3aa/3aa1aace88f3f4d388663b1443ea1d17.jpg',
      title: 'Fight Club',
      popularity: 42.254,
      releaseDate: '1999-10-15',
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    },
    {
      image: 'https://www.edamam.com/web-img/3aa/3aa1aace88f3f4d388663b1443ea1d17.jpg',
      title: 'Taxi Driver',
      popularity: 42.254,
      releaseDate: '1999-10-15',
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    },
    {
      image: 'https://www.edamam.com/web-img/3aa/3aa1aace88f3f4d388663b1443ea1d17.jpg',
      title: 'Pulp Fiction',
      popularity: 42.254,
      releaseDate: '1999-10-15',
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    },
    {
      image: 'https://www.edamam.com/web-img/3aa/3aa1aace88f3f4d388663b1443ea1d17.jpg',
      title: 'The Big Lebowski',
      popularity: 42.254,
      releaseDate: '1999-10-15',
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <MovieListItem
          image={item.image}
          title={item.title}
          popularity={item.popularity}
          releaseDate={item.releaseDate}
          overview={item.overview}
        />
      )}
      keyExtractor={(item) => item.title}
      showsVerticalScrollIndicator={false}
      space={10}
      w="100%"
    />
  );
};
