import * as React from "react"
import { Heading } from "@chakra-ui/react"

import Layout from "../components/layout/layout"

const AboutPage = (): JSX.Element => {
  return (
    <Layout page="About">
      <Heading>This is the about page</Heading>
    </Layout>
  )
}

export default AboutPage
