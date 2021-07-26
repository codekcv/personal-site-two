import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../components/BobbleTitle'
import Card from '../../components/Card'
import { animDelay, triggerOnce } from '../../utils/constants'

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

  // TODO: Organize button.
  // Organize by -> App Size | Tech Category (framework, styling, state management, etc.)

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
          contentFull={
            <Box textAlign="center">
              <Box>
                <Heading as="h1">Current Favorite Stack:</Heading>

                <Text mt="1rem">
                  Next.js / Redux or Recoil / React Query or Apollo Client /
                  SCSS Modules or Chakra UI
                </Text>
              </Box>

              <Box mt="2rem" borderTop="1px solid gray" w="80%" mx="auto" />

              <Box mt="2rem">
                <Heading as="h1">Framework</Heading>

                <Text mt="0.5rem">React, Next.js, Gatsby</Text>
              </Box>

              <Box mt="2rem">
                <Heading as="h1">Styling</Heading>

                <Text mt="0.5rem">
                  SCSS Modules, styled-components / emotion, Chakra UI
                </Text>
              </Box>

              <Box mt="2rem">
                <Heading as="h1">Animation</Heading>

                <Text mt="0.5rem">
                  Framer Motion, Native CSS Transitions &amp; Animations
                </Text>
              </Box>

              <Box mt="2rem">
                <Heading as="h1">Client State Management</Heading>

                <Text mt="0.5rem">Redux, Recoil, Zustand</Text>
              </Box>

              <Box mt="2rem">
                <Heading as="h1">Network State Management</Heading>

                <Text mt="0.5rem">Apollo Client, React Query, SWR</Text>
              </Box>

              <Box mt="2rem" borderTop="1px solid gray" w="80%" mx="auto" />

              <Box mt="2rem">
                <Heading as="h1">Large Applications:</Heading>

                <Text mt="0.5rem">
                  Vanilla React / Next.js, Redux, Apollo Client, SCSS Modules /
                  Chakra UI / 3rd Party UI Library
                </Text>
              </Box>

              <Box mt="2rem">
                <Heading as="h1">Medium Applications:</Heading>

                <Text mt="0.5rem">
                  Vanilla React / Gatsby / Next.js, Recoil, React Query / SWR,
                  SCSS Modules / Chakra UI
                </Text>
              </Box>

              <Box mt="2rem">
                <Heading as="h1">Small Applications:</Heading>

                <Text mt="0.5rem">
                  Vanilla React / Gatsby / Next.js, Zustand, React Query / SWR,
                  SCSS Modules / Chakra UI / styled-components
                </Text>
              </Box>
            </Box>
          }
        />
      </Flex>
    </Box>
  )
}

export default Stack
