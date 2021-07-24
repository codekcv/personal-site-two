import styled from '@emotion/styled'

import { MotionBox } from '../Motion/Motion.main'

const Card = styled(MotionBox)`
  background-color: white;
  padding: 2rem;
  cursor: pointer;
  border: 1px dotted rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  box-shadow: 0 0.75rem 3rem 0em rgba(0, 0, 0, 0.05),
    0 0.75rem 0rem 0rem rgba(0, 0, 0, 0.05);
`

export default Card
