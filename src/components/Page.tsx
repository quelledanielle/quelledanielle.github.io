import * as React from 'react'
import styled from '@emotion/styled'

import { colors, dimensions, heights } from '../styles/variables'

const StyledPage = styled.div`
  display: block;
  flex-basis: ${heights.header * 3}px;
  position: relative;
  padding: ${dimensions.containerPadding / 2}rem ${dimensions.containerPadding}rem;
  color: ${colors.gray.dark};
  background-color: ${colors.gray.light};
  border: 0.4rem solid ${colors.teal};
  border-top: none;
  border-radius: 0 0 ${dimensions.borderRadius}px ${dimensions.borderRadius}px;
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
