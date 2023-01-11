module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Credix",
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
			resolve: "gatsby-plugin-hubspot",
			options: {
				trackingCode: "26631266",
				respectDNT: false,
				productionOnly: true,
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: ["G-2WM77E6YNH", "AW-10862509247"],
			},
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-57WJCHH",

				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				defaultDataLayer: { platform: "gatsby" },
			},
		},
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				facebookPixel: {
					pixelId: "1182663155872985",
					cookieName: "gatsby-gdpr-facebook-pixel",
				},
				linkedin: {
					trackingId: "4229041",
					cookieName: "gatsby-gdpr-linked-in",
				},
				environments: ["production", "development"],
			},
		},
	],
};
