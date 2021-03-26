import React from "react"
import useMenu from "../useMenu"
import useTranslations from "../useTranslations"

import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Flex, useBreakpointValue, VStack } from "@chakra-ui/react"

import NavLink from "../ui/NavLink"
import ToggleMenu from "../ui/ToggleMenu"
import Languages from "../ui/Languages"
import LocalizedLink from "../ui/LocalizedLink"

const Header = () => {
  const menuItems = useMenu()
  const { home } = useTranslations()
  const isSmallDevice = useBreakpointValue({ base: true, md: false })
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <VStack as="nav" w="full" p={4} mx="auto" bg="white" color="mangoTango.500">
      <Languages />

      <LocalizedLink to="/" title={home} as={GatsbyLink}>
        <StaticImage
          src="../../images/LogoRecreat.png"
          alt="Recrea't"
          loading="eager"
          layout="fixed"
          placeholder="tracedSVG"
          width={200}
        />
      </LocalizedLink>

      {isSmallDevice ? (
        <ToggleMenu show={show} toggleMenu={toggleMenu}>
          {menuItems.map((menu, index) => (
            <NavLink key={index} to={menu.link} onClick={toggleMenu}>
              {menu.name}
            </NavLink>
          ))}
        </ToggleMenu>
      ) : (
        <Flex
          align="center"
          direction="row"
          justify={{ md: "space-between", lg: "flex-end" }}
        >
          {menuItems.map((menu, index) => (
            <NavLink key={index} to={menu.link}>
              {menu.name}
            </NavLink>
          ))}
        </Flex>
      )}
    </VStack>
  )
}

export default Header
