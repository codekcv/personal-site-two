import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const Card: React.FC = ({ children }) => (
  <Box
    as={motion.div}
    backgroundColor="white"
    padding="2rem"
    cursor="pointer"
    border="1px dotted rgba(0, 0, 0, 0.1)"
    borderRadius={12}
    boxShadow="0 0.75rem 3rem 0em rgba(0, 0, 0, 0.05), 0 0.75rem 0rem 0rem rgba(0, 0, 0, 0.05)"
  >
    {children}
  </Box>
)

export default Card
