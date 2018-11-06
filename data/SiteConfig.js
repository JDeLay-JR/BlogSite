module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "jimbo", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "I guess it's a Tech Blog?", // Site title.
  siteTitleAlt: "James DeLay", // Alternative site title for SEO.
  siteLogo:
    "https://haysclark.github.io/gatsby-starter-casper/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://jamesdelay.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/tech", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "By James DeLay", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f1d38bbdda690e28a81673c06325075&auto=format&fit=crop&w=2089&q=80", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Casper User", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/JDeLay-JR",
    "https://www.linkedin.com/in/jdelayjr/",
    "mailto:jdelay.jr@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/JDeLay-JR",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Linked In",
      url: "https://www.linkedin.com/in/jdelayjr/",
      iconClassName: "fa fa-linked-in" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:jdelay.jr@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Gatsby Casper Starter" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
