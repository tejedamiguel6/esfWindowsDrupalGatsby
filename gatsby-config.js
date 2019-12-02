/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Eurostar',
    author: 'EuroStar',

  },
  plugins: [
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://localhost:8888/esfwindows_upgrade_8/'
      }
    },


    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
 
    'gatsby-image',
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,

    
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins:[
          {
            resolve: 'gatsby-source-googlemaps-geocoding',
            options: {
              key: 'AIzaSyB126OG7e6SgjlOSN-CGN2-JW_ohkrkLqU',
              address: 'Boston, MA',
            },
          },
        ],
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images', 
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
         
        ]
      }
    }
  ]
}