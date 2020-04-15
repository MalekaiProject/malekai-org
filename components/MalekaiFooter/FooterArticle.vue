<template>
  <div class="p-2 w-1/3 h-auto">
    <article class="overflow-hidden bg-gray-100 rounded-lg shadow-lg h-auto">
      <a :href="articleLink" class="no-underline">
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5
          }"
          transition="fade-transition"
          ><img :src="articleImage" class="block h-24 w-full object-cover" />
        </v-lazy>
      </a>
      <header
        class="flex items-center justify-between leading-tight p-1 md:p-2"
      >
        <div class="text-base w-full truncate text-gray-800">
          <a
            :href="articleLink"
            class="text-xs text-gray-800 font-medium uppercase no-underline subpixel-antialiased tracking-wide"
          >
            {{ articleTitle }}
          </a>
        </div>
      </header>
    </article>
  </div>
</template>

<script>
export default {
  data: () => ({ isActive: false }),
  props: {
    articleLink: {
      type: String,
      default: '#'
    },
    articleTitle: {
      type: String,
      default: 'Crowfall Article'
    },
    articleImage: {
      type: String,
      default: 'https://malekai.org/images/malekai-promo.jpg'
    }
  }
}
</script>
