import React from 'react';
import { FlatList } from 'native-base';
import MovieListItem from './MovieListItem';

export default ({ movies }) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieListItem
          image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          title={item.title || item.name}
          popularity={item.popularity}
          releaseDate={item.release_date || item.first_air_date}
          overview={item.overview}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      w="100%"
    />
  );
};
