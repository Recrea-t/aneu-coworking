import React, { useEffect, useState, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Center, Image, Text, Heading, Container } from "@chakra-ui/react"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

const BackgroundSlider = ({
  callbacks = {},
  duration = 5,
  transition = 2,
  initDelay = 5,
  images,
  title,
  hero,
}) => {
  let bgRefs = []
  let subRefs = []
  let bgWrappers = []
  let subWrappers = []

  const imgs = images.map((image, index) => {
    const backgroundStyle = {
      position: "absolute",
      zIndex: -10,
      width: "100%",
      height: "100%",
      margin: 0,
      padding: "none",
      left: 0,
      top: 0,
      backgroundSize: "cover",
      opacity: index ? 0 : 1,
      transition: `opacity ${transition}s`,
    }

    const subStyle = {
      opacity: index ? 0 : 1,
      transition: `opacity ${transition}s`,
      pointerEvents: index ? "none" : "auto",
    }

    subRefs[index] = React.createRef()
    bgRefs[index] = React.createRef()

    return (
      <React.Fragment key={index}>
        <Box ref={bgRefs[index]}>
          <Image
            _before={{
              content: "''",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: "-1px",
              zIndex: 1,
              background:
                "linear-gradient(178deg, rgba(255, 255, 255, 0) 10%, #fff 90%)",
            }}
            as={GatsbyImage}
            loading="eager"
            alt={title}
            image={getImage(image)}
            style={backgroundStyle}
          />
        </Box>
        <Box
          ref={subRefs[index]}
          pos="absolute"
          bottom={[0, null, 8]}
          w="full"
          style={subStyle}
        >
          <Container w="full">
            <Heading
              as="h1"
              ml={[0, "7%", "15%"]}
              fontSize={["1.875rem", null, "2rem"]}
            >
              <ReactMarkdown
                renderers={ChakraUIRenderer()}
                source={hero}
                allowDangerousHtml={true}
              />
            </Heading>
          </Container>
        </Box>
      </React.Fragment>
    )
  })

  const [timeoutHandle, setTimeoutHandle] = useState(0)
  const timeoutHandleRef = useRef(timeoutHandle)
  timeoutHandleRef.current = timeoutHandle
  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)
  indexRef.current = index

  callbacks.getCount = () => imgs.length

  const clearAndSetTimeoutHandle = newTimeoutHandle => {
    clearTimeout(timeoutHandleRef.current)
    setTimeoutHandle(newTimeoutHandle)
  }

  const initEffect = () => {
    bgRefs.forEach(bgRef => {
      bgWrappers.push(bgRef.current.firstElementChild)
    })

    subRefs.forEach(subRef => {
      subWrappers.push(subRef.current)
    })

    const length = bgWrappers.length

    const changeIndex = newIndex => {
      const index = indexRef.current
      clearTimeout(timeoutHandleRef.current)

      bgWrappers[index].style.opacity = 0
      bgWrappers[newIndex % length].style.opacity = 1

      subWrappers[index].style.opacity = 0
      subWrappers[index].style.pointerEvents = "none"

      subWrappers[newIndex % length].style.opacity = 1
      subWrappers[newIndex % length].style.pointerEvents = "auto"

      callbacks.onChange && callbacks.onChange(index, newIndex % length)

      setIndex(newIndex % length)
      clearAndSetTimeoutHandle(setTimeout(callback, duration * 1000))
    }

    const callback = function () {
      const index = indexRef.current
      changeIndex(index + 1)
    }

    clearAndSetTimeoutHandle(setTimeout(callback, initDelay * 1000))

    callbacks.atIndex = changeIndex

    callbacks.next = () => callbacks.atIndex((indexRef.current + 1) % length)
    callbacks.prev = () =>
      callbacks.atIndex((indexRef.current + length - 1) % length)

    return () => {
      clearTimeout(timeoutHandleRef.current)
    }
  }

  // Runs once after DOM is loaded; effectively `componentDidMount`
  useEffect(initEffect, [])

  return (
    <>
      <Box pos="relative" w="full" h="calc(100vh - 5.5rem - 92px)">
        {imgs}
      </Box>
      {/*<Pagination callbacks={callbacks} />*/}
    </>
  )
}

export default BackgroundSlider

export const Pagination = ({ callbacks }) => {
  let buttonRefs = []

  useEffect(() => {
    callbacks.onChange = (prevIndex, newIndex) => {
      if (buttonRefs[prevIndex].current) {
        buttonRefs[prevIndex].current.style.color = "#1a1a1a"
        buttonRefs[prevIndex].current.style.opacity = "0.25"
      }
      if (buttonRefs[newIndex].current) {
        buttonRefs[newIndex].current.style.color = "#1a1a1a"
        buttonRefs[newIndex].current.style.opacity = "0.75"
      }
    }
  }, [])

  return (
    <Center w="full" pb={4}>
      {Array.from(Array(callbacks.getCount()).keys()).map(index => (
        <Text
          key={index}
          ref={(buttonRefs[index] = React.createRef())}
          display="inline-block"
          role="button"
          cursor="pointer"
          w="20px"
          h="20px"
          m="0 5px"
          p={0}
          bg="transparent"
          color="nero.500"
          fontSize="3rem"
          lineHeight="20px"
          opacity={index === 0 ? 0.75 : 0.25}
          _hover={{
            outline: "none",
            opacity: 1,
          }}
          _focus={{
            outline: "none",
            opacity: 1,
          }}
          onClick={() => callbacks.atIndex(index)}
        >
          &middot;
        </Text>
      ))}
    </Center>
  )
}
