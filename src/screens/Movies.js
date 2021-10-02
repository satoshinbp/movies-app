import React, { useState, useEffect } from 'react';
import { View, VStack, Divider } from 'native-base';
import Loading from '../components/Loading';
import MoviesList from '../components/MoviesList';
import SelectBox from '../components/SelectBox';
import { getMovies } from '../utils/api';

export default () => {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('popular');
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    setLoading(true);

    getMovies(filter).then(
      (fetchedMovies) => {
        setMovies(fetchedMovies);
        setLoading(false);
        console.log('movies', fetchedMovies);
      },
      (err) => {
        alert('Error', `Something went wrong! ${err}`);
      }
    );
  };

  useEffect(() => {
    fetchMovies();
  }, [filter]);

  return (
    <View px={4} bg="#fff" minH="100%">
      <VStack w="100%" my={4} alignItems="center" space={1} divider={<Divider />}>
        <SelectBox filter={filter} setFilter={setFilter} />
        {loading ? <Loading /> : <MoviesList movies={movies} />}
      </VStack>
    </View>
  );
};
