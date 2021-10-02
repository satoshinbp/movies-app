import React from 'react';
import { Select, CheckIcon } from 'native-base';

export default ({ filter, setFilter }) => {
  return (
    <Select
      selectedValue={filter}
      minWidth="200"
      accessibilityLabel="Choose Filter"
      placeholder="Choose Filter"
      _selectedItem={{
        bg: 'teal.600',
        endIcon: <CheckIcon size="5" />,
      }}
      onValueChange={(itemValue) => setFilter(itemValue)}
    >
      <Select.Item label="Popular" value="popular" />
      <Select.Item label="Top Rated" value="topRated" />
      <Select.Item label="Now Playing" value="nowPlaying" />
      <Select.Item label="Upcoming" value="upcoming" />
    </Select>
  );
};
