<template>
  <Layout>
    <!-- Latest From the Blog -->
    <div class="relative container mx-auto">
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <template v-if="$page.posts.edges">
          <post-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </template>
      </div>

      <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
    </div>

  </Layout>
</template>

<script>
import config from "~/.temp/config.js";
import Pagination from '@/components/Pagination';
import PostItem from "~/components/Blog/PostItem";
export default {
  components: {
    PostItem,
    Pagination
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$static.metadata.siteName },
        {
          property: "og:description",
          content: this.$static.metadata.siteDescription
        },
        { property: "og:url", content:this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:widgets:new-embed-design", content: "on" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        {
          name: "twitter:description",
          content: this.$static.metadata.siteDescription
        },
        { name: "twitter:site", content: "@JustSteveKing" },
        { name: "twitter:creator", content: "@JustSteveKing" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    }
  },
  computed: {
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/juststeveking-card.png`
    }
  },
};
</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 15) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
         id
         title
         path
         description
         date
         author
         cover
         fullscreen
         timeToRead
         tags {
           id
           title
           path
         }
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>
