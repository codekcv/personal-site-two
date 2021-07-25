import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const menus = ['Home', 'Projects', 'Blogs', 'Contact'].map((menu) => (
  <Box key={menu} as="li" mx={2} listStyleType="none">
    <Text>{menu}</Text>
  </Box>
))

const Header = (): JSX.Element => {
  return (
    <Flex width="100%" my="2rem" justifyContent="center" alignItems="center">
      <Flex as="ul">{menus}</Flex>
    </Flex>
  )
}

export default Header
