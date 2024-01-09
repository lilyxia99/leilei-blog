module.exports = {
  plugins: [
    {
      resolve: `gatsby-philipps-foam-theme`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
        ignore:[
          "**/private/**",
        ]
      },
      
    },
    
  ],
  siteMetadata: {
    title: `✨Leilei Xia's Mind✨`,
    author: 'Leilei Xia',
    description: "Leilei's Blog and all kinds of stuff"
  },
}
