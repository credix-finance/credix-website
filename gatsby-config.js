module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Credix"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-preact",
    "gatsby-plugin-gdpr-cookies",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: [
            "G-2WM77E6YNH",
            "AW-10862509247"
          ],
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true,
          allowAdFeatures: false
        },
        googleTagManager: {
          trackingId: 'GTM-PJ3PP5W',
          cookieName: 'gatsby-gdpr-google-tagmanager',
          dataLayerName: 'dataLayer',
        },
        facebookPixel: {
          pixelId: "1182663155872985",
          cookieName: 'gatsby-gdpr-facebook-pixel',
        },
        linkedin: {
          trackingId: '4229041',
          cookieName: 'gatsby-gdpr-linked-in'
        },
        environments: ['production', 'development']
      },
    },
  ],
};
