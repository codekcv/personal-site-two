import { Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'

import Bobble from '../../../components/Bobble'
import { MotionBox, MotionFlex } from '../../../components/Motion/Motion.main'
import { animDuration } from '../Home.util'
import { contacts } from './Hero.util'

const Hero = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolled && window.scrollY === 0) setIsScrolled(false)
      else if (!isScrolled && window.scrollY !== 0) setIsScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  return (
    <Flex flexDirection="column" alignItems="center">
      <MotionFlex
        as={motion.div}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 85px - 48px - 2rem)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: animDuration }}
      >
        <Flex flexDirection="column" alignItems="center">
          <StaticImage
            src="../../../images/christian_villamin.jpg"
            width={256}
            height={256}
            placeholder="blurred"
            alt="Christian Villamin's photo."
            style={{
              borderRadius: '50%',
              boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.05)'
            }}
          />

          <Bobble>
            <Heading
              as="h1"
              fontSize={64}
              textShadow="0 0.35rem 0px rgba(0,0,0,0.1)"
            >
              Christian Villamin
            </Heading>
          </Bobble>

          <Text as="p" fontSize={24}>
            I&apos;m a software engineer specializing on web technologies.
          </Text>

          <Flex as="ul">{contacts}</Flex>
        </Flex>
      </MotionFlex>

      <InView>
        {({ inView, ref }) => (
          <MotionBox
            variants={{
              out: { opacity: 0.15 },
              in: { opacity: 1 }
            }}
            initial="out"
            animate={inView && !isScrolled ? 'in' : 'out'}
            transition={{ duration: animDuration }}
            height="48px"
          >
            <MotionBox
              as={motion.div}
              height={48}
              ref={ref}
              animate={{
                transform: [
                  'translateY(-1rem)',
                  'translateY(0rem)',
                  'translateY(-1rem)'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
            >
              <FaAngleDoubleDown size={48} />
            </MotionBox>
          </MotionBox>
        )}
      </InView>
    </Flex>
  )
}

export default Hero
