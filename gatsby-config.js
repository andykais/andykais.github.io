module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
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
        logo: './src/images/sword-favicon.png'
      }
    }
    // {
    // resolve: `gatsby-plugin-direct-import`,
    // options: {
    // packages: [
    // 'react-icons',
    // {
    // name: 'react-icons/fa',
    // indexFile: 'react-icons/sub-package/index.es.js',
    // },
    // ],
    // },
    // },
  ],
}
