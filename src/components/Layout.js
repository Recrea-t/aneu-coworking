import "@fontsource/montserrat/300.css" // Light
import "@fontsource/montserrat/500.css" // Medium

import React from "react"
import useSiteMetadata from "./siteMetadata"
import { useLocale } from "../hooks/locale"

import { Flex } from "@chakra-ui/react"

import Header from "./sections/Header"
import Footer from "./sections/Footer"
import Scroll from "./ui/Scroll"

const TemplateWrapper = ({ children, pageContext: { locale } }) => {
  const { defaultTitle } = useSiteMetadata()
  const { changeLocale } = useLocale()
  changeLocale(locale)

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      overflow="hidden"
      minH="100vh"
      pos="relative"
    >
      <Header />
      <Flex as="main" pos="relative" w="full" direction="column">
        {children}
      </Flex>
      <Scroll showBelow={250} />
      <Footer title={defaultTitle} />
    </Flex>
  )
}

export default TemplateWrapper
