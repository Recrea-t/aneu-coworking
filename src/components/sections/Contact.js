import React from "react"

import useTranslations from "../useTranslations"
import useSiteMetadata from "../siteMetadata"

import { Flex, Text, Link, VStack, Icon } from "@chakra-ui/react"

import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaPhone } from "@react-icons/all-files/fa/FaPhone"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

import ContactForm from "../ui/ContactForm"

const Contact = props => {
  const { organization } = useSiteMetadata()
  const { callUs, writeUs } = useTranslations()

  return (
    <Flex
      align="center"
      justify={["center", "space-between", "flex-end"]}
      direction={["column", null, "row"]}
      alignItems={["center", null, "start"]}
      mt={4}
    >
      <VStack
        justify="center"
        textAlign="center"
        mr={[0, null, 8]}
        mb={[8, null, 0]}
      >
        <ReactMarkdown
          renderers={ChakraUIRenderer()}
          source={props.description}
          linkTarget="_blank"
          mb={8}
          textAlign="left"
        />

        <Text
          mb={4}
          dangerouslySetInnerHTML={{ __html: organization.address }}
        />
        <Icon as={FaPhone} h={4} w={4} />
        <Link mb={4} href={`tel:${organization.phone.number}`} title={callUs}>
          {organization.phone.title}
        </Link>

        <Icon as={FaEnvelope} h={4} w={4} />
        <Link mb={4} href={`mailto:${organization.email}`} title={writeUs}>
          {organization.email}
        </Link>
      </VStack>

      <ContactForm />
    </Flex>
  )
}

export default Contact
