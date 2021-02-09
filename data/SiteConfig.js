const config = {
  siteTitle: "Evolution Lawyers", // Site title.
  siteTitleShort: "Evolution Lawyers", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Evolution Lawyers", // Alternative site title for SEO.
  //siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.evolutionlawyers.nz", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: "A virtual law firm for modern New Zealanders", // Website description used for RSS feeds/meta description tag.
  //siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-138160565-1", // Tracking code ID for google analytics.
  recaptcha: "6LdOKcAUAAAAACO96Tasgjv3aNTv3kSqSmtWUKhb",
  phone: '0800 352 993',
  email: 'mail@evolutionlawyers.nz',
  fax: '09 929 3332',
  twitter: 'https://twitter.com/evolutionlawyer',
  facebook: 'https://www.facebook.com/evolutionlawyers',
  youtube: 'https://www.youtube.com/channel/UCTogLQNyy8dub3Psog8B7Vg',
  linkedin: 'https://in.linkedin.com/company/evolution-lawyers-limited',
  newClientTarget: 'https://elf.evolutionlawyers.nz/contact-us',
  address: [
'18/465 Mount Eden Rd',' Mount Eden', 'Auckland 1024',
  ],
  poAddress:[
'PO Box 67003, Mount Eden, Auckland, 1349'
  ],

  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  //userName: "Material User", // Username to display in the author segment.
  //userEmail: "MaterialUser@example.com", // Email used for RSS feed's author segment
  //userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  //userLocation: "North Pole, Earth", // User location to display in the author segment.
  //userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  //userDescription:
  //  "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
 /* userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-material-starter",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],*/
  copyright: "Copyright © 2021. CataLex Ltd" // Copyright string for the footer of the website and RSS feed.


};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
