const config = {
  siteTitle: "James Stewart Jr",
  siteTitleShort: "James Stewart",
  siteTitleAlt: "James Stewart",
  siteLogo: "/logos/favicon.ico",
  siteUrl: "https://jamestewartjr.com",
  pathPrefix: "",
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "James Stewart Jr is a fullstack software developer, dad, and Charlotte resident.", 
  siteRss: "/rss.xml",
  siteRssTitle: "James Stewart Jr thoughts",
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-28338746-1", 
  disqusShortname: "", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY", 
  userName: "James",
  userEmail: "jamestewartjr1@gmail.com",
  userTwitter: "jamestewartjr",
  userLocation: "Charlotte",
  userAvatar: "assets/jamesstewartjr.jpg", // User avatar to display in the author segment.
  userDescription:
    "James Stewart Jr is a fullstack software developer, dad, and Charlotte resident.",
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/jamestewartjr",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/jamestewartjr",
      iconClassName: "FaTwitter"
    },
    {
      label: "Email",
      url: "mailto:jamestewartjr1@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020 - James Stewart"
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
