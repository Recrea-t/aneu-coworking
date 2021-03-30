import React from "react"
import {
  Flex,
  HStack,
  Text,
  StackDivider,
  useBreakpointValue,
} from "@chakra-ui/react"

import SocialLink from "../ui/SocialLink"

import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare"

import LocalizedLink from "../ui/LocalizedLink"
import useTranslations from "../useTranslations"

import useSiteMetadata from "../siteMetadata"

const Footer = props => {
  const { followUs, legalNote, privacyPolicy } = useTranslations()
  const { social } = useSiteMetadata()
  const isSmallDevice = useBreakpointValue({ base: true, md: false })

  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      w="full"
      pt={4}
      pb={2}
      bg="nightRider.500"
      color="white"
      direction="column"
      {...props}
    >
      <Text display={["block", null, "none"]} mb={4} textTransform="uppercase">
        {followUs}:
      </Text>

      <HStack spacing={4} mb={[8, null, 4]}>
        <Text display={["none", null, "block"]} textTransform="uppercase">
          {followUs}:
        </Text>
        <SocialLink key={1} item={social.instagram} icon={FaInstagramSquare} />
        <SocialLink key={2} item={social.facebook} icon={FaFacebookSquare} />
      </HStack>

      <Text display={["block", null, "none"]}>
        &copy; {new Date().getFullYear()} {props.title}
      </Text>

      <HStack spacing={2} divider={<StackDivider />}>
        {!isSmallDevice && (
          <Text>
            &copy; {new Date().getFullYear()} {props.title}
          </Text>
        )}

        <LocalizedLink color="white" to="/avis-legal">
          {legalNote}
        </LocalizedLink>
        <LocalizedLink color="white" to="/proteccio-de-dades">
          {privacyPolicy}
        </LocalizedLink>
      </HStack>
    </Flex>
  )
}

export default Footer
