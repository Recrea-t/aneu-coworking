import React, { useEffect } from "react"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MotionText, motionRevealConfig } from "../../theme/utils"
import { useBreakpointValue } from "@chakra-ui/react"

const PricingCard = props => {
  const { title } = props

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
    <MotionText
      ref={ref}
      px={2}
      borderBottom="1px"
      borderColor="sorbus.100"
      {...motionRevealConfig(controls, index % 2 ? "left" : "right", index)}
    >
      {title}
    </MotionText>
  )
}
export default PricingCard
