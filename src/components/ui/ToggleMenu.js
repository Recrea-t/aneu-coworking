import React from "react";
import { Box, Flex, Collapse } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const ToggleMenu = (props) => {
  const { show, toggleMenu, children } = props;

  return (
    <>
      <Box display="block" onClick={toggleMenu} aria-label="Toggle navigation">
        {show ? <CloseIcon w={8} h={8} /> : <HamburgerIcon w={8} h={8} />}
      </Box>

      <Box display={show ? "block" : "none"} flexBasis="100%">
        <Collapse in={show} unmountOnExit>
          <Flex align="center" justify="center" direction="column" pt={4}>
            {children}
          </Flex>
        </Collapse>
      </Box>
    </>
  );
};

export default ToggleMenu;
