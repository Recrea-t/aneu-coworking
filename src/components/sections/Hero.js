import React from "react"
import { useLocale } from "../../hooks/locale"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Image, Heading, Container } from "@chakra-ui/react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "../../utils/ChakraUIRenderer"

const Hero = ({ title, frontmatter }) => {
  const { locale } = useLocale()
  const images = frontmatter.ca.images
  const hero = frontmatter[locale].hero

  const settings = {
    className: "is-slider",
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  }

  return (
    <Box
      pos="relative"
      w="full"
      minH="360"
      h={{
        base: "calc(100vh - 5.5rem - 92px)",
        md: "calc(100vh - 3.5rem - 92px)",
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <React.Fragment>
            <Box h="full">
              <Image
                h="full"
                key={index}
                _before={{
                  content: "''",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: "-1px",
                  zIndex: 1,
                  background:
                    "linear-gradient(178deg, rgba(255, 255, 255, 0) 65%, #fff 95%)",
                }}
                as={GatsbyImage}
                loading={index === 0 ? "eager" : "lazy"}
                image={getImage(image)}
                alt={title}
              />
            </Box>
            <Box
              pos="absolute"
              bottom={[0, null, 8]}
              w="full"
              style={{ pointerEvents: "none", zIndex: "2" }}
            >
              <Container w="full">
                <Heading
                  as="h1"
                  ml={[0, "7%", "15%"]}
                  fontSize={["1.875rem", null, "2rem"]}
                >
                  <ReactMarkdown
                    components={ChakraUIRenderer()}
                    children={hero}
                    allowDangerousHtml={true}
                  />
                </Heading>
              </Container>
            </Box>
          </React.Fragment>
        ))}
      </Slider>
    </Box>
  )
}

export default Hero
