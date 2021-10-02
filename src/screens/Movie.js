import React from 'react';
import { View, VStack, Heading, Text, Image } from 'native-base';
import { useRoute } from '@react-navigation/native';

export default () => {
  const route = useRoute();

  return (
    <View px={8}>
      <VStack space={4} my={4} alignItems="center">
        <Heading size="md">{route.params.title}</Heading>
        <Image size="192px" source={{ uri: route.params.image }} alt="thumbnail" />
      </VStack>
      <VStack space={4} my={4}>
        <Text>{route.params.overview}</Text>
        <Text>
          Popularity: {route.params.popularity} | Release Date: {route.params.releaseDate}
        </Text>
      </VStack>
    </View>
  );
};
