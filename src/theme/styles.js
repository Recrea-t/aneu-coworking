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
      position: "relative",
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,

      ".slick-slide": {
        padding: "0 2rem",
        overflow: "hidden",

        _before: {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        },
      },
      ".slick-list": {
        height: "100%",
        margin: "0 -2rem",

        ".slick-track": {
          height: "100%",

          ".slick-slide": {
            height: "100%",

            "> div": {
              height: "100%",
            },
          },
        },
      },
      ".slick-dots": {
        position: "absolute",
        bottom: "1rem",

        li: {
          margin: "0",
        },

        button: {
          _before: {
            fontSize: ".75rem",
            color: "#cccccc",
            opacity: 0.75,

            _hover: {
              opacity: 1,
            },
          },
        },

        ".slick-active": {
          button: {
            _before: {
              fontSize: "1rem",
              color: "#1a1a1a",
              textShadow:
                "-1px 0 #cccccc, 0 1px #cccccc, 1px 0 #cccccc, 0 -1px #cccccc",
            },
          },
        },
      },
    },
  },
}

export default styles
