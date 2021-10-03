import React from 'react';
import { Select, CheckIcon } from 'native-base';

export default ({ filter, setFilter }) => {
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
      onValueChange={(itemValue) => setFilter(itemValue)}
    >
      <Select.Item label="Popular" value="popular" />
      <Select.Item label="Top Rated" value="top_rated" />
      <Select.Item label="On the Air" value="on_the_air" />
      <Select.Item label="Airing Today" value="airing_today" />
    </Select>
  );
};
