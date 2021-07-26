import { Box } from '@chakra-ui/react'
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
  }
].map((item) => <Box key={item.title}>{item.img}</Box>)

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

      <Card
        inView={inView}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mt="-1.5rem"
        contentPrev={projects}
        contentFull={null}
      />
    </Box>
  )
}

export default Projects
