import * as React from "react"
import { Heading } from "@chakra-ui/react"
import SEO from "../components/SEO"

import Layout from "../components/layout/layout"

const NotFoundPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="About" />
      <Heading>This is 404 page</Heading>
    </Layout>
  )
}

export default NotFoundPage
