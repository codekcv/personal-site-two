import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../../components/BobbleTitle'
import { CardInView } from '../../../components/Card/Card.main'
import { animDelay, triggerOnce } from '../Home.util'
import { projects } from './Projects.util'

const Projects = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.7,
    delay: animDelay,
    triggerOnce
  })

  return (
    <Box ref={ref} mt="2rem" onClick={() => setIsOpen(!isOpen)}>
      <BobbleTitle inView={inView} isOpen={isOpen}>
        Project
      </BobbleTitle>

      <CardInView inView={inView} isOpen={isOpen} setIsOpen={setIsOpen}>
        {projects}
      </CardInView>
    </Box>
  )
}

export default Projects
