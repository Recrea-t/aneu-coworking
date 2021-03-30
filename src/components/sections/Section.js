import React from "react"
import {
  Heading,
  Container,
  Box,
  VStack,
  Image,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Contact from "./Contact"

import { MotionText } from "../../theme/utils"

import LocalizedLink from "../ui/LocalizedLink"
import useTranslations from "../../components/useTranslations"
import PricingCard from "../ui/PricingCard"
import CoworkerCard from "../ui/CoworkerCard"
import ServiceItem from "../ui/ServiceItem"

const Section = props => {
  const settings = {
    className: "is-slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  const { moreButton } = useTranslations()

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
        h={["10rem", null, "13.5rem"]}
        backgroundColor={props.color || "amulet.500"}
        clipPath={{
          base: "polygon(100% 0, 0 0, 0 100%)",
          md: "polygon(50% 0, 0 0, 0 100%)",
        }}
        mb={[0, null, 4]}
      >
        <Container h="full" pos="relative">
          <Heading as="h2" variant="is-section">
            {props.title}
          </Heading>
        </Container>
      </Box>

      {props.description && (
        <Container mb={8}>
          <ReactMarkdown
            renderers={ChakraUIRenderer()}
            source={props.description}
            linkTarget="_blank"
          />
        </Container>
      )}

      {props.table && (
        <Container mb={8}>
          <VStack spacing={8}>
            <SimpleGrid
              border="1px"
              borderColor="sorbus.100"
              w={["full", null, 2 / 3]}
              columns={[1, null, 2]}
              spacing={4}
              p={4}
            >
              {props.table.map((item, index) => (
                <ServiceItem key={index} index={index} title={item} />
              ))}
            </SimpleGrid>

            <MotionText whileTap={{ scale: 0.95 }}>
              <LocalizedLink to="/#contacte" variant="nav-link">
                {moreButton}
              </LocalizedLink>
            </MotionText>
          </VStack>
        </Container>
      )}

      {props.pricing && (
        <Container mb={8}>
          <VStack spacing={8}>
            <Stack
              direction={{ base: "column", md: "row" }}
              justify="center"
              spacing={{ base: 4, md: 8 }}
            >
              {props.pricing.map((item, index) => (
                <PricingCard key={index} index={index} {...item} />
              ))}
            </Stack>

            <MotionText whileTap={{ scale: 0.95 }}>
              <LocalizedLink to="/#contacte" variant="nav-link">
                {moreButton}
              </LocalizedLink>
            </MotionText>
          </VStack>
        </Container>
      )}

      {props.coworkers && (
        <Container mb={8}>
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="center"
            spacing={{ base: 4, md: 8 }}
          >
            {props.coworkers.map((item, index) => (
              <CoworkerCard key={index} index={index} {...item} />
            ))}
          </Stack>
        </Container>
      )}

      {props.images && (
        <Container mb={8}>
          <Slider {...settings}>
            {props.images.map(image => (
              <Image
                shadow="base"
                key={image.id}
                as={GatsbyImage}
                image={getImage(image)}
                alt={props.title}
              />
            ))}
          </Slider>
        </Container>
      )}

      {props.contact && (
        <Container mb={8}>
          <Contact description={props.contact} />
        </Container>
      )}
    </Box>
  )
}

export default Section
