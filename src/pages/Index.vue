<template>
  <Layout>
    <!-- Get in touch CTA -->
    <div class="bg-gray-200">
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2 class="text-3xl leading-9 font-bold tracking-tight text-gray-9000">
          Need help on a project?
          <br />
          <span class="text-indigo-600">Get in touch today.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <span
              @click="openChat"
              class="cursor-pointer inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >Chat now</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Latest From the Blog -->
    <div class="relative container mx-auto pt-12 px-3">
      <div class="text-center">
        <h2 class="text-3xl leading-9 tracking-tight font-bold text-gray-900">Latest from the blog</h2>
        <p
          class="mt-3 max-w-2xl mx-auto text-2xl leading-7 text-gray-500 sm:mt-4"
        >I write blog posts semi-reguarly, please check back later to see if there is anything new.</p>
      </div>
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <template v-if="$page.posts.edges">
          <post-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </template>
      </div>
    </div>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";
import PostItem from "~/components/Blog/PostItem";
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$static.metadata.siteName },
        {
          property: "og:description",
          content: this.$static.metadata.siteDescription,
        },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:widgets:new-embed-design", content: "on" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        {
          name: "twitter:description",
          content: this.$static.metadata.siteDescription,
        },
        { name: "twitter:site", content: "@JustSteveKing" },
        { name: "twitter:creator", content: "@JustSteveKing" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    };
  },
  computed: {
    config() {
      return config;
    },
    ogImageUrl() {
      return `${this.config.siteUrl}/images/juststeveking-card.png`;
    },
  },
  methods: {
    openChat() {
      if ($crisp.is("chat:closed")) {
        $crisp.push(["do", "chat:open"]);
      }
    },
  },
  components: {
    PostItem,
  },
};
</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 3) @paginate {
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
