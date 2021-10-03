import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, VStack, HStack, Heading, Text, Button, Image } from 'native-base';

export default (props) => {
  const { image, title, popularity, releaseDate, overview } = props;
  const navigation = useNavigation();

  return (
    <View w="100%" py="2" borderBottomWidth="1" borderColor="coolGray.200">
      <HStack space={3} justifyContent="space-between">
        <View w="96px">
          <Image flex={1} source={{ uri: image }} alt="thumbnail" />
        </View>
        <VStack flex={1}>
          <Heading size="xs">{title}</Heading>
          <Text>Popularity: {popularity}</Text>
          <Text>Release Date: {releaseDate}</Text>
          <Button
            onPress={() => navigation.navigate('Movie', { image, title, popularity, releaseDate, overview })}
            w="100%"
          >
            More Details
          </Button>
        </VStack>
      </HStack>
    </View>
  );
};
