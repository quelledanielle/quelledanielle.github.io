import * as React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import Page from '../components/Page'
import IndexLayout from '../layouts'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      author: {
        name: string
      }
    }
  }
}

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            author {
              name
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <IndexLayout>
        <Page>
          <h1>Hello</h1>
          <p>Something about {data.site.siteMetadata.author.name}</p>
          <Link to="/page-2/">Go to page 2</Link>
        </Page>
      </IndexLayout>
    )}
  />
)

export default IndexPage
