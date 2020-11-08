const config = {
  siteTitle: 'HomemadeCoder',
  siteTitleShort: 'Hannah Zulueta',
  siteTitleAlt: 'Hannah Zulueta',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.homemadecoder.com',
  pathPrefix: '',
  siteDescription: 'Hannah Zulueta is a modern JavaScript developer.',
  siteRss: '/rss.xml',
  repo: 'https://github.com/hanapotski/homemadecoder',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'DD/MM/YYYY',
  userName: 'Hannah',
  userTwitter: 'homemadecoder', // Optionally renders "Follow Me" in the UserInfo segment.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/hanapotski',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/homemadecoder',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Email',
      url: 'mailto:sayhi@homemadecoder.com',
      iconClassName: 'fa fa-envelope'
    }
  ],
  copyright: 'Copyright © 2020. Advanced User',
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
  menuLinks: [
    // {
    //   name: 'Me',
    //   link: '/me/'
    // },
    // {
    //   name: 'Blog',
    //   link: '/blog/'
    // },
    // {
    //   name: 'Contact',
    //   link: '/contact/'
    // }
  ]
  // siteRssTitle: 'Gatsby Advanced Starter RSS feed', // Title of the RSS feed
  // siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  // googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  // disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.
  // userEmail: 'AdvancedUser@example.com', // Email used for RSS feed's author segment
  // userLocation: 'North Pole, Earth', // User location to display in the author segment.
  // userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  // userDescription:
  //   "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
