const config = require("./site-config.json")

console.log(config)

module.exports = {
  siteMetadata: config,
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        isUsingColorMode: false,
      },
    },
    "gatsby-plugin-preact",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-json`,
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-preload-fonts",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Àneu Coworking`,
        short_name: `Àneu Coworking`,
        lang: `ca`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#313131`,
        display: `minimal-ui`,
        icon: "static/images/icon.png",
        icon_options: {
          purpose: `any maskable`,
        },
        localize: [
          {
            start_url: `/es/`,
            lang: `es`,
            name: `Àneu Coworking`,
            short_name: `Àneu Coworking`,
          },
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Àneu Coworking`,
            short_name: `Àneu Coworking`,
          },
        ],
        //cache_busting_mode: "none",
      },
    },
    // The offline plugin must be listed after the manifest plugin
    "gatsby-plugin-offline",
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "translations",
        path: `${__dirname}/data/translations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "language-mapping",
        path: `${__dirname}/data/language-mapping`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "menu",
        path: `${__dirname}/data/menu`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1380,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-metricool`,
      options: {
        metricoolId: process.env.METRICOOL_ID,
      },
    },
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
