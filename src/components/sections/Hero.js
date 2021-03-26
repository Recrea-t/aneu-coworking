import React from "react"

import BackgroundSlider, { Pagination } from "../ui/Slider"

const Hero = ({ frontmatter }) => {
  const callbacks = {}

  return (
    <>
      <BackgroundSlider {...frontmatter} callbacks={callbacks} />
      <Pagination callbacks={callbacks} />
    </>
  )
}

export default Hero
