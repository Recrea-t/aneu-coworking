import React from "react"
import { useLocale } from "../../hooks/locale"

import BackgroundSlider from "../ui/Slider"

const Hero = ({ title, frontmatter }) => {
  const { locale } = useLocale()
  const images = frontmatter.ca.images
  const hero = frontmatter[locale].hero

  return <BackgroundSlider title={title} hero={hero} images={images} />
}

export default Hero
