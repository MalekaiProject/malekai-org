<template>
  <div class="max-w-screen-xl mx-auto">
    <MalekaiHeader />
    <div id="malekaiContent" class="container md:px-0 mx-auto order-last">
      <div class="flex flex-wrap justify-between pt-1">
        <!-- Version Tracker Section -->
        <div class="w-full md:w-2/6 p-6 flex flex-col flex-grow">
          <div
            style="background-image: url('/images/cf-bg-circle.webp')"
            class="flex-1 bg-white bg-cover bg-no-repeat bg-bottom rounded overflow-hidden shadow-lg border-gray-300 border-solid border-2"
          >
            <div class="px-4 py-6 w-full">
              <div class="text-sm text-center">
                <h2 class="mb-4 font-bold text-gray-700 text-sm">
                  Crowfall Patch Tracker
                </h2>
                <div class="mb-2">
                  <span class="font-medium text-gray-800">Live Server</span>
                  updated
                  <span class="text-red-700">
                    {{ crowfallVersion.live }}
                  </span>
                </div>
                <div class="mb-2">
                  <span class="font-medium text-gray-800">Test Server</span>
                  updated
                  <span class="text-red-700">
                    {{ crowfallVersion.test }}
                  </span>
                </div>
                <div class="">
                  <span class="font-medium text-gray-800">Malekai.org</span>
                  updated
                  <span class="text-red-700">
                    {{ crowfallVersion.malekai }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--  End Version Tracker Section -->
          <h2
            style="background-image: url('/images/cf-widget3.webp')"
            class="h-24 w-full bg-contain bg-center bg-no-repeat rounded-t p-3 my-4"
          ></h2>
          <!-- Malekai Library Status Section -->
          <div
            style="background-image: url('/images/cf-bg-square.webp')"
            class="flex-1 bg-white bg-cover bg-no-repeat bg-bottom rounded shadow-lg border-gray-300 border-solid border-2"
          >
            <div class="px-4 py-6 w-full">
              <div class="text-sm w-full">
                <div class="text-sm text-center">
                  <h2 class="mb-4 font-bold text-gray-700 text-sm">
                    Malekai Library Status
                  </h2>
                  <ul class="list-none">
                    <li class="mb-1">
                      Disciplines:
                      <span class="text-red-700 font-medium">{{
                        projectMalekai.disciplines.all
                      }}</span>
                    </li>
                    <li class="mb-1">
                      Races:
                      <span class="text-red-700 font-medium">{{
                        projectMalekai.disciplines.races
                      }}</span>
                    </li>
                    <li class="mb-1">
                      Classes:
                      <span class="text-red-700 font-medium">{{
                        projectMalekai.disciplines.classes
                      }}</span>
                    </li>
                    <li class="mb-1">
                      Talents:
                      <span class="text-red-700 font-medium">{{
                        projectMalekai.talents
                      }}</span>
                    </li>
                    <li class="mb-1">
                      Promotions:
                      <span class="text-red-700 font-medium">{{
                        projectMalekai.promotions
                      }}</span>
                    </li>
                    <li class="mb-1">
                      Powers:
                      <span class="text-red-700 font-medium">{{
                        projectMalekai.powers
                      }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Malekai Library Status Section -->
        <!--Red Post Section -->
        <div
          class="w-full md:w-4/6 p-6 flex flex-col flex-grow flex-shrink sm:h"
        >
          <div
            class="flex-1 bg-white rounded overflow-hidden shadow-lg bg-cover bg-no-repeat bg-bottom border-gray-300 border-solid border-2"
            style="background-image: url('/images/cf-bg-square.webp')"
          >
            <h2
              class="h-40 w-full flex flex-auto items-end justify-end font-bold uppercase text-white text-shadow bg-cover rounded-t px-3"
              style="background-image: url('/images/headers-templar.webp')"
            >
              Red Post Tracker
            </h2>
            <div class="px-6 py-4 w-full">
              <v-data-table
                :headers="rpCols"
                :items="rpRows"
                :items-per-page="25"
                loading
                search
                multi-sort
                hide-default-footer
                class="bg-transparent"
              >
                <template v-slot:body="{ items }">
                  <tbody class="">
                    <tr v-for="item in items" class="">
                      <td class=" w-1/5 truncate p-1">
                        <div class="text-red-700 font-bold text-sm">
                          <a :href="item.postURL">{{ item.author }}</a>
                        </div>
                        <div class="text-gray-600 text-xs">
                          {{ item.posted }}
                        </div>
                      </td>
                      <td class="w-4/5 truncate p-1">
                        <div class="font-bold text-gray-700 text-sm">
                          <a :href="item.postURL">{{ item.thread }}</a>
                        </div>
                        <div class="text-gray-600 text-xs">
                          in <a :href="item.postURL">{{ item.forum }}</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
              <div class="w-full text-right mt-2">
                <nuxt-link
                  to="/redtracker"
                  class="text-red-700 text-xs uppercase"
                  >More...</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <!--End Red Post Section -->
        <!--Changelog Section -->
        <div
          class="w-full md:w-3/5 p-6 flex flex-col flex-grow flex-shrink sm:h"
        >
          <div
            style="background-image: url('/images/cf-bg-circle.webp')"
            class="flex-1 bg-white rounded overflow-hidden shadow-lg bg-cover bg-no-repeat bg-bottom border-gray-300 border-solid border-2"
          >
            <h2
              style="background-image: url('/images/headers-crypt.webp')"
              class="h-32 w-full flex flex-auto items-end justify-end font-bold uppercase text-white text-shadow bg-cover rounded-t px-3"
            >
              Malekai Changelog
            </h2>
            <div class="px-6 py-4 w-full">
              <v-data-table
                :headers="clCols"
                :items="clRows"
                :items-per-page="15"
                loading
                search
                multi-sort
                hide-default-footer
                class="bg-transparent"
              >
                <template v-slot:body="{ items }">
                  <tbody class="">
                    <tr v-for="item in items" class="h-3">
                      <td class="p-1">
                        <img
                          src="/images/dagger-bullet.webp"
                          class="w-12 h-auto align-text-top mr-1 inline-block"
                        /><span
                          v-html="item.patch"
                          class="inline-block text-sm align-text-top truncate"
                        >
                          {{ item.patch }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
              <div class="w-full text-right mt-2">
                <nuxt-link
                  to="/changelog"
                  class="text-red-700 text-xs uppercase"
                  >More...</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <!--End Changelog Section -->
        <!--Malekai Bot Section -->
        <div
          class="w-full md:w-2/5 p-6 flex flex-col flex-grow flex-shrink sm:h"
        >
          <div
            class="flex-1 bg-white rounded overflow-hidden shadow-lg bg-cover bg-no-repeat bg-bottom border-gray-300 border-solid border-2"
            style="background-image: url('/images/cf-bg-square.webp')"
          >
            <h2
              class="h-32 w-full flex flex-auto items-end justify-end font-bold uppercase text-white text-shadow bg-cover rounded-t px-3"
              style="background-image: url('/images/headers-stoneborn.webp')"
            >
              MalekaiBot
            </h2>
            <div class="px-6 py-4 w-full h-auto text-xs md:text-sm">
              <div class="w-full h-auto">
                <p class="mt-4 mb-2">
                  MalekaiBot is a powerful tool for connecting your community to
                  whats going on in Crowfall. Research your favorite powers and
                  disciplines while theorycrafting in the privacy of your own
                  guild Discord server.
                </p>
                <p class="my-2">MalekaiBot currently features:</p>
                <ul class="ml-6 mb-4 list-disc text-xs">
                  <li class="mb-2">Subscriptions to Developer "Red" Posts</li>
                  <li class="mb-2">
                    Notifications when new Crowfall Articles are published
                  </li>
                  <li class="mb-2">
                    Announcements when new versions of the Crowfall client (Live
                    and Test) are available to download.
                  </li>
                  <li class="mb-1">
                    Search and Theorycrafting tools; across all things on
                    Malekai.org
                  </li>
                </ul>
                <p class="my-2">
                  MalekaiBot is proudly serving over
                  <span class="text-red-700 font-medium">{{
                    projectMalekai.discord.users
                  }}</span>
                  users across
                  <span class="text-red-700 font-medium">{{
                    projectMalekai.discord.servers
                  }}</span>
                  Crowfall community servers.
                </p>
                <a href="https://malekai.org/invite">
                  <button
                    class="bg-red-700 hover:bg-red-400 text-white uppercase font-medium py-2 px-4 mt-4 border border-red-900 rounded w-full"
                  >
                    <v-icon class="text-white" left>mdi-discord</v-icon>
                    Invite MalekaiBot
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--End 1/2 Section -->
      </div>
    </div>
    <MalekaiFooter />
  </div>
</template>

<script>
import { MalekaiHeader } from '@/components/MalekaiHeader'
import { MalekaiFooter } from '@/components/MalekaiFooter'

export default {
  components: {
    MalekaiFooter,
    MalekaiHeader
  },
  async asyncData({ app, error }) {
    // official red post feed, used in 'red post tracker'
    const redData = await app.$axios.get('https://api.malekai.org/red?limit=7')
    if (!redData) error({ statusCode: 404, message: 'redData: API Error' })

    // malekai overview stats, used in 'overview'
    const malekaiData = await app.$axios.get('https://api.malekai.org/')
    if (!malekaiData)
      error({ statusCode: 404, message: 'malekaiData: API Error' })

    // crowfall version data, used in 'overview'
    const dataVersion = await app.$axios.get('https://api.malekai.org/version')
    if (!dataVersion)
      error({ statusCode: 404, message: 'crowfallVersion: API Error' })

    // malekai generated changelog entries, used in'project malekai changelog'
    const changelogData = await app.$axios.get(
      'https://api.malekai.org/changelog?limit=13'
    )
    if (!changelogData)
      error({ statusCode: 404, message: 'changelogData: API Error' })

    // used to construct redpost table
    const rpRows = []
    for (const post of redData.data.results) {
      rpRows.push({
        id: post.id,
        author: post.author,
        postURL: post.url,
        thread: post.title,
        forum: post.content,
        posted: post.date
      })
    }
    // used to construct changelog table
    const clRows = []
    for (const note of changelogData.data.results) {
      clRows.push({
        id: note.id,
        patch: note.change
      })
    }

    function fixText(input) {
      const u = input.replace('-', ' ').split(' ')
      for (let i = 0; i < u.length; i++) {
        u[i] = u[i].charAt(0).toUpperCase() + u[i].substring(1)
      }
      return u.join(' ')
    }

    return {
      projectMalekai: malekaiData.data,
      crowfallVersion: dataVersion.data,
      rpCols: [
        {
          text: 'Author',
          value: 'author',
          sortable: false,
          filterable: true,
          align: 'start',
          class: 'text-left w-1/5 text-gray-700 text-sm pr-2'
        },
        {
          text: 'Thread',
          value: 'thread',
          sortable: false,
          filterable: false,
          class: 'pl-5 text-left w-4/5 text-gray-700 text-sm'
        }
      ],
      rpRows: rpRows,
      clCols: [
        {
          text: 'Recent Captured Changes',
          value: 'patch',
          sortable: false,
          align: 'start',
          class: 'text-gray-700 text-sm'
        }
      ],
      clRows: clRows
    }
  },
  head: {
    title: 'The Premier Crowfall Resource'
  }
}
</script>
