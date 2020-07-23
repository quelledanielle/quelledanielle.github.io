import * as React from 'react'
import styled from '@emotion/styled'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Avatar: React.FC = () => (
  <StaticQuery
    query={graphql`
      query AvatarQuery {
        file(relativePath: { eq: "images/d.png" }) {
          childImageSharp {
            fixed(height: 150) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <StyledAvatar>
        <Img fixed={data.file.childImageSharp.fixed} alt="D smiling" />
      </StyledAvatar>
    )}
  />
)

export default Avatar
