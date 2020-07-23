'use strict'

module.exports = {
  siteMetadata: {
    title: 'D Pham',
    description: 'Info about D Pham',
    siteUrl: 'https://dpham.info',
    author: {
      name: 'D Pham',
      email: 'd@dpham.info',
      social: {
        instagram: 'https://instagram.com/dangernoodlepham',
        github: 'https://github.com/dphm',
        twitter: 'https://twitter.com/__dphm'
      }
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://dpham.info'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'D Pham',
        short_name: 'D Pham',
        start_url: '/',
        background_color: '#464650',
        theme_color: '#009595',
        display: 'standalone',
        icon: 'src/content/images/d.png'
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['JetBrainsMono'],
          urls: ['/stylesheets/fonts.css']
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp'
  ]
}
