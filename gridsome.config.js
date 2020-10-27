module.exports = {
  siteName: 'JustSteveKing - Consultant CTO, Software Engineer, Community Advocate',
  siteDescription: 'Steve is an experienced CTO with scaling products and development teams. He is a massive advocate for the PHP language, community organiser, open source enthusiast and conference organiser.',
  siteUrl: 'https://www.juststeveking.uk',
  titleTemplate: '%s | juststeveking.uk',
  metadata: {},
  icon: {},
  templates: {
    Post: '/:title',
    Tag: '/tags/:id',
    Talk: '/talks/:title'
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/talks/**/*.md',
        typeName: 'Talk'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-156915127-1',
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'JustSteveKing - Consultant CTO, Software Engineer, Community Advocate',
          feed_url: 'https://www.juststeveking.uk/feed',
          site_url: 'https://www.juststeveking.uk',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://www.juststeveking.uk' + node.path,
          author: node.author,
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'feed.xml',
        },
      },
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
