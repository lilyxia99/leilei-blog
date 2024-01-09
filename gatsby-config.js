module.exports = {
  plugins: [
    {
      resolve: `gatsby-philipps-foam-theme`,
      options: {
        rootNote: `/hello`,
        contentPath: `${__dirname}/content/garden`,
      },
    },
    
  ],
  siteMetadata: {
    title: `✨Leilei Xia's Mind✨`,
    author: 'Leilei Xia',
    description: "Leilei's Blog and all kinds of stuff"
  },
}
