<template>
  <article
    class="flex-1 bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition"
  >
    <nuxt-link
      :to="linkTo"
      class="flex flex-col no-underline hover:no-underline"
    >
      <img :src="imgUrl" :alt="imgAlt" class="h-full w-full" />
      <div class="p-6">
        <h2
          v-if="category"
          class="w-full text-gray-900 text-xs md:text-smuppercase"
        >
          {{ category }}
        </h2>
        <h1 class="font-bold text-xl text-black">
          {{ headline }}
        </h1>
        <p v-if="body" class="text-gray-900 font-serif text-base">
          {{ body }}
        </p>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      default: '/'
    },
    imgUrl: {
      type: String,
      default: '/'
    },
    imgAlt: {
      type: String,
      default: 'Image Description'
    },
    headline: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.transition {
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.transition:hover {
  transform: translateY(-2px);
}
</style>
