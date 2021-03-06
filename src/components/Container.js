import React, { useState, useEffect } from 'react'
import { View, VStack, Divider } from 'native-base'
import Loading from '../components/Loading'
import MoviesList from '../components/MoviesList'
import Select from './Select'
import { getMovies } from '../utils/api'

export default ({ media }) => {
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('popular')
  const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    setLoading(true)

    getMovies(media, filter).then(
      fetchedMovies => {
        setMovies(fetchedMovies)
        setLoading(false)
      },
      err => alert('Error', `Something went wrong! ${err}`)
    )
  }

  useEffect(() => fetchMovies(), [filter])

  return (
    <View h="100%" flex={1} px={4} bg="#fff">
      <VStack alignItems="center" space={1} w="100%" h="100%" mt={4} divider={<Divider />}>
        <Select media={media} filter={filter} setFilter={setFilter} />
        {loading ? <Loading /> : <MoviesList movies={movies} media={media} />}
      </VStack>
    </View>
  )
}
