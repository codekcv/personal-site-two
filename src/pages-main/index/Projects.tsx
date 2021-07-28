import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../components/BobbleTitle'
import Card from '../../components/Card'
import { animDelay, triggerOnce } from '../../utils/constants'

const projects = [
  {
    title: 'Headless Commerce',
    description:
      'An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL.',
    img: (
      <StaticImage
        src="../../images/headless_2.png"
        width={700}
        height={340}
        placeholder="blurred"
        alt="An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL."
      />
    )
  },
  {
    title: 'freeCodeCamp Projects',
    description: 'All my 30 freeCodeCamp projects.',
    img: (
      <StaticImage
        src="../../images/freecodecamp.png"
        width={700}
        height={340}
        placeholder="blurred"
        alt="An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL."
      />
    )
  }
].map((item) => <Box key={item.title}>{item.img}</Box>)

const Projects = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [x, y] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.7,
    delay: animDelay,
    triggerOnce
  })

  const { ref: refB, inView: inViewB } = useInView({
    threshold: 0.7,
    delay: animDelay,
    triggerOnce
  })

  return (
    <Box mt="2rem" onClick={() => setIsOpen(!isOpen)}>
      <BobbleTitle inView={inView} isOpen={isOpen}>
        Project
      </BobbleTitle>

      <Card
        inViewRef={ref}
        inView={inView}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mt="-1.5rem"
        contentPrev={<Flex justifyContent="center">{projects[0]}</Flex>}
        contentFull={
          <Box>
            <Heading as="h1">Headless Commerce Project</Heading>

            <Text mt="0.5rem">
              Source:&nbsp;
              <a
                href="https://github.com/codekcv/headless-commerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/codekcv/headless-commerce
              </a>
            </Text>
          </Box>
        }
      />

      <Card
        inViewRef={refB}
        inView={inViewB}
        isOpen={x}
        setIsOpen={y}
        mt="2rem"
        contentPrev={<Flex justifyContent="center">{projects[1]}</Flex>}
        contentFull={
          <Box>
            <Heading as="h1">freeCodeCamp Projects</Heading>

            <Text mt="0.5rem">These are my 30 freeCodeCamp projects.</Text>
          </Box>
        }
      />
    </Box>
  )
}

export default Projects
