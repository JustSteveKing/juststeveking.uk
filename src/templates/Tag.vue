<template>
  <Layout>
    <header>
        <div class="max-w-xl md:max-w-3xl xl:max-w-4xl flex flex-col-reverse mx-auto text-center px-6 pt-6 pb-6 border-b border-gray-300">
          <p class="text-gray-700 leading-normal">{{ $page.tag.belongsTo.totalCount }} posts in total</p>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-2 capitalize">{{ $page.tag.title }}</h1>
          <svg class="w-5 sm:w-6 fill-current text-gray-500 mx-auto mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" role="img" aria-labelledby="tagIcon"><title id="tagIcon">Posts tagged</title><path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
        </div>
        <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
          <g-link to="/" class="text-sm border text-gray-900 border-gray-400 opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity">&larr; Home</g-link>
        </nav>
      </header>
    <div class="relative container mx-auto pt-12">
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <template v-if="$page.tag.belongsTo.edges">
          <post-item v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
        </template>
      </div>
      <pagination :base="`${$page.tag.path}`" :info="$page.tag.belongsTo.pageInfo" v-if="$page.tag.belongsTo.pageInfo.totalPages > 1" />
    </div>
  </Layout>
</template>

<script>
import moment from 'moment'
import config from '~/.temp/config.js'
import PostItem from '@/components/Blog/PostItem'
import Pagination from '@/components/Pagination'
export default {
  components: {
    PostItem,
    Pagination
  },
  metaInfo () {
    return {
      title: `Posts tagged "${this.$page.tag.title}"`,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: `Browse posts tagged "${this.$page.tag.title}"`
        },
        { property: "og:type", content: 'website' },
        { property: "og:title", content: `Posts tagged "${this.$page.tag.title}"` },
        { property: "og:description", content: `Browse posts tagged "${this.$page.tag.title}"` },
        { property: "og:url", content: `${this.config.siteUrl}${this.$page.tag.path}` },
        { property: "og:image", content: this.ogImageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Posts tagged "${this.$page.tag.title}"` },
        { name: "twitter:description", content: `Browse posts tagged "${this.$page.tag.title}"` },
        { name: "twitter:site", content: "@JustSteveKing" },
        { name: "twitter:creator", content: "@JustSteveKing" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/juststeveking-card.png`
    }
  }
}
</script>

<page-query>
query Tag ($path: String!, $page: Int) {
  tag (path: $path) {
    id
    title
    path
    belongsTo (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            id
            title
            date
            path
            content
            excerpt
            description
            timeToRead
            author
            cover
          }
        }
      }
    }
  }
}
</page-query>
