import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'Tinky-Zhao-6fb1c2cebb144022b85c164c20574320?pvs=4',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Welcome to my virtual zone.',
  domain: 'https://flash-lilac-774.notion.site/Tinky-Zhao-6fb1c2cebb144022b85c164c20574320?pvs=4',
  author: '@Tinky Zhao',

  // open graph metadata (optional)
  //description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  //twitter: 'transitive_bs',
  //github: 'transitive-bullshit',
  //linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
     {
       title: 'About',
       pageId: 'Resume-Template-3092f8c83a494daaa9da89422cf2b5f0?pvs=4'
     },
     {
       title: 'Contact',
       pageId: 'Contract-341d8f612f744296a38f5ef452a705f3?pvs=4'
     }
   ]
})
