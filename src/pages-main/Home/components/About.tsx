import { Box } from '@chakra-ui/layout'
import { Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../../components/BobbleTitle'
import Card from '../../../components/Card/Card.main'
import { animDelay, triggerOnce } from '../Home.util'

const facts = [
  'My name is Christian Villamin; I live in Manila, Philippines.',
  <>
    I&apos;m currently working at&nbsp;
    <a href="https://localhost/" target="_blank" rel="noopener noreferrer">
      ____________
    </a>
    &nbsp;as a software engineer.
  </>,
  <>
    I&apos;m a core member of&nbsp;
    <a href="https://reactjs.org.ph/" target="_blank" rel="noopener noreferrer">
      ReactJS Philippines.
    </a>
  </>,
  "I'm a self-taught programmer since age 10.",
  'I love learning, JavaScript, and open-source.',
  'I love mentoring aspiring web developers.'
].map((item, idx) => (
  <Box as="li" key={idx} ml="2rem">
    {item}
  </Box>
))

const About = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: animDelay,
    triggerOnce
  })

  return (
    <Box ref={ref} mt="2rem" onClick={() => setIsOpen(!isOpen)}>
      <BobbleTitle inView={inView} isOpen={isOpen}>
        About
      </BobbleTitle>

      <Card
        inView={inView}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mt="-1.5rem"
        contentPrev={
          <>
            <Box as="ul">{facts}</Box>

            <Text mt="1rem">
              Outside of the technology world in my free time, I play classical
              piano, read light fantasy novels, do some stretching and
              exercises, and take care of my lovely cats.
            </Text>
          </>
        }
        contentFull={
          <>
            <Heading as="h1">Hi, I&apos;m Christian Villamin!</Heading>

            <Text mt="1rem">
              i&apos;m a software engineer specializing on the web. i love
              refactoring and optimizing stuff. i also animate things. coding
              god. tinkerer. loves winning. i don&apos;t play games but i play
              sometimes. memes. piano. cats. coffee. immortality. no interest in
              politics and religion, i respect your view. nature is beautiful
              and it is life. detective conan fanboi. happy kid :&#41;
            </Text>
          </>
        }
      />
    </Box>
  )
}

export default About
