import { Box } from '@chakra-ui/layout'
import { Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../components/BobbleTitle'
import Card from '../../components/Card'
import { animDelay, triggerOnce } from '../../utils/constants'

const facts = [
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
            <Heading as="h1">Hello, I&apos;m Christian Villamin!</Heading>

            <Text mt="1rem">
              {`{...}`}
              {/* i&apos;m a software engineer specializing on the web. i love
              refactoring and optimizing stuff. i also animate things. coding
              god. tinkerer. loves winning. i don&apos;t play games but i play
              sometimes. memes. piano. cats. coffee. immortality. no interest in
              politics and religion, i respect your view. nature is beautiful
              and it is life. detective conan fanboi. happy kid :&#41; */}
            </Text>

            <Box mt="2rem">
              <Heading as="h2">Programming History</Heading>

              <Text mt="1rem">
                <a
                  href="https://www.thehelper.net/members/nherwyziant.2291/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I started programming in 2007 when I was 11
                </a>
                , using Blizzard&apos;s event-driven scripting language
                called&nbsp;
                <a
                  href="https://www.hiveworkshop.com/threads/beginning-jass-tutorial-series.30765/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JASS
                </a>
                &nbsp;to make modifications and create custom maps in Warcraft
                III. I learned it by reading guides &amp; documentations online,
                and since then have enjoyed the art of programming to heart. I
                made tower defense games, battle arenas, hero campaign maps,
                etc. with it and played it with my local and online friends.
              </Text>

              <Text mt="1rem">
                After that, I learned to program Java in 2012 to build basic
                desktop app. In 2013, I joined a programming competition that
                deals with solving algorithms and&nbsp;
                <a
                  href="https://codekcv.github.io/competition.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I won
                </a>
                . In 2014, I decided to make a mobile game using the Android
                Studio IDE and an awesome library called&nbsp;
                <a
                  href="https://libgdx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  libGDX
                </a>
                . I made a 2D platform pixel-art running game. In 2016, I
                decided to learn C# &amp; the basics of Blender, and moved to
                Unity3D to make 1st person games, although nothing serious, just
                for fun and messing around with my friends. I did learn maths in
                3D, so that&apos;s nice.
              </Text>

              <Text mt="1rem">
                And now starting year, 2019, I&apos;m diving deep in the
                beautiful world of web development and beyond.
              </Text>
            </Box>

            <Box mt="2rem">
              <Heading as="h2">Programming History</Heading>

              <Text mt="1rem">
                <a
                  href="https://www.thehelper.net/members/nherwyziant.2291/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I started programming in 2007 when I was 11
                </a>
                , using Blizzard&apos;s event-driven scripting language
                called&nbsp;
                <a
                  href="https://www.hiveworkshop.com/threads/beginning-jass-tutorial-series.30765/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JASS
                </a>
                &nbsp;to make modifications and create custom maps in Warcraft
                III. I learned it by reading guides &amp; documentations online,
                and since then have enjoyed the art of programming to heart. I
                made tower defense games, battle arenas, hero campaign maps,
                etc. with it and played it with my local and online friends.
              </Text>

              <Text mt="1rem">
                After that, I learned to program Java in 2012 to build basic
                desktop app. In 2013, I joined a programming competition that
                deals with solving algorithms and&nbsp;
                <a
                  href="https://codekcv.github.io/competition.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I won
                </a>
                . In 2014, I decided to make a mobile game using the Android
                Studio IDE and an awesome library called&nbsp;
                <a
                  href="https://libgdx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  libGDX
                </a>
                . I made a 2D platform pixel-art running game. In 2016, I
                decided to learn C# &amp; the basics of Blender, and moved to
                Unity3D to make 1st person games, although nothing serious, just
                for fun and messing around with my friends. I did learn maths in
                3D, so that&apos;s nice.
              </Text>

              <Text mt="1rem">
                And now starting year, 2019, I&apos;m diving deep in the
                beautiful world of web development and beyond.
              </Text>
            </Box>

            <Box mt="2rem">
              <Heading as="h2">Interests</Heading>

              <Text mt="1rem">
                Animals, Detective Conan, Doctor Who, Kingdom Hearts
              </Text>
            </Box>
          </>
        }
      />
    </Box>
  )
}

export default About
