import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import { Helmet } from "react-helmet"

const Head = ({ page }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const title = page
    ? `${page} | ${site.siteMetadata.author}`
    : site.siteMetadata.title

  return <Helmet title={title} />
}

export default Head
