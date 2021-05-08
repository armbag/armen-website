import * as React from "react"
import { Helmet } from "react-helmet"

// import iconLight from "../images/logo-light.svg"
import iconDark from "../images/logo-dark.svg"

const JsonLd = ({ children }): JSX.Element => {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(children)}</script>
    </Helmet>
  )
}

const Head = (): JSX.Element => {
  return (
    <Helmet title="Armen">
      <link rel="icon" href={iconDark} />
      <meta name="keywords" content="Armen Bagramian"></meta>
      <meta
        name="description"
        content="I'm Armen, a web developer interested by new technologies, woodworking, food and arranged rums"
      />
      <meta
        property="og:description"
        content="Hey, I'm Armen, a web developer interested by new technologies, woodworking, food and arranged rums"
      />
      <meta property="og:title" content="Web Developer | Armen Bagramian" />
      <meta property="og:url" content="https://armenbagramian.com/" />
      <meta name="author" content="Armen Bagramian" />
      <meta name="copyright" content="Armen Bagramian" />
      <JsonLd>
        {{
          "@context": "https://schema.org",
          "@type": "Organization",
          url: "http://armenbagramian.com",
          name: "Armen Portfolio",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer service",
          },
        }}
      </JsonLd>
    </Helmet>
  )
}

export default Head
