import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'WidgetBot',
  description: 'Embed your Discord server on your website with WidgetBot!',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3', async: '', defer: '' },
      `new Crate({
        server: '299881420891881473',
        channel: '368427726358446110',
        shard: 'https://emerald.widgetbot.io'
      })
      `
    ]
  ],
  sitemap: {
    hostname: 'https://docs.widgetbot.io'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { dark: '/logo.svg', light: '/logo-black.svg' },
    nav: [
      { text: 'Home', link: 'https://widgetbot.io', target: '_self' },
      { text: 'Docs', link: '/', activeMatch: '^(\/$|\/[^g])' },
      { text: 'Guides', link: '/guides/', activeMatch: '/guides/' },
      { text: 'Pricing', link: 'https://widgetbot.io/pricing', target: '_self' },
      { text: 'Blog', link: 'https://blog.widgetbot.io', target: '_self'}
    ],
    sidebar: {
      '/guides/': [
        {
          text: 'Helpful Guides',
          link: '/guides/',
          items: [
            { text: 'Automod', link: '/guides/automod' },
            { text: 'Custom Colors', link: '/guides/custom-colors' },
          ]
        },
      ],
      '/': [
        {
          text: 'WidgetBot',
          link: '/'
        },
        {
          text: 'Tutorial',
          link: '/tutorial/',
          items: [
            { text: 'Crate', link: '/embed/crate/tutorial' },
            { text: 'html-embed', link: '/embed/html-embed/tutorial' },
            { text: 'iframes', link: '/tutorial/iframes' }
          ]
        },
        {
          text: 'Embed',
          link: '/embed/',
          items: [
            {
              text: 'Crate',
              link: '/embed/crate/',
              items: [
                { text: 'Intro', link: '/embed/crate/' },
                { text: 'Tutorial', link: 'embed/crate/tutorial' },
                { text: 'Options', link: 'embed/crate/options' },
                { text: 'API', link: 'embed/crate/api' },
                { text: 'Examples', link: 'embed/crate/examples' }
              ]
            },
            {
              text: 'html-embed',
              link: '/embed/html-embed/',
              items: [
                { text: 'Intro', link: '/embed/html-embed/' },
                { text: 'Tutorial', link: 'embed/html-embed/tutorial' },
                { text: 'Attributes', link: 'embed/html-embed/attributes' },
                { text: 'API', link: 'embed/html-embed/api' }
              ]
            },
            {
              text: 'react-embed',
              link: '/embed/react-embed/',
              items: [
                { text: 'Intro', link: '/embed/react-embed/' },
                { text: 'Props', link: 'embed/react-embed/props' },
                { text: 'API', link: 'embed/react-embed/api' }
              ]
            },
            {
              text: 'embed-api',
              link: '/embed/embed-api/',
              items: [
                { text: 'Intro', link: '/embed/embed-api/' },
                { text: 'Commands', link: 'embed/embed-api/commands' },
                { text: 'Events', link: 'embed/embed-api/events' }
              ]
            }
          ]
        },
        {
          text: 'Bot',
          items: [
            { text: 'Moderation', link: '/bot/moderation' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/RVNmwdy' },
      { icon: 'github', link: 'https://github.com/widgetbot-io/embed' },
      { icon: 'twitter', link: 'https://twitter.com/widgetbot_io' }
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/widgetbot-io/documentation/edit/master/:path',
      text: 'Help us improve this page!'
    }
  }
})
