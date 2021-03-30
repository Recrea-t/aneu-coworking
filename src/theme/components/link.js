export default {
  baseStyle: {
    color: "nero.500",
    boxShadow: "none",
    _focus: {
      boxShadow: "none",
      textDecoration: "underline",
    },
  },
  variants: {
    "nav-link": {
      fontWeight: "medium",
      textTransform: "uppercase",
      _hover: {
        color: "veryLightGrey.500",
        textDecoration: "none",
      },
      _focus: {
        color: "veryLightGrey.500",
        textDecoration: "none",
      },
    },
  },
}
