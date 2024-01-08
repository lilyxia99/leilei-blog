module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
      },
    },
    
  ],
  siteMetadata: {
    title: `✨Leilei Xia's Mind✨`,
    author: 'Leilei Xia',
    description: "Leilei's Blog and all kinds of stuff"
  },
}
