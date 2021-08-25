const urljoin = require("url-join");
const config = require("./data/SiteConfig");

const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/;

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix)
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    "gatsby-plugin-sass",


    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: 'Json'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "photos",
        path: `${__dirname}/static/assets/images/mugs/`
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "reviews",
        path: `${__dirname}/content/reviews`
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images"
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 672
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers"
        ]
      }
    },
    /*{
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.siteGATrackingID
      }
    },*/

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          config.siteGATrackingID, // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {

        },
      },
    },


    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#c62828"
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-netlify-cms",
    //'gatsby-plugin-page-transitions',
    //"gatsby-plugin-twitter",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage(
              filter: {
                path: {
                  regex: "${regexExcludeRobots}"
                }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: "/",
        background_color: "#e0e0e0",
        theme_color: "#c62828",
        display: "minimal-ui",
         icon: `src/favicon.png`
      }
    },

      `gatsby-plugin-favicon`,


    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Material Icons`,
          `Roboto\:400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },


    "gatsby-plugin-offline",
  ]
};
