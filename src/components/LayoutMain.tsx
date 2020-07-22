import * as React from 'react'
import styled from '@emotion/styled'

import { breakpoints, dimensions, widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledLayoutMain = styled.main`
  position: relative;
  width: auto;
  min-width: ${getEmSize(widths.md)}em;
  max-width: ${getEmSize(widths.md)}em;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    width: 100%;
    min-width: 0;
  }

  @media (min-width: ${getEmSize(breakpoints.md)}em) {
    margin-top: ${dimensions.containerMargin}rem;
    margin-bottom: ${dimensions.containerMargin}rem;
  }
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
