import React, { useState, useEffect } from 'react'
import { View, Center, VStack, Heading } from 'native-base'
import Loading from '../components/Loading'
import SearchForm from '../components/SearchForm'
import MoviesList from '../components/MoviesList'
import { searchMovies } from '../utils/api'

export default () => {
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [filter, setFilter] = useState('multi')
  const [movies, setMovies] = useState([])
  const [message, setMasseage] = useState('Please initiate search')
  const [error, setError] = useState(false)

  const fetchMovies = () => {
    setLoading(true)

    searchMovies(searchText, filter).then(
      fetchedMovies => {
        if (fetchedMovies.length === 0) {
          setMasseage('No Match')
          setLoading(false)
        } else {
          setMovies(fetchedMovies)
          setMasseage('')
          setLoading(false)
        }
      },
      err => {
        alert('Error', `Something went wrong! ${err}`)
      }
    )
  }

  useEffect(() => {
    if (error && searchText !== '') {
      setError(false)
    }
  }, [searchText])

  return (
    <View h="100%" flex={1} px={4} bg="#fff">
      <VStack space={4} w="100%" h="100%" mt={4}>
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          filter={filter}
          setFilter={setFilter}
          fetchMovies={fetchMovies}
          error={error}
          setError={setError}
        />
        {loading ? (
          <Loading />
        ) : message ? (
          <Center mt={16}>
            <Heading color="primary.500" fontSize="md">
              {message}
            </Heading>
          </Center>
        ) : (
          <MoviesList movies={movies} media={filter === 'multi' ? null : filter} />
        )}
      </VStack>
    </View>
  )
}
