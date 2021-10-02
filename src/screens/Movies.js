import React, { useState } from 'react';
import { View, VStack, Divider } from 'native-base';
import Loading from '../components/Loading';
import Movies from '../components/MoviesList';
import SelectBox from '../components/SelectBox';

export default () => {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('popular');
  const [movies, setMovies] = useState([]);

  return (
    <View px={4} bg="#fff" minH="100%">
      <VStack w="100%" my={4} alignItems="center" space={1} divider={<Divider />}>
        <SelectBox filter={filter} setFilter={setFilter} />
        {loading ? <Loading /> : <Movies />}
      </VStack>
    </View>
  );
};
