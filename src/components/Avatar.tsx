import * as React from 'react'
import styled from '@emotion/styled'

import { heights } from '../styles/variables'

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${heights.avatar}px;
  height: ${heights.avatar}px;
`

const Avatar: React.FC = () => (
  <StyledAvatar>
    <img src="/images/d.png" alt="Photo of D smiling" />
  </StyledAvatar>
)

export default Avatar
