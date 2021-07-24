module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "personal-site-two",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "react-jsx",
        allExtensions: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "@chakra-ui/gatsby-plugin",
  ],
};
