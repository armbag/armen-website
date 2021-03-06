import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Text,
  Flex,
  Box,
  VStack,
  IconButton,
  LinkBox,
  useColorMode,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import React, { useRef, ReactElement } from "react"
import { links } from "./navBar"
import { graphql, useStaticQuery } from "gatsby"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

type PropsInterface = {
  bg: string
}

const MobileNavBar: React.FC<PropsInterface> = (props): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const openMenuRef = useRef(null)
  const closeMenuRef = useRef(null)
  const { t } = useTranslation()

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = site.siteMetadata

  return (
    <Box data-testid="MobileManagementNav">
      <Flex
        justifyContent="space-between"
        padding={{ base: 4, md: 8 }}
        alignItems="center"
        boxShadow="md"
        {...props}
      >
        <Text
          as={Link}
          to="/"
          fontSize={{ sm: 18, md: 28, lg: 36 }}
          color="gray.600"
          fontWeight="700"
        >
          {title}
        </Text>

        <Flex direction="row">
          <IconButton
            icon={<HamburgerIcon />}
            ref={openMenuRef}
            aria-label="Open Sidebar Menu"
            onClick={onOpen}
            bg="none"
            _focus={{
              borderColor: "unset",
            }}
          />
        </Flex>
      </Flex>

      <Box position="relative">
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={openMenuRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <IconButton
                icon={<CloseIcon />}
                ref={closeMenuRef}
                aria-label="Close Sidebar Menu"
                onClick={onClose}
                alignSelf="flex-end"
                mt={5}
                mr={5}
                mb={12}
                bg="none"
                _focus={{
                  borderColor: "unset",
                }}
              />

              <DrawerBody p={0}>
                <VStack spacing={0}>
                  {colorMode === "light" ? (
                    <MoonIcon onClick={toggleColorMode} />
                  ) : (
                    <SunIcon onClick={toggleColorMode} />
                  )}
                  {links.map((link, index) => (
                    <LinkBox
                      as={Link}
                      key={index}
                      to={link.to}
                      padding={5}
                      fontSize={16}
                      width="50%"
                      color="gray.600"
                      fontWeight="700"
                      activeStyle={{
                        color: "black",
                        borderBottom: "5px solid gold",
                      }}
                    >
                      {t(link.text)}
                    </LinkBox>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Box>
  )
}
export default MobileNavBar
