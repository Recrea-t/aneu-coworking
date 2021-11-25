import React, { useEffect } from "react"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import MotionBox, { motionRevealConfig } from "../../theme/utils"
import { Heading, Text, useBreakpointValue } from "@chakra-ui/react"

const PricingCard = props => {
  const { title, price, description } = props

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
      w="full"
      minW="310px"
      p={4}
      shadow="base"
      color="white"
      bg="chambray.500"
      textAlign="justify"
      fontSize="xs"
      {...motionRevealConfig(controls, "bottom", index)}
    >
      <Heading as="h3" fontSize="sm" mb={2}>
        {title}
      </Heading>
      <Heading as="h4" fontSize="sm">
        {price}
      </Heading>
      {description && <Text mt={4}>{description}</Text>}
    </MotionBox>
  )
}
export default PricingCard
