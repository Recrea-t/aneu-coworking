import React from "react"
import { Flex, HStack, Text, StackDivider } from "@chakra-ui/react"

import SocialLink from "../ui/SocialLink"

import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare"

import LocalizedLink from "../ui/LocalizedLink"
import useTranslations from "../useTranslations"

import useSiteMetadata from "../siteMetadata"

const Footer = props => {
  const { followUs, legalNote, privacyPolicy } = useTranslations()
  const { social } = useSiteMetadata()

  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      w="full"
      p={4}
      bg="dimGray.500"
      color="white"
      direction="column"
      {...props}
    >
      <HStack spacing={4} mb={4}>
        <Text textTransform="uppercase">{followUs}:</Text>
        <SocialLink key={1} item={social.instagram} icon={FaInstagramSquare} />
        <SocialLink key={2} item={social.facebook} icon={FaFacebookSquare} />
      </HStack>

      <HStack spacing={2} divider={<StackDivider />} fontSize="xs">
        <Text>
          &copy; {new Date().getFullYear()} {props.title}
        </Text>
        <LocalizedLink to="/avis-legal">{legalNote}</LocalizedLink>
        <LocalizedLink to="/proteccio-de-dades">{privacyPolicy}</LocalizedLink>
      </HStack>
    </Flex>
  )
}

export default Footer
