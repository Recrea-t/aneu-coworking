import React from "react"
import useMenu from "../useMenu"
import useTranslations from "../useTranslations"

import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Flex, VStack } from "@chakra-ui/react"

import NavLink from "../ui/NavLink"
import ToggleMenu from "../ui/ToggleMenu"
import Languages from "../ui/Languages"
import LocalizedLink from "../ui/LocalizedLink"

const Header = () => {
  const menuItems = useMenu()
  const { home } = useTranslations()
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  const MenuItems = ({ onClick }) => {
    return (
      <>
        {menuItems.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.link}
            onClick={onClick}
            isLast={index === 4}
          >
            {menu.name}
          </NavLink>
        ))}
      </>
    )
  }

  return (
    <VStack as="nav" w="full" p={4} mx="auto" bg="white" spacing={0}>
      <Languages display={{ base: "inherit", md: "none" }} />

      <LocalizedLink to="/" title={home} as={GatsbyLink} mb={[2, null, 8]}>
        <StaticImage
          src="../../images/Logo.svg"
          alt="Recrea't"
          loading="eager"
          layout="fixed"
          placeholder="tracedSVG"
          width={200}
        />
      </LocalizedLink>

      <ToggleMenu show={show} toggleMenu={toggleMenu}>
        <MenuItems onClick={toggleMenu} />
      </ToggleMenu>

      <Flex
        align="center"
        direction="row"
        justify={{ base: "space-between", lg: "flex-end" }}
        display={{ base: "none", md: "inherit" }}
      >
        <MenuItems />
        <Languages />
      </Flex>
    </VStack>
  )
}

export default Header
