import { Box } from '@chakra-ui/react'
import React from 'react'

import Footer from './Footer/Footer.main'
import Header from './Header/Header.main'

const Layout: React.FC = ({ children }) => {
  return (
    <Box as="main" maxWidth={768} pt="6rem" mx="auto">
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout
