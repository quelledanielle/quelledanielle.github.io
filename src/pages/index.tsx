import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout pageTitle="Hello, my name is D!">
    <Page>
      <h2>
        <span role="img" aria-label="speaking silhouette head">
          🗣
        </span>{' '}
        Pronouns
      </h2>
      <p>
        <Link to="/pronouns">they/them/their</Link>
      </p>
      <h2>
        <span role="img" aria-label="globe showing Americas">
          🌎
        </span>{' '}
        Location
      </h2>
      <p>
        Ottawa, Canada{' '}
        <span role="img" aria-label="flag of Canada">
          🇨🇦
        </span>
        —unceded Anishinaabe territory
      </p>
      <ul>
        <li>Eastern Standard Time: UTC-5 (November to March)</li>
        <li>Eastern Daylight Time: UTC-4 (March to November)</li>
      </ul>
      <h2>
        <span role="img" aria-label="sparkling heart">
          💖
        </span>{' '}
        Interests
      </h2>
      <ul>
        <li>
          Equity for underrepresented minorities in tech{' '}
          <span role="img" aria-label="technologists with varied skin tones">
            🧑🏻‍💻🧑🏼‍💻🧑🏽‍💻🧑🏾‍💻🧑🏿‍💻
          </span>
        </li>
        <li>
          Product development with positive impact{' '}
          <span role="img" aria-label="hammer and wrench">
            🛠
          </span>
          <span role="img" aria-label="revolving hearts">
            💞
          </span>
        </li>
        <li>
          Learning and personal development{' '}
          <span role="img" aria-label="books">
            📚
          </span>
          <span role="img" aria-label="seedling">
            🌱
          </span>
        </li>
        <li>
          Food and food culture{' '}
          <span role="img" aria-label="banana">
            🍌
          </span>
          <span role="img" aria-label="ear of corn">
            🌽
          </span>
          <span role="img" aria-label="garlic">
            🧄
          </span>
          <span role="img" aria-label="bagel">
            🥯
          </span>
          <span role="img" aria-label="falafel">
            🧆
          </span>
          <span role="img" aria-label="taco">
            🌮
          </span>
          <span role="img" aria-label="dumpling">
            🥟
          </span>
        </li>
        <li>
          Snail mail and stationery{' '}
          <span role="img" aria-label="snail">
            🐌
          </span>
          <span role="img" aria-label="love letter">
            💌
          </span>
          <span role="img" aria-label="fountain pen">
            🖋
          </span>
        </li>
      </ul>
    </Page>
  </IndexLayout>
)

export default IndexPage
