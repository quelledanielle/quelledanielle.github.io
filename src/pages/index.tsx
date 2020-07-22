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
      <IndexLayout pageTitle="Hello, my name is D!">
        <Page>
          <h2>🗣 Pronouns</h2>
          <p>
            <Link to="/pronouns">they/them/their</Link>
          </p>
          <h2>🌎 Location</h2>
          <p>Ottawa, Canada 🇨🇦—unceded Anishinaabe territory</p>
          <ul>
            <li>Eastern Standard Time: UTC-5 (November to March)</li>
            <li>Eastern Daylight Time: UTC-4 (March to November)</li>
          </ul>
          <h2>💖 Interests</h2>
          <ul>
            <li>Equity for underrepresented minorities in tech 🧑🏻‍💻🧑🏼‍💻🧑🏽‍💻🧑🏾‍💻🧑🏿‍💻</li>
            <li>Product development with positive impact 🛠💞</li>
            <li>Learning and personal development 📚🌱</li>
            <li>Food and food culture 🍌🌽🧄🥯🧆🌮🥟</li>
            <li>Snail mail and stationery 🐌💌🖋</li>
          </ul>
        </Page>
      </IndexLayout>
    )}
  />
)

export default IndexPage
