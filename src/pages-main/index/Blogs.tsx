import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../components/BobbleTitle'
import Card from '../../components/Card'
import { animDelay, triggerOnce } from '../../utils/constants'

const Blogs = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.7,
    delay: animDelay,
    triggerOnce
  })

  return (
    <Box ref={ref} mt="2rem" onClick={() => setIsOpen(!isOpen)}>
      <BobbleTitle inView={inView} isOpen={isOpen}>
        Blogs
      </BobbleTitle>

      <Card
        inView={inView}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mt="-1.5rem"
        contentPrev={
          <Flex height="240px" justifyContent="center" alignItems="center">
            <Text fontSize="2.5rem">Coming Soon!</Text>
          </Flex>
        }
        contentFull={
          <Box>
            <Text>/blogs</Text>
          </Box>
        }
      />
    </Box>
  )
}

export default Blogs
