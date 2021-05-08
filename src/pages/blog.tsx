import * as React from "react"
import SEO from "../components/SEO"
import Layout from "../components/layout/layout"
import { Heading } from "@chakra-ui/react"

const BlogPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading>Blog</Heading>
    </Layout>
  )
}

export default BlogPage
