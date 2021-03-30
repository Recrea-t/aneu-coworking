import React, { useEffect } from "react"
import {
  Box,
  Heading,
  Text,
  useBreakpointValue,
  HStack,
  Link,
  Image,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import MotionBox, { motionRevealConfig } from "../../theme/utils"

const CoworkerCard = props => {
  const { title, image, description, url } = props

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
    <MotionBox
      ref={ref}
      p={4}
      {...motionRevealConfig(controls, "bottom", index)}
      alignSelf={{ base: "center", lg: "flex-start" }}
      border="2px"
      borderColor="amulet.500"
      p={2}
    >
      <HStack spacing={2}>
        <Image
          w={1 / 3}
          cursor="nwse-resize"
          clipPath="polygon(50% 0, 100% 0, 100% 50%, 50% 100%, 0 100%, 0 50%)"
          as={GatsbyImage}
          image={getImage(image)}
          alt={title}
        />

        <Box fontSize="sm">
          <Heading as="h4" fontSize="sm">
            {title}
          </Heading>
          <Text mb={2}>{description}</Text>
          <Link href={url} title={title} isExternal>
            {url}
          </Link>
        </Box>
      </HStack>
    </MotionBox>
  )
}
export default CoworkerCard
