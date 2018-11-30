module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "jdelay", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Itsa Tech Blog!", // Site title.
  siteTitleAlt: "We pretend we know...", // Alternative site title for SEO.
  siteLogo: "/public/images/cover.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://itsatechblog.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "Itsa Tech Blog!", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f1d38bbdda690e28a81673c06325075&auto=format&fit=crop&w=2089&q=80", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "James DeLay", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/Itsa-Tech-Blog",
    "https://twitter.com/blog_itsa",
    "mailto:itsatechblog.bloggers@gmail.com"
  ],
  userLinks: [
    {
      label: "Code Examples",
      url: "https://github.com/Itsa-Tech-Blog",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "The Tweety",
      url: "https://twitter.com/blog_itsa",
      iconClassName: "fa fa-linked-in" // Disabled, see Navigation.jsx
    },
    {
      label: "Email Us!",
      url: "mailto:itsatechblog.bloggers@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Built proudly with Gatsby" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
