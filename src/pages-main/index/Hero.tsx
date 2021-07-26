import { Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineCodepen,
  AiOutlineGithub,
  AiOutlineTwitter
} from 'react-icons/ai'
import { FaAngleDoubleDown, FaDev, FaFreeCodeCamp } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { InView } from 'react-intersection-observer'

import Bobble from '../../components/Bobble'
import { MotionBox, MotionFlex } from '../../components/Motion'
import { animDuration } from '../../utils/constants'

const contacts = [
  {
    name: 'GitHub',
    icon: <AiOutlineGithub size={48} />,
    link: 'http://github.com/codekcv'
  },
  {
    name: 'Twitter',
    icon: <AiOutlineTwitter size={48} />,
    link: 'https://twitter.com/codekcv'
  },
  {
    name: 'DEV',
    icon: <FaDev size={48} />,
    link: 'https://dev.to/codekcv'
  },
  {
    name: 'CodePen',
    icon: <AiOutlineCodepen size={48} />,
    link: 'https://codepen.io/codekcv'
  },
  {
    name: 'freeCodeCamp',
    icon: <FaFreeCodeCamp size={48} />,
    link: 'https://www.freecodecamp.org/codekcv'
  },
  {
    name: 'YouTube',
    icon: <AiFillYoutube size={48} />,
    link: 'https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg'
  },
  {
    name: 'LinkedIn',
    icon: <AiFillLinkedin size={48} />,
    link: 'https://www.linkedin.com/in/codekcv/'
  },
  {
    name: 'Email',
    icon: <IoIosMail size={48} />,
    link: 'mailto:ChristianVillamin31@gmail.com'
  }
].map((item) => (
  <MotionBox
    as={motion.div}
    key={item.name}
    mx="1rem"
    mt="1.5rem"
    whileHover={{ scale: 1.2 }}
  >
    {/* <Bobble> */}
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      {item.icon}
    </a>
    {/* </Bobble> */}
  </MotionBox>
))

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
              boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.05)',
              pointerEvents: 'none'
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
