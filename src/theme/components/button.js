import { mode } from "@chakra-ui/theme-tools"

function variantCustomLink(props) {
  const color = mode(`nero.500`, `nero.200`)(props)
  const hoverColor = mode(`veryLightGrey.500`, `veryLightGrey.200`)(props)
  const activeColor = hoverColor

  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    color: color,
    _hover: {
      textDecoration: "none",
      color: hoverColor,
      bg: "transparent",
      _disabled: {
        color: color,
        textDecoration: "none",
      },
    },
    _focus: {
      boxShadow: "none",
      color: hoverColor,
    },
    _active: {
      color: activeColor,
    },
  }
}

export default {
  baseStyle: {
    fontWeight: "medium",
    textTransform: "uppercase",
  },
  variants: {
    "custom-link": variantCustomLink,
  },
}
