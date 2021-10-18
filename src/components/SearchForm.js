import React from 'react'
import { VStack, HStack, FormControl, Input, Button, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import Search from '../screens/Search'

export default ({ searchText, setSearchText, filter, setFilter, fetchMovies, error, setError }) => {
  const onSubmit = () => {
    if (searchText === '') {
      setError(true)
    } else {
      fetchMovies()
    }
  }

  return (
    <VStack w="100%" space={4}>
      <FormControl isRequired>
        <FormControl.Label>Movie/TV Show Name</FormControl.Label>
        <Input
          placeholder="i.e. Fight Club, Breaking Bad"
          value={searchText}
          onChangeText={value => setSearchText(value)}
        />
        {error && <FormControl.HelperText>Please input search text.</FormControl.HelperText>}
      </FormControl>
      <HStack justifyContent="space-between" alignItems="flex-end" space={2}>
        <FormControl isRequired flex={1}>
          <FormControl.Label>Type</FormControl.Label>
          <Select media="search" filter={filter} setFilter={setFilter} />
        </FormControl>
        <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name="ios-search" />}>
          Search
        </Button>
      </HStack>
    </VStack>
  )
}
