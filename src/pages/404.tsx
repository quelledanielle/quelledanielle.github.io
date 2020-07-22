import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import IndexLayout from '../layouts'

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <h1>Page not found</h1>
      <p>
        Doesn't look like anything to me. <Link to="/">Go home.</Link>
      </p>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
