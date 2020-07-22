import * as React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import Page from '../components/Page'
import IndexLayout from '../layouts'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      author: {
        email: string
        social: {
          instagram: string
          github: string
          twitter: string
        }
      }
    }
  }
}

const PageTwo = () => (
  <StaticQuery
    query={graphql`
      query PageTwoQuery {
        site {
          siteMetadata {
            author {
              email
              social {
                instagram
                github
                twitter
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <IndexLayout pageTitle="Page 2">
        <Page>
          <p>Something something</p>
          <ul>
            <li>
              <a href={`mailto:${data.site.siteMetadata.author.email}`}>Email</a>
            </li>
            <li>
              <a href={data.site.siteMetadata.author.social.github}>GitHub</a>
            </li>
            <li>
              <a href={data.site.siteMetadata.author.social.twitter}>Twitter</a>
            </li>
            <li>
              <a href={data.site.siteMetadata.author.social.instagram}>Instagram</a>
            </li>
          </ul>
          <hr />
          <Link to="/a-markdown-page/">Show me some Markdown!</Link>
        </Page>
      </IndexLayout>
    )}
  />
)

export default PageTwo
