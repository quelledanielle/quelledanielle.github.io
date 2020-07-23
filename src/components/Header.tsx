import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors, dimensions, fonts, heights } from '../styles/variables'

import Avatar from './Avatar'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledHeader = styled.header`
  width: 100%;
  height: ${heights.header}px;
  margin-top: ${dimensions.containerMargin / 2}rem;
  padding: 0 ${dimensions.containerPadding}rem;
  color: ${colors.white};
  background-color: ${colors.teal};
  border-radius: ${dimensions.borderRadius}px ${dimensions.borderRadius}px 0 0;
`

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${colors.gray.light};
  font-size: 2rem;
  font-family: ${fonts.monospace};
  font-weight: 600;
  font-style: italic;
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <HeaderContainer>
    <Link to="/">
      <Avatar />
    </Link>
    <StyledHeader>
      <HeaderInner>{title}</HeaderInner>
    </StyledHeader>
  </HeaderContainer>
)

export default Header
