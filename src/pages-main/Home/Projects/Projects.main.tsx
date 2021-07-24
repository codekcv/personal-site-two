import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import Bobble from '../../../components/Bobble'
import { MotionHeading } from '../../../components/Motion/Motion.main'
import { animDelay, animDuration, triggerOnce } from '../Home.util'
import { projects } from './Projects.util'

const Projects = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    delay: animDelay,
    triggerOnce
  })

  return (
    <Box mt="2rem">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Bobble>
          <MotionHeading
            as="h1"
            fontSize="4rem"
            textAlign="center"
            textShadow="0 0.35rem 0px rgba(0,0,0,0.1)"
            ref={ref}
            variants={{
              out: {
                opacity: 0,
                transform: 'scale(1.4)  translateY(6rem)'
              },
              in: { opacity: 1, transform: 'scale(1)  translateY(0rem)' }
            }}
            initial="out"
            animate={inView ? 'in' : 'out'}
            transition={{ duration: animDuration, ease: 'easeOut' }}
          >
            Projects
          </MotionHeading>
        </Bobble>
      </div>

      <div style={{ position: 'relative', zIndex: 0, marginTop: '-1.5rem' }}>
        <motion.ul
          ref={ref}
          variants={{
            out: { opacity: 0, transform: 'translateY(-4rem)' },
            in: { opacity: 1, transform: 'translateY(0rem)' }
          }}
          initial="out"
          animate={inView ? 'in' : 'out'}
          transition={{ duration: animDuration, ease: 'easeOut' }}
        >
          {projects}
        </motion.ul>
      </div>
    </Box>
  )
}

export default Projects
