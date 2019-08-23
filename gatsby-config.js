const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Extreme Rationalism',
    description: 'my theme',
    contact: {
      phone: '000 000 0000',
      email: 'webuimaker@gmail.com',
      copyright: '© 2019 - Extreme Rationalism. All right reserved.',
    },
    menuLinks: [{
        name: 'Home',
        link: '/',
      },
      {
        name: 'Projects',
        link: '/',
      },
      {
        name: 'Services',
        link: '/',
      },
      {
        name: 'About Us',
        link: '/',
      },
      {
        name: 'Blog',
        link: '/',
      },
      {
        name: 'Contact Us',
        link: '/',
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
