<template>
  <Layout>
    <post-header :post="$page.post" />

    <article
      class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16"
      :class="{'border-b border-grey-lighter pb-10 mb-16': !$page.post.author}"
    >
      <alert
        v-if="postIsOlderThanOneYear"
        class="bg-orange-100 border-l-4 border-orange-500 text-orange-900"
      >This post is over a year old, some of this information may be out of date.</alert>

      <div
        :class="{'pb-10': $page.post.author || $page.post.tags}"
        class="prose prose-lg markdown text-lg leading-normal text-gray-700"
        v-html="$page.post.content"
      />

      <footer v-if="$page.post.author || $page.post.tags" class="flex flex-wrap pb-10 sm:pb-16">
        <div>
          <g-link
            v-for="tag in $page.post.tags"
            :key="tag.id"
            :to="`${tag.path}/`"
            class="inline-block text-indigo-400 hover:text-white hover:bg-indigo-400 border border-indigo-400 font-sans font-bold text-xs sm:text-sm px-4 py-2 mr-4 mb-2 rounded-full transition-color transition-bg"
          >
            <svg
              class="inline w-3 fill-current align-middle mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              role="img"
            >
              <path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            {{ tag.title }}
          </g-link>
        </div>
        <div
          v-if="$page.post.author"
          class="flex flex-wrap items-center justify-center sm:justify-left border-t border-b border-gray-300 w-full mt-10 py-10 sm:px-16"
        >
          <figure class="px-2 mb-1 sm:mb-0 w-full sm:w-1/5 flex justify-center">
            <g-image
              class="rounded-full p-4 sm:p-0"
              src="https://en.gravatar.com/userimage/178036898/8d81777b73d8e7264e7675c34deb7013.jpeg"
              alt="Steve McDougall"
            />
          </figure>
          <div class="px-4 sm:w-4/5 text-center sm:text-left">
            <h4 class="font-sans font-bold text-lg sm:text-xl mb-2 sm:mb-4">
              <span
                class="text-black hover:text-gray-600 capitalize border-b-2 border-transparent transition-color"
              >JustSteveKing</span>
            </h4>
          </div>
        </div>
      </footer>
    </article>
  </Layout>
</template>

<script>
import moment from "moment";
import config from "~/.temp/config.js";
import Alert from "@/components/Alert";
import PostHeader from "~/components/PostHeader";
export default {
  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? "- " + this.$page.post.tag.name : ""
      }`,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.description,
        },
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        {
          property: "og:description",
          content: this.$page.post.description,
        },
        { property: "og:url", content: this.postUrl },
        {
          property: "article:published_time",
          content: moment(this.$page.post.date).format("YYYY-MM-DD"),
        },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:widgets:new-embed-design", content: "on" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        {
          name: "twitter:description",
          content: this.$page.post.description,
        },
        { name: "twitter:site", content: "@JustSteveKing" },
        { name: "twitter:creator", content: "@JustSteveKing" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    };
  },
  mounted() {
    import("medium-zoom").then((mediumZoom) => {
      this.zoom = mediumZoom.default(".markdown p > img");
    });
  },
  computed: {
    config() {
      return config;
    },
    postIsOlderThanOneYear() {
      let postDate = moment(this.$page.post.datetime);
      return moment().diff(postDate, "years") > 0 ? true : false;
    },
    postUrl() {
      let siteUrl = this.config.siteUrl;
      let postPath = this.$page.post.path;
      return postPath
        ? `${siteUrl}${postPath}`
        : `${siteUrl}/${slugify(this.$page.post.title)}/`;
    },
    ogImageUrl() {
      return (
        this.$page.post.cover ||
        `${this.config.siteUrl}/images/juststeveking-card.png`
      );
    },
  },
  components: {
    Alert,
    PostHeader,
  },
};
</script>

<page-query>
query Post ($path: String) {
  post (path: $path) {
    id
    title
    path
    description
    content
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
</page-query>

