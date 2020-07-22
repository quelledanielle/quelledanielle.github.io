import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface PageProps {
  pageTitle: string
}

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const IndexLayout: React.FC<PageProps> = ({ children, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet title={data.site.siteMetadata.title} meta={[{ name: 'description', content: data.site.siteMetadata.description }]} />
        <LayoutMain>
          <Header title={pageTitle} />
          {children}
        </LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
