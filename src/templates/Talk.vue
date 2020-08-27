<template>
  <Layout>
    <article class="container bg-white mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden">
        <div class="relative px-4 sm:px-6 lg:px-8">
          <div class="text-lg max-w-prose mx-auto mb-6">
            <h1
              class="mt-2 mb-8 text-3xl text-left leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
            >{{ $page.talk.title }}</h1>
            <p
              class="text-xl text-gray-500 leading-8" v-html="$page.talk.abstract" />
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {};
</script>

<page-query>
query Talk ($path: String) {
  talk (path: $path) {
    id
    title
    slides
    abstract
  }
}
</page-query>