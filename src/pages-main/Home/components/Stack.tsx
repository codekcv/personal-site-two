import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../../components/BobbleTitle'
import Card from '../../../components/Card'
import { animDelay, triggerOnce } from '../Home.util'

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

const Stack = (): JSX.Element => {
  const [isOpenBE, setIsOpenBE] = useState(false)
  const [isOpenFE, setIsOpenFE] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: animDelay,
    triggerOnce
  })

  return (
    <Box ref={ref} mt="2rem">
      <BobbleTitle inView={inView} isOpen={isOpenBE || isOpenFE}>
        Technology Stack
      </BobbleTitle>

      <Flex justifyContent="center" mt="-1.5rem">
        <Card
          inView={inView}
          isOpen={isOpenBE}
          setIsOpen={setIsOpenBE}
          w="100%"
          mr="2rem"
          contentPrev={
            <>
              <Text textAlign="center">Back-End</Text>

              <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
                {backEndTechnologies}
              </Flex>
            </>
          }
          contentFull={<></>}
        />

        <Card
          inView={inView}
          isOpen={isOpenFE}
          setIsOpen={setIsOpenFE}
          w="100%"
          ml="2rem"
          contentPrev={
            <>
              <Text textAlign="center">Front-End</Text>

              <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
                {frontEndTechnologies}
              </Flex>
            </>
          }
          contentFull={<></>}
        />
      </Flex>
    </Box>
  )
}

export default Stack
