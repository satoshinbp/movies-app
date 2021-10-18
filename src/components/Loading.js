import { Center, HStack, Heading, Spinner } from 'native-base'
import React from 'react'

export default () => {
  return (
    <Center mt={16}>
      <HStack space={2} alignItems="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Center>
  )
}
