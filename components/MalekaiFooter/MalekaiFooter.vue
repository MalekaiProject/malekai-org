<template>
  <footer class="w-11/12 mx-auto p-0">
    <div class="container mx-auto sm:flex mb-4">
      <div class="h-auto mt-8 mx-3 md:p-6 md:w-1/5">
        <div
          class="text-sm text-grey-600 font-medium uppercase no-underline subpixel-antialiased tracking-wide mb-2 mt-2 text-center sm:text-left"
        >
          Crowfall
        </div>
        <ul class="list-reset leading-normal text-center sm:text-left">
          <li>
            <a
              href="https://crowfall.com"
              class="hover:text-grey-800 hover:font-medium text-grey-700 no-underline text-sm"
              >Official Website</a
            >
          </li>
          <li>
            <a
              href="https://twitch.tv/crowfallgame"
              class="hover:text-grey-800 hover:font-medium text-grey-700 no-underline text-sm"
              >Twitch</a
            >
          </li>
          <li>
            <a
              href="https://twitter.com/CrowfallGame"
              class="hover:text-grey-800 hover:font-medium text-grey-700 no-underline text-sm"
              >Twitter</a
            >
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCHVjXO-WdYHUIdxC8buCkzQ"
              class="hover:text-grey-800 hover:font-medium text-grey-700 no-underline text-sm"
              >Youtube</a
            >
          </li>
        </ul>
        <div
          class="text-sm text-grey-600 font-medium uppercase no-underline subpixel-antialiased tracking-wide mb-2 mt-2 text-center sm:text-left"
        >
          Patrons
        </div>
        <ul class="list-reset leading-normal text-center sm:text-left text-sm">
          <li>
            <a
              href="https://undeadlords.net"
              class="hover:text-grey-800 hover:font-medium text-grey-700 no-underline text-sm"
              >Undead Lords</a
            >
          </li>
        </ul>
      </div>
      <div class="h-auto mt-8 mx-3 md:p-6 ml-0 md:w-1/5">
        <div
          class="text-sm text-grey-600 font-medium uppercase no-underline subpixel-antialiased tracking-wide mb-2 mt-2 text-center sm:text-left"
        >
          Community
        </div>
        <ul class="list-reset leading-normal text-center sm:text-left">
          <li>
            <a
              href="https://discord.gg/ESr5KPj"
              class="hover:text-grey-800 hover:font-medium text-grey-700 no-underline text-sm"
              >Unofficial Discord</a
            >
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/crowfall/"
              class="hover:text-grey-800 hover:font-medium text-grey-700 no-underline text-sm"
              >Reddit</a
            >
          </li>
          <li>
            <a
              href="https://community.crowfall.com/"
              class="hover:text-grey-800 hover:font-medium text-grey-700 no-underline text-sm"
              >Forums</a
            >
          </li>
        </ul>
        <div
          class="text-sm text-grey-600 font-medium uppercase no-underline subpixel-antialiased tracking-wide mb-2 mt-2 text-center sm:text-left"
        >
          Malekai
        </div>
        <ul class="list-reset leading-normal text-center sm:text-left">
          <li>
            <a
              href="https://malekai.org/discord"
              class="hover:text-grey-800 hover:font-medium text-grey-700 no-underline text-sm"
              >Malekai Discord</a
            >
          </li>
          <li>
            <a
              href="https://github.com/MalekaiProject"
              class="hover:text-grey-800 hover:font-medium text-grey-600 no-underline text-sm"
              >GitHub</a
            >
          </li>
          <li>
            <a
              href="https://twitter.com/ProjectMalekai"
              class="hover:text-grey-800 hover:font-medium text-grey-700 no-underline text-sm"
              >Twitter</a
            >
          </li>
        </ul>
      </div>
      <div class="h-auto mt-8 mx-3 md:p-6 ml-0 md:w-2/3">
        <div
          class="text-sm text-grey-600 font-medium uppercase no-underline subpixel-antialiased tracking-wide mb-2 mt-2 pl-6 md:pl-4 text-center sm:text-left"
        >
          Crowfall News
        </div>
        <div class="container mx-auto px-4 md:px-2">
          <div class="flex flex-wrap">
            <footer-article
              v-for="article in articles"
              :key="article.id"
              :article-link="article.url"
              :article-title="article.title"
              :article-image="article.image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-xs text-center text-grey-700 pb-6">
      <p>
        All
        <a href="https://crowfall.com" class="text-grey-darker">Crowfall</a>
        material on this site is used with the limited permission of ArtCraft
        Entertainment. No official affiliation or endorsement by ArtCraft
        Entertainment is stated or implied.
      </p>
      <p>
        <a
          href="https://github.com/MalekaiProject"
          class="no-underline text-grey-darker"
          >Project Malekai © 2018</a
        >
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 303.9 315.1"
        class="h-24 w-24 text-gray-100 fill-current text-center inline pt-4 mb-2 dropshadow"
      >
        <path
          d="M290.7 179.6c-4.1-5.3-10.1-14.1-18-26.3-8-12.2-15.9-30.5-23.9-55-4.4-13.5-9.8-26.2-16-38.1-5.2-9.6-10.9-18.6-17.2-27.1-5.9-8-13.7-14.7-23.4-20-1.2-.7-2.4-1.3-3.6-1.9-9.8-4.9-21.5-8.5-34.9-10.9-.5-.1-.9-.2-1.4-.2h-.7c-.5 0-.9.1-1.4.2-13.4 2.4-25 6-34.9 10.9-1.2.6-2.4 1.2-3.6 1.9-9.6 5.3-17.4 12-23.4 20-6.3 8.5-12.1 17.6-17.2 27.1-6.3 11.9-11.6 24.6-16 38.1-7.9 24.4-15.9 42.8-23.9 55-7.9 12.2-13.9 21-18 26.3C-1.6 199-4 216.8 6.1 233c10.1 16.2 24.4 30.4 42.9 42.4s40.1 22.8 65 32.4c12.6 4.8 25.2 7.2 37.9 7.1v.1c12.7 0 25.4-2.4 38-7.2 24.8-9.6 46.5-20.4 65-32.4s32.8-26.1 42.9-42.4c10.1-16.2 7.7-34-7.1-53.4m-32.3 10.2c4.1 14.6 4.2 26.6.3 36-3.9 9.4-8.6 17.4-14.2 23.9-5.5 6.5-14.3 14-26.2 22.5 21.4-18 30.5-43.1 27.3-75.4-4-26.7-11.5-46.1-22.4-58.1-10.5-11.6-33.7-20.8-69.5-27.6-.7-.1-1.3-.2-2-.3v-.1c-.7.1-1.3.3-2 .4-35.9 6.8-59 16-69.5 27.6-10.9 12-18.4 31.4-22.4 58.1-3.1 32.3 6 57.4 27.3 75.3-11.9-8.4-20.7-15.9-26.2-22.4-5.6-6.5-10.3-14.4-14.2-23.9-3.9-9.4-3.8-21.4.3-36 4.1-14.6 10.6-29.4 19.4-44.5 8.7-14.9 20.8-29.5 36.1-44l.2-.1c-9 10.3-14.6 19.1-16.6 26.4 2.1-2.3 7.7-6 16.8-11.1 9-5.1 19.5-10.8 31.4-17.2 5.8-3.1 10.5-5.6 14-7.6 1.8-.9 3.6-1.4 5.3-1.5 1.8.1 3.6.6 5.3 1.5 3.5 2 8.1 4.5 13.9 7.6 12 6.4 22.4 12.1 31.5 17.2 9.1 5.1 14.7 8.8 16.8 11.1-2-7.3-7.6-16.1-16.6-26.4l.2.1c15.4 14.5 27.4 29.1 36.1 44 9 15 15.5 29.9 19.6 44.5M150.2 10.6l1.5-.3 1.5.3c.2.1.4.1.5.1.6.1 1.2.3 1.8.4 2.7.6 5.3 1.2 7.7 1.9 15.7 4.3 27.5 10.4 35.3 18.3 9.8 10 16.3 18 19.4 23.9l-31.2-15.8c-12.6-5.9-23.6-5.4-33 1.6-.2.1-.4.3-.5.4l-1.5 1.2-1.5-1.2c-.1-.1-.3-.3-.5-.4-9.4-7-20.4-7.5-33-1.6L85.6 55.2c3.1-5.9 9.6-13.8 19.4-23.9 7.8-7.9 19.5-14 35.3-18.3 2.4-.7 5-1.3 7.7-1.9.6-.1 1.2-.3 1.8-.4.1 0 .2 0 .4-.1M98.8 131.8c3.8-.5 8.3-.1 13.5 1.2 12.9 5.1 22.1 11.1 27.7 17.9-2.9 1.2-7.2 2-12.9 2.5l-6.2-1.2c-4.8-1.1-9-2.3-12.5-3.7-6.2-2.6-9.4-8.2-9.6-16.7m-9.1 73.1l2.7-6.2c.3 1.7.8 5.4 1.5 11.3.2 1.9.4 3.6.6 5.1v.5h.1c.3 2.1.6 3.7.9 4.9l.1.1c.6 3.1 1.8 7.3 3.6 12.5 1.6 4.8 3.4 9.5 5.1 14.1-1.8-4.9-2.4-11.9-2-20.9l1.1-10.2v-.1c.2-.1.4-.1.6-.2.5 4.2 2.5 9.6 5.8 16.2-.7-7.5-.1-13.5 1.8-17.8.5-1.1 1-2.2 1.5-3.2 8.8-4.6 13.9-7.5 15.4-8.6 1.5-.9 2.7-1.6 3.7-2.2 3.2-1.8 4.8-2.7 4.8-2.8.1-.1.9.5 2.4 1.8 1.4 1.2 2.3 1.9 2.9 2.3.4.3 2.1.5 5.1.6h8.8c3-.1 4.8-.3 5.1-.6.5-.3 1.5-1.1 2.9-2.3 1.5-1.3 2.2-1.8 2.4-1.8 0 .1 1.6 1 4.8 2.8 1 .6 2.2 1.3 3.7 2.2 1.5 1.1 6.7 4 15.5 8.6.5 1 1 2 1.5 3.2 1.9 4.4 2.5 10.3 1.8 17.8 3.4-6.6 5.3-12 5.8-16.2.2.1.4.1.6.2v.1l1.1 10.2c.5 9-.2 16-2 20.9 1.8-4.6 3.5-9.2 5.1-14.1 1.8-5.2 3-9.4 3.6-12.5l.1-.1c.3-1.1.6-2.7.9-4.9h.1v-.6c.2-1.5.4-3.1.6-5.1.7-5.9 1.2-9.6 1.5-11.3l2.7 6.2c-3.7 27.1-7.4 42.5-11.2 46-3.8 3.4-8.5 7.1-14.2 11.1-16.6 11-28.9 16.5-36.6 16.6v-.1c-7.8-.1-20-5.6-36.6-16.5-5.7-4-10.4-7.7-14.2-11.2-4.1-3.3-7.8-18.6-11.5-45.8m51.9-19.1c2.2.8 3.7 1.3 4.7 1.4 1.5.4 2.7.7 3.7.8.8.1 1.4.2 1.7.1h.2c.3.1.9 0 1.7-.1.9-.1 2.1-.4 3.7-.8.9-.1 2.5-.6 4.7-1.4 1.5-.6 3.1-1.6 4.9-2.9l.2-.2 1 2.8c-1.5 1.9-3.9 3.5-7.2 4.7-.7 1.8-3 3-7.1 3.6h-.2l-.9.1h-1.4l-.9-.1h-.2c-4.1-.5-6.5-1.7-7.1-3.6-3.3-1.2-5.7-2.7-7.2-4.7l1-2.8.2.2c1.4 1.4 3 2.3 4.5 2.9m49.5-52.8c5.2-1.3 9.7-1.7 13.5-1.2-.1 8.5-3.3 14.1-9.6 16.7-3.5 1.4-7.7 2.6-12.5 3.7l-6.2 1.2c-5.7-.5-10-1.3-12.9-2.5 5.6-6.8 14.9-12.8 27.7-17.9z"
        />
      </svg>
    </div>
  </footer>
</template>

<script>
import FooterArticle from './FooterArticle'

export default {
  components: {
    FooterArticle
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>
