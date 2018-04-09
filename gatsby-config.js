const pkg = require('./package.json')

module.exports = {
  siteMetadata: {
    title: pkg.productName,
    description: pkg.description,
    siteUrl: pkg.homepage,
    authorName: pkg.author.name,
    authorEmail: pkg.author.email,
    authorGitHub: pkg.author.github,
    authorTwitter: pkg.author.twitter,
  },
  plugins: [
    // Sources -----------------------------------------------------------------
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
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    // Transformers ------------------------------------------------------------
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-draw',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            },
          },
          'gatsby-remark-katex',
          'gatsby-remark-prismjs',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    // Plugins -----------------------------------------------------------------
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: pkg.homepage,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WFGVBN',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: pkg.productName,
        short_name: pkg.productName,
        start_url: '/',
        display: 'minimal-ui',
        background_color: '#fff',
        theme_color: '#000',
        icon: 'static/favicon.png',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
