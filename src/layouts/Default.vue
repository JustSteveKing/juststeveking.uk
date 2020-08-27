<template>
  <div class="bg-gray-100">
    <site-header />
    <main>
      <slot />
    </main>
    <site-footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
