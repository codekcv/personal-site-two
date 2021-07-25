import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import Footer from './Footer/Footer.main'
import Header from './Header/Header.main'

const Layout: React.FC = ({ children }) => (
  <Flex
    as="main"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    maxWidth={768}
    mx="auto"
  >
    <Box w="100%" flex={1}>
      <Header />
      {children}
    </Box>

    <Footer />
  </Flex>
)

export default Layout
