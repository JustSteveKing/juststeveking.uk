<template>
  <article class="bg-white p-6 rounded-lg shadow-xl">
    <g-link class="block" :to="talk.path">
      <h3 class="mt-4 text-xl leading-7 font-semibold text-gray-900">
        {{ talk.title }}
      </h3>
    </g-link>
  </article>
</template>

<script>
export default {
  props: {
    talk: {
      required: true,
      type: Object,
    },
  },
};
</script>