<template>
  <div>
    <MalekaiHeader />
    <div id="malekaiContent" class="container md:px-0 mx-auto order-last">
      <div class="flex flex-wrap justify-between pt-1">
        <!--Full Section -->
        <div class="w-full p-3 flex flex-col flex-grow flex-shrink">
          <div
            class="flex-1 bg-white rounded overflow-hidden shadow-lg bg-cover bg-no-repeat bg-bottom border-gray-300 border-solid border-2 relative"
          >
            <div
              style="background-image: url('/images/headers-stoneborn.webp')"
              class="h-40 w-full flex flex-auto items-end justify-end font-bold uppercase text-white text-shadow bg-cover rounded-t px-3 mb-2"
            >
              <div class="w-3/5 p-0 m-0 mb-2">Crowfall Disciplines</div>
              <div
                class="w-2/5 p-0 m-0 align-right text-gray-300 placeholder-gray-400"
              >
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  class="ml-10 mb-2"
                  id="search"
                ></v-text-field>
              </div>
            </div>
            <div class="px-6 py-1 w-full">
              <v-data-table
                :headers="dataCols"
                :items="dataRows"
                :items-per-page="50"
                loading
                :search="search"
                multi-sort
                class="bg-transparent"
              >
                <template v-slot:body="{ items }">
                  <tbody class="w-full">
                    <tr v-for="item in items" class="">
                      <td class="p-2 align-top w-16">
                        <nuxt-link
                          :to="`/disciplines/${item.id}`"
                          class="text-red-700 font-bold text-sm "
                        >
                          <img :src="`${item.icon}`" class="h-auto w-12 mt-1" />
                        </nuxt-link>
                      </td>
                      <td class="p-1 w-1/3 align-text-top">
                        <nuxt-link :to="`/disciplines/${item.id}`">
                          <span class="block font-medium">{{ item.name }}</span>
                          <span
                            v-if="item.description"
                            class="block italic text-xs"
                          >
                            {{ item.description }}
                          </span>
                          <span v-else class="block italic text-xs">
                            {{ item.lore }}
                          </span>
                        </nuxt-link>
                      </td>
                      <td
                        class="px-2 align-text-top text-center capitalize text-sm"
                      >
                        <nuxt-link :to="`/disciplines/${item.type}`">
                          {{ item.type }}
                        </nuxt-link>
                      </td>
                      <td class="px-2 align-text-top text-center text-sm">
                        <span
                          v-if="item.reqTrait"
                          v-for="trait in item.reqTrait"
                          class=""
                        >
                          <nuxt-link :to="`/traits/${trait.link}`">
                            {{ trait.name }}
                          </nuxt-link>
                        </span>
                      </td>
                      <td class="p-1 w-2/5 align-text-top text-xs">
                        <ul v-if="item.grantsPowers" class="">
                          <li v-for="power in item.grantsPowers" class="">
                            <nuxt-link :to="`/powers/${power.id}`">
                              <span class="font-bold"
                                >{{ power.name }}
                                <span
                                  v-html="power.description"
                                  class="font-normal"
                                  >{{ power.description }}</span
                                ></span
                              >
                            </nuxt-link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
            </div>
          </div>
        </div>
        <!--End Full Section -->
      </div>
    </div>
    <MalekaiFooter />
  </div>
</template>

<script>
import { MalekaiHeader } from '@/components/MalekaiHeader'
import { MalekaiFooter } from '@/components/MalekaiFooter'
import gql from 'graphql-tag'

export default {
  components: {
    MalekaiFooter,
    MalekaiHeader
  },
  async asyncData({ app, error }) {
    // malekai generated changelog entries, used in'project malekai changelog'
    let client = app.apolloProvider.defaultClient
    const disciplineData = await client.query({
      query: gql`
        query getDisciplines {
          allDisciplines {
            id
            name
            type
            trait
            icon
            stats
            grantsPowers
            grantsSlot
            grantsTrait
            description
            lore
          }
        }
      `
    })

    if (!disciplineData)
      error({ statusCode: 404, message: 'disciplineData: API Error' })

    // used to construct changelog table
    const rowData = []

    for (const discipline of disciplineData.data.allDisciplines) {
      discipline.trait.forEach(trait => {
        trait.link = trait.name
          ? trait.name
              .toLowerCase()
              .replace(/[\W_]+/g, ' ')
              .replace(' ', '-')
          : ''
      })
      discipline.description = discipline.description
        ? discipline.description.replace(/(\r\n|\\n|\r)/gm, '\n')
        : ''

      rowData.push({
        id: discipline.id,
        icon: `https://cdn.malekai.org/discipline/${discipline.icon}`,
        url: `https://malekai.org/disciplines/${discipline.id}`,
        name: discipline.name,
        description: discipline.description,
        grantsPowers: discipline.grantsPowers,
        grantsEquip: discipline.grantsEquip,
        grantsSlot: discipline.grantsSlot,
        grantsTrait: discipline.grantsTrait,
        type: discipline.type,
        reqTrait: discipline.trait,
        stats: discipline.stats,
        lore: discipline.lore
      })
    }

    return {
      search: '',
      disciplineData: disciplineData.data.results,
      dataCols: [
        {
          text: '',
          value: 'icon',
          sortable: false,
          filterable: false,
          align: 'center',
          class: 'text-gray-700 text-sm align-text-top w-16'
        },
        {
          text: 'Name',
          value: 'name',
          sortable: true,
          filterable: true,
          align: 'start',
          class: 'text-gray-700 text-sm align-text-top'
        },
        {
          text: 'Type',
          value: 'type',
          sortable: true,
          filterable: true,
          align: 'center',
          class: 'px-2 text-gray-700 text-sm align-text-top text-center'
        },
        {
          text: 'Required Trait',
          value: 'reqTrait',
          sortable: true,
          filterable: true,
          align: 'center',
          class: 'px-2 text-gray-700 text-sm align-text-top text-center'
        },
        {
          text: 'Granted',
          value: 'grantsPowers',
          sortable: false,
          filterable: false,
          align: 'start',
          class: 'px-1 text-gray-700 text-sm align-text-top'
        }
      ],
      dataRows: rowData
    }
  },
  head: {
    title: 'Crowfall Disciplines'
  }
}
</script>
