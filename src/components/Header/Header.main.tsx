import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const menus = ['Home', 'Projects', 'Blogs', 'Contact'].map((menu) => (
  <Box key={menu} as="li" mx={2}>
    <Text>{menu}</Text>
  </Box>
))

const Header = (): JSX.Element => {
  return (
    <Box width={1} my="2rem" justifyContent="center" alignItems="center">
      <Flex as="ul">{menus}</Flex>
    </Box>
  )
}

export default Header
