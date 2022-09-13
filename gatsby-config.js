require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_PROJECT_DATASET,
        token: process.env.SANITY_READ_TOKEN,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "James Stewart Jr Thoughts",
        short_name: "James",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
  ],
  siteMetadata: {
    copyright: "Copyright © 2016-2022 - James Stewart",
    dateFormat: "MMMM Do, YYYY", 
    dateFromFormat: "YYYY-MM-DD",
    description: `Blazing fast modern site generator for React`,
    fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
    pathPrefix: "",
    siteDescription: "James Stewart Jr is a fullstack software engineer, dad, and Charlotte resident.", 
    siteFBAppID: "", // FB Application ID for using app insights
    siteGATrackingID: "UA-28338746-1", 
    siteLogo: "/logos/favicon.ico",
    siteRss: "/rss.xml",
    siteRssTitle: "James Stewart Jr thoughts",
    siteTitle: "James Stewart Jr",
    siteTitleAlt: "James Stewart",
    siteTitleShort: "James Stewart",
    siteUrl: "https://jamestewartjr.com",
    title: `Core`,
    userAvatar: "assets/jamesstewartjr.jpg", // User avatar to display in the author segment.
    userDescription: "James Stewart Jr is a fullstack software engineer, dad, and Charlotte resident.",
    userEmail: "jamestewartjr1@gmail.com",
    userLinks: [
      {
        label: "GitHub",
        url: "https://github.com/jamestewartjr",
        iconClassName: "FaGithub"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/jamestewartjr",
        iconClassName: "FaTwitter"
      },
      {
        label: "Email",
        url: "mailto:jamestewartjr1@gmail.com",
        iconClassName: "FaEnvelope"
      }
    ],
    userLocation: "Charlotte",
    userName: "James",
    userTwitter: "jamestewartjr",
  },
}
