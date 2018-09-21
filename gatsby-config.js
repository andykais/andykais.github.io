module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /missing-icons/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/sword-favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-73032755-1',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Stalemate'],
        },
      },
    },
  ],
}
