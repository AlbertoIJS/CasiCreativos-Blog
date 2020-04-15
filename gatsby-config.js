require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Casi Creativos`,
    siteTitleAlt: `Blog Casi Creativos`,
    siteHeadline: `Blog Casi Creativos - Blog`,
    siteUrl: `https://www.casicreativos.com`,
    siteDescription: `Blog de Casi Creativos, sobre feminismo, tecnologia y arte.`,
    siteLanguage: `es`,
    siteImage: `/banner.jpg`,
    author: `@AlbertoIJS`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Inicio`,
            slug: `/`,
          },
          {
            title: `Feminismo`,
            slug: `/tags/feminismo`,
          },
          {
            title: `Tecnología`,
            slug: `/tags/tecnologia`,
          },
          {
            title: `Salud Mental`,
            slug: `/tags/salud-mental`,
          },
          // {
          //   title: `Sobre Nosotros`,
          //   slug: `/about`,
          // },
        ],
        externalLinks: [
          {
            name: `Facebook`,
            url: `https://www.facebook.com/CasiCreativos/`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/casicreativos`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/casicreativos`,
          },
          {
            name: `Pinterest`,
            url: `https://www.pinterest.com/casicreativos`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-theme-ui`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
};
