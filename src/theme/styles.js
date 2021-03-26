const styles = {
  global: {
    html: {
      //scrollBehavior: "smooth",
      //scrollMarginTop: "6rem",
    },
    body: {
      color: "dimGray.500",
    },
    ".markdown": {
      li: {
        margin: "0 !important",
      },
    },
    "a.is-active": {
      color: "dimGray.500",
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
