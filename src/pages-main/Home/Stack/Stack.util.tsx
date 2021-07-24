import { Box } from '@chakra-ui/layout'
import React from 'react'

export const frontEndTechnologies = [
  'TypeScript',
  'React',
  'Redux',
  'Apollo Client',
  'styled-components',
  'styled-system',
  'React Hook Form',
  'Next.js',
  'React Testing Library'
].map((item) => (
  <Box as="li" key={item} mx={2} listStyleType="none">
    {item}
  </Box>
))

export const backEndTechnologies = [
  'TypeScript',
  'Node.js',
  'Koa',
  'Apollo Server',
  'GraphQL',
  'PostgreSQL',
  'Prisma',
  'Nexus',
  'JWT'
].map((item) => (
  <Box as="li" key={item} mx={2} listStyleType="none">
    {item}
  </Box>
))
