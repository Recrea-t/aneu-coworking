import React from "react"
import {
  Heading,
  Container,
  Box,
  Image,
  Stack,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react"
import { Table, Tbody, Tr, Td } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

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
        h="10rem"
        backgroundColor={props.color || "blue.500"}
        clipPath={{
          base: "polygon(100% 0, 0 0, 0 100%)",
          md: "polygon(45% 0, 0 0, 0 100%)",
        }}
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
          <Container>
            <Table variant="simple" colorScheme="mangoTango">
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                </Tr>
              </Tbody>
            </Table>
          </Container>
        </Container>
      )}

      {props.pricing && (
        <Container mb={8}>
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="center"
            spacing={{ base: 4, md: 8 }}
          >
            {props.pricing.map((item, index) => (
              <Box
                key={index}
                shadow="base"
                alignSelf={{ base: "center", lg: "flex-start" }}
                color="white"
                bg="blue.500"
                p={4}
              >
                <Heading as="h4" fontSize="md" mb={2}>
                  {item.title}
                </Heading>
                <Heading as="h5" fontSize="md">
                  {item.price}
                </Heading>
                <Text fontSize="xs" mt={4}>
                  {item.description}
                </Text>
              </Box>
            ))}
          </Stack>
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
              <Box
                key={index}
                alignSelf={{ base: "center", lg: "flex-start" }}
                border="1px"
                borderColor="green.500"
                p={2}
              >
                <HStack spacing={4}>
                  <Image
                    cursor="nwse-resize"
                    clipPath="polygon(50% 0, 100% 0, 100% 50%, 50% 100%, 0 100%, 0 50%)"
                    transition="clip-path 1s"
                    _hover={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 0)",
                    }}
                    as={GatsbyImage}
                    image={getImage(item.image)}
                    alt={item.title}
                  />

                  <Box>
                    <Heading as="h4" fontSize="sm" mb={2}>
                      {item.title}
                    </Heading>
                    <Text fontSize="xs" mb={4}>
                      {item.description}
                    </Text>
                    <Link
                      to={item.url}
                      title={item.title}
                      fontSize="xs"
                      isExternal
                    >
                      {item.url}
                    </Link>
                  </Box>
                </HStack>
              </Box>
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
    </Box>
  )
}

export default Section
