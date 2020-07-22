import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import IndexLayout from '../layouts'

const NotFoundPage = () => (
  <IndexLayout pageTitle="Not found">
    <Page>
      <p>
        Doesn't look like anything to me. <Link to="/">Go home.</Link>
      </p>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
