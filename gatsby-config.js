module.exports = {
  siteMetadata: {
    title: "GeoTiles",
    description: "New artwork daily!",
    navigation: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
    ],
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "artworks",
        path: "./src/artworks/",
      },
      __key: "artworks",
    },
  ],
};
