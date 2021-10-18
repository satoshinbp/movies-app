import React from 'react'
import { VStack, HStack, FormControl, Input, Select, Button, Icon, CheckIcon } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

export default ({ searchText, setSearchText, searchType, setSearchType, fetchMovies, error, setError }) => {
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
          <Select
            selectedValue={searchType}
            minWidth="200"
            accessibilityLabel="Type"
            placeholder="Select type"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            onValueChange={itemValue => setSearchType(itemValue)}
          >
            <Select.Item label="Both" value="multi" />
            <Select.Item label="Movie" value="movie" />
            <Select.Item label="TV Shows" value="tv" />
          </Select>
        </FormControl>
        <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name="ios-search" />}>
          Search
        </Button>
      </HStack>
    </VStack>
  )
}
