import React from 'react'
import { Select, CheckIcon } from 'native-base'

export default ({ media, filter, setFilter }) => {
  const options =
    media === 'movie'
      ? [
          { label: 'Popular', value: 'popular' },
          { label: 'Top Rated', value: 'top_rated' },
          { label: 'Now Playing', value: 'now_playing' },
          { label: 'Upcoming', value: 'upcoming' },
        ]
      : media === 'tv'
      ? [
          { label: 'Popular', value: 'popular' },
          { label: 'Top Rated', value: 'top_rated' },
          { label: 'On the Air', value: 'on_the_air' },
          { label: 'Airing Today', value: 'airing_today' },
        ]
      : media === 'search'
      ? [
          { label: 'Both', value: 'multi' },
          { label: 'Movie', value: 'movie' },
          { label: 'TV Shows', value: 'tv' },
        ]
      : null

  return (
    <Select
      selectedValue={filter}
      minWidth="200"
      accessibilityLabel="Filter"
      placeholder="Select filter"
      _selectedItem={{
        bg: 'teal.600',
        endIcon: <CheckIcon size="5" />,
      }}
      onValueChange={itemValue => setFilter(itemValue)}
    >
      {options.map(option => (
        <Select.Item label={option.label} value={option.value} />
      ))}
    </Select>
  )
}
