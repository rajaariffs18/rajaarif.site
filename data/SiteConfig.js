const config = {
  siteTitle: 'Raja Arif',
  siteTitleShort: 'Raja',
  siteTitleAlt: 'Raja Arif',
  siteLogo: '/logos/logo.png',
  siteUrl: 'https://rajaarif.site',
  repo: 'https://github.com/ihwanid/ihwan.id',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription: 'Hi saya Raja, seorang Web Developer asal Medan. Senang Mencoba Teknologi Baru',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-125079658-2',
  disqusShortname: 'rajaarif',
  postDefaultCategoryID: 'Tech',
  userName: 'rajaariffadsi',
  userEmail: 'rajaariffs25@gmail.com',
  userTwitter: 'rajaariffadsi',
  userLocation: 'Medan, ID',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription: 'Hi saya Raja, seorang Web Developer asal Medan. Senang Mencoba Teknologi Baru.',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Now',
      link: '/now/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
