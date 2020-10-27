<template>
  <div class="bg-white">
  <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
      <div class="px-5 py-2">
        <g-link to="/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
          Home
        </g-link>
      </div>
      <div class="px-5 py-2">
        <g-link to="/blog" class="text-base leading-6 text-gray-500 hover:text-gray-900">
          Blog
        </g-link>
      </div>
      <div class="px-5 py-2">
        <g-link to="/talks" class="text-base leading-6 text-gray-500 hover:text-gray-900">
          Talks
        </g-link>
      </div>
    <div class="px-5 py-2">
        <a href="/feed.xml" class="text-base leading-6 text-gray-500 hover:text-gray-900">
          RSS
        </a>
      </div>
    </nav>
    <div class="mt-8 flex justify-center">
      <g-link to="https://www.linkedin.com/in/steve-mcdougall/" class="ml-6 text-gray-400 hover:text-linkedin">
        <span class="sr-only">LinkedIn</span>
        <linked-in />
      </g-link>
      <g-link to="https://github.com/JustSteveKing" class="ml-6 text-gray-400 hover:text-github">
        <span class="sr-only">GitHub</span>
        <github />
      </g-link>
      <g-link to="https://twitter.com/JustSteveKing" class="ml-6 text-gray-400 hover:text-twitter">
        <span class="sr-only">Twitter</span>
        <twitter />
      </g-link>
      <g-link to="https://discordapp.com/users/533726823201243137" class="ml-6 text-gray-400 hover:text-discord">
        <span class="sr-only">Discord</span>
        <discord />
      </g-link>
    </div>
    <div class="mt-8">
      <p class="text-center text-base leading-6 text-gray-400">
        &copy; {{ year }} Steve McDougall. All rights reserved.
      </p>
    </div>
  </div>
</div>
</template>

<script>
import Github from "~/components/Icons/Social/Github";
import Twitter from "~/components/Icons/Social/Twitter";
import Discord from "~/components/Icons/Social/Discord";
import LinkedIn from "~/components/Icons/Social/LinkedIn";
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  components: {
    Github,
    Twitter,
    Discord,
    LinkedIn
  }
}
</script>
