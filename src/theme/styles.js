const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      color: "nightRider.500",
      fontWeight: "light",
    },
    ".is-active": {
      color: "#676767 !important",
      textDecoration: "none",
    },
    ".contact-info": {
      marginBottom: "2rem",
      textAlign: "left",
    },
    ".markdown": {
      li: {
        margin: "0 !important",
      },

      a: {
        fontWeight: "semibold",
      },
    },
    ".is-slider": {
      ".slick-slide": {
        padding: "0 2rem",
        overflow: "hidden",
      },
      ".slick-list": {
        margin: "0 -2rem",
      },
      ".slick-arrow": {
        _before: {
          //color: "black",
        },
      },
    },
  },
}

export default styles
