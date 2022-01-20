module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title: "This site is owned and operated by Dmytro Taran!"
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog` 
            }
        },
        "gatsby-plugin-mdx",
    ]
}