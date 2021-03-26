import React from "react"
import { Heading, Container, Box, Image } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Section = props => {
  const settings = {
    className: "is-slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Box
      id={props.id}
      //style={{ scrollMarginTop: "100px" }}
      as="section"
      w={["auto", null, "100%"]}
      maxW={["auto", null, "1200px"]}
      mx={[0, null, "auto"]}
      mb={8}
      px={[0, null, "1rem"]}
    >
      <Box
        h="8rem"
        backgroundColor={props.color || "blue.500"}
        clipPath={{
          base: "polygon(100% 0, 0 0, 0 100%)",
          md: "polygon(50% 0, 0 0, 0 100%)",
        }}
      >
        <Container h="full" pos="relative">
          <Heading>{props.title}</Heading>
        </Container>
      </Box>

      {props.description && (
        <Container>
          <ReactMarkdown source={props.description} linkTarget="_blank" />
        </Container>
      )}

      {props.images && (
        <Container>
          <Slider {...settings}>
            {props.images.map(image => (
              <Image
                key={image.id}
                as={GatsbyImage}
                image={getImage(image)}
                alt={props.title}
              />
            ))}
          </Slider>
        </Container>
      )}
    </Box>
  )
}

export default Section
