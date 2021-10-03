import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/core';
import { View, VStack, Heading, Text, Image } from 'native-base';
import Loading from '../components/Loading';
import { getMovie } from '../utils/api';

export default () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  const route = useRoute();

  const fetchMovie = () => {
    setLoading(true);

    getMovie(route.params.media, route.params.id).then(
      (fetchedMovie) => {
        setMovie(fetchedMovie);
        setLoading(false);
      },
      (err) => {
        alert('Error', `Something went wrong! ${err}`);
      }
    );
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <View px={8}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <VStack space={4} my={4} alignItems="center">
            <Heading size="md">{movie.title}</Heading>
            <Image size="192px" source={{ uri: movie.image }} alt="thumbnail" />
          </VStack>
          <VStack space={4} my={4}>
            <Text>{movie.overview}</Text>
            <Text>
              Popularity: {movie.popularity} | Release Date: {movie.releaseDate}
            </Text>
          </VStack>
        </>
      )}
    </View>
  );
};
