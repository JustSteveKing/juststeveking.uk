<template>
  <article class="flex flex-col rounded-lg shadow-lg overflow-hidden mx-3">
    <div class="flex-shrink-0">
      <g-image
        :src="post.cover"
        class="h-48 w-full object-cover"
        :alt="`Cover Image for ${post.title}`"
      />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-indigo-600">
          <g-link v-for="tag in post.tags" :key="tag.path" :to="tag.path" class="inline-block text-indigo-400 hover:text-white hover:bg-indigo-400 border border-indigo-400 font-sans font-bold text-xs sm:text-sm px-4 py-2 mr-4 mb-2 rounded-full transition-color transition-bg">
            <tag />
            <span class="ml-2">{{ tag.title }}</span>
          </g-link>
        </p>
        <g-link class="block" :to="post.path">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {{ post.title }}
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">
            {{ post.description }}
          </p>
        </g-link>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <g-image
            class="h-10 w-10 rounded-full"
            src="https://en.gravatar.com/userimage/178036898/8d81777b73d8e7264e7675c34deb7013.jpeg"
            alt="Steve McDougall"
          />
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-gray-900">
            <span class="hover:underline">{{ post.author }}</span>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time :datetime="post.date">{{ post.date | moment("Do MMM YYYY") }}</time>
            <span class="mx-1">&middot;</span>
            <span>{{ post.timeToRead }} min read</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Tag from "~/components/Icons/Tag";
export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  components: {
    Tag
  }
}
</script>
