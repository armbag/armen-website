import * as React from "react"
import { ReactElement } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type MetaType = {
  name: string
  content: string
  property?: undefined
}

type PropsInterface = {
  title?: string
  description?: string
  logo?: string
  meta?: MetaType[]
}

const SEO = ({
  title,
  description,
  logo,
  meta = [],
}: PropsInterface): ReactElement => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          logo
          description
          author
        }
      }
    }
  `)

  const fromQuery = site.siteMetadata
  const metaDescription = description || fromQuery.description

  return (
    <Helmet
      titleTemplate={title ? `%s | ${fromQuery.title}` : `${fromQuery.title}`}
      htmlAttributes={{
        lang: "en",
      }}
      meta={[
        {
          name: "keywords",
          content: "Armen Bagramian Web Developer",
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "author",
          content: fromQuery.author,
        },
        {
          name: "copyright",
          content: fromQuery.author,
        },
        {
          property: "og:title",
          content: "Armen Bagramian | Web Developer",
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:url",
          content: fromQuery.siteUrl,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: fromQuery.author,
        },
        {
          name: "twitter:title",
          content: "Armen Bagramian | Web Developer",
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <title>{title ? title : fromQuery.title}</title>
      <link rel="icon" href={logo} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          url: "http://armenbagramian.com",
          name: "Armen Portfolio",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Armen's agent (myself)",
          },
        })}
      </script>
    </Helmet>
  )
}

export default SEO
