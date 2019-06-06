const guid = process.env.GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'James Stewart',
    description: 'James Stewart site',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'jamestewartjr1@gmail.com',
    },
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      // {
      //   name: 'Services',
      //   link: '/services',
      // },
      // {
      //   name: 'Team',
      //   link: '/team',
      // },
      // {
      //   name: 'Testimonials',
      //   link: '/testimonials',
      // },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `'James Stewart Jr site`,
        short_name: `'James Stewart Jr site`,
        start_url: `/`,
        background_color: `#1b3ed3`,
        theme_color: `#1b3ed3`,
        display: `minimal-ui`,
        icon: `src/images/s-sign.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
