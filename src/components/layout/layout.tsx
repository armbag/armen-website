import * as React from "react"
import { Box, Button, Flex, useMediaQuery } from "@chakra-ui/react"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"

import SEO from "../SEO"
import NavBar from "./navBar"
import MobileNavBar from "./mobileNavBar"
import Footer from "./footer"

const Layout = ({
  children,
  title,
}: {
  title?: string
  children: any
}): JSX.Element => {
  const { language, changeLanguage } = useI18next()
  const { t } = useTranslation()
  const [isLargerThan1340] = useMediaQuery("(min-width: 1340px)")

  function toggleLanguage() {
    if (language === "en") {
      changeLanguage("fr")
      return
    }
    changeLanguage("en")
  }

  return (
    <Flex mx="auto" direction="column">
      <Button onClick={toggleLanguage}>{t("button.changeLang")}</Button>
      <Box>
        <SEO title={title} />
        {isLargerThan1340 ? (
          <NavBar bg="teal.300" />
        ) : (
          <MobileNavBar bg="teal.300" />
        )}
        <Flex
          direction="column"
          alignItems="center"
          minH={{ base: "83vh", md: "81vh" }}
        >
          {children}
        </Flex>
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
