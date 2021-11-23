import React, { useEffect } from "react"
import {
  Box,
  Heading,
  Text,
  useBreakpointValue,
  HStack,
  VStack,
  Link,
  Image,
  Icon,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MotionHStack, motionRevealConfig } from "../../theme/utils"

import useTranslations from "../useTranslations"

import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt"
import { FaEnvelopeSquare } from "@react-icons/all-files/fa/FaEnvelopeSquare"
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare"

const CoworkerCard = props => {
  const {
    title,
    image,
    description,
    url,
    phone,
    email,
    instagram,
    facebook,
    linkedin,
    twitter,
  } = props

  const { phoneLink } = useTranslations()

  const isSmallDevice = useBreakpointValue({ base: true, md: false })
  const index = isSmallDevice ? 0 : props.index

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <MotionHStack
      ref={ref}
      h="full"
      w="full"
      minW="310px"
      p={2}
      spacing={2}
      border="2px"
      borderColor="amulet.500"
      {...motionRevealConfig(controls, "bottom", index)}
    >
      <Image
        h="full"
        cursor="nwse-resize"
        clipPath="polygon(50% 0, 100% 0, 100% 50%, 50% 100%, 0 100%, 0 50%)"
        as={GatsbyImage}
        image={getImage(image)}
        alt={title}
      />

      <VStack
        h="full"
        spacing={2}
        align="start"
        justify="space-between"
        fontSize="sm"
      >
        <Box>
          <Heading as="h3" fontSize="sm">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Box>

        {url && (
          <Link
            href={`https://${url}`}
            title={title}
            isExternal
            fontWeight="medium"
          >
            {url}
          </Link>
        )}

        <HStack spacing={1}>
          {phone && (
            <Link href={`tel:${phone}`} title={phoneLink} isExternal>
              <Icon as={FaPhoneSquareAlt} h={5} w={5} />
            </Link>
          )}

          {email && (
            <Link href={`mailto:${email}`} title="Email" isExternal>
              <Icon as={FaEnvelopeSquare} h={5} w={5} />
            </Link>
          )}

          {instagram && (
            <Link
              href={`https://instagram.com/${instagram}`}
              title="Instagram"
              isExternal
            >
              <Icon as={FaInstagramSquare} h={5} w={5} />
            </Link>
          )}

          {facebook && (
            <Link
              href={`https://facebook.com/${facebook}`}
              title="Facebook"
              isExternal
            >
              <Icon as={FaFacebookSquare} h={5} w={5} />
            </Link>
          )}

          {linkedin && (
            <Link
              href={`https://linkedin.com/in/${linkedin}`}
              title="LinkedIn"
              isExternal
            >
              <Icon as={FaLinkedin} h={5} w={5} />
            </Link>
          )}

          {twitter && (
            <Link
              href={`https://twitter.com/${twitter}`}
              title="Twitter"
              isExternal
            >
              <Icon as={FaTwitterSquare} h={5} w={5} />
            </Link>
          )}
        </HStack>
      </VStack>
    </MotionHStack>
  )
}
export default CoworkerCard
