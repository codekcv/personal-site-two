import { Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Bobble from '../../../components/Bobble'
import Card from '../../../components/Card'
import {
  MotionBox,
  MotionHeading
} from '../../../components/Motion/Motion.main'
import { animDelay, animDuration, triggerOnce } from '../Home.util'
import { facts } from './About.util'

const About = (): JSX.Element => {
  const posRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const [titleY, setTitleY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: animDelay,
    triggerOnce
  })

  useEffect(() => {
    if (cardRef?.current) {
      setHeight(cardRef.current.getBoundingClientRect().height)
    }
  }, [])

  useEffect(() => {
    if (isOpen && window) {
      document.body.style.height = '100%'
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.height = 'initial'
      document.body.style.overflowY = 'initial'
    }
  }, [isOpen])

  const handleOpen = () => {
    if (!isOpen) {
      const titlePosY = titleRef?.current?.getBoundingClientRect().y ?? 0
      setTitleY(titlePosY - (window.innerHeight / 2 - 60))
    }

    setIsOpen(!isOpen)
  }

  const posY = (posRef?.current?.getBoundingClientRect().y ?? 0) + 32
  const transform = `translate(-128px, calc(${posY * -1}px))`

  return (
    <Box mt="2rem" ref={ref}>
      <div ref={posRef}>
        <div style={{ position: 'relative', zIndex: isOpen ? 101 : 1 }}>
          <Bobble>
            <motion.div
              variants={{
                close: {},
                open: {
                  transform: `translate(-560px, ${
                    titleY * -1
                  }px) rotate(-90deg)`
                }
              }}
              transition={{ duration: 0.4 }}
              animate={isOpen ? 'open' : 'close'}
            >
              <MotionHeading
                as="h1"
                fontSize="4rem"
                textAlign="center"
                textShadow="0 0.35rem 0px rgba(0,0,0,0.1)"
                variants={{
                  out: {
                    opacity: 0,
                    transform: 'scale(1.5) translateY(6rem)'
                  },
                  in: { opacity: 1, transform: 'scale(1) translateY(0rem)' }
                }}
                initial="out"
                animate={inView ? 'in' : 'out'}
                transition={{ duration: animDuration, ease: 'easeOut' }}
                ref={titleRef}
              >
                About
              </MotionHeading>
            </motion.div>
          </Bobble>
        </div>

        <Box position="relative" mt="-1.5rem" zIndex={isOpen ? 100 : 0}>
          <motion.div
            variants={{
              out: {
                opacity: 0,
                transform: 'translateY(-3rem)',
                transition: { duration: animDuration, ease: 'easeOut' }
              },
              in: {
                opacity: 1,
                transform: 'translateY(0rem)',
                transition: { duration: animDuration, ease: 'easeOut' }
              }
            }}
            initial="out"
            animate={inView ? 'in' : 'out'}
          >
            <MotionBox
              height={height}
              whileHover={{
                transform: `translateY(${isOpen ? '0' : '-0.5'}rem)`
              }}
            >
              <Card
                width="100%"
                variants={{
                  close: {},
                  open: {
                    transform,
                    width: 1024,
                    height: '100vh'
                  }
                }}
                animate={isOpen ? 'open' : 'close'}
                onClick={handleOpen}
                ref={cardRef}
              >
                <Box as="ul">{facts}</Box>

                <Text mt="2rem">
                  Outside of the technology world in my free time, I play
                  classical piano, read light fantasy novels, do some stretching
                  and exercises, and take care of my lovely cats.
                </Text>
              </Card>
            </MotionBox>
          </motion.div>
        </Box>
      </div>
    </Box>
  )
}

export default About
