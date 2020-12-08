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
              <div class="w-3/5 p-0 m-0 mb-2">Crowfall Powers</div>
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
                :items-per-page="100"
                loading
                :search="search"
                class="bg-transparent"
              >
                <template v-slot:body="{ items }">
                  <tbody class="w-full">
                    <tr v-for="item in items" class="">
                      <td class="py-2 px-1 align-top w-16">
                        <nuxt-link
                          :to="`/powers/${item.id}`"
                          class="text-red-700 font-bold text-sm"
                        >
                          <img :src="`${item.icon}`" class="h-auto w-12 mt-1" />
                        </nuxt-link>
                      </td>
                      <td class="p-1 align-text-top">
                        <nuxt-link :to="`/powers/${item.id}`">
                          <span class="block font-medium mb-2">
                            {{ item.name }}
                          </span>

                          <span class="block flex flex-wrap justify-start mb-2">
                            <span
                              v-if="item.stats.cast_time"
                              class="italic text-xs mr-3 md:mr-5"
                            >
                              <img
                                src="/images/ui/power-casttime.png"
                                class="h-4 inline -mt-1"
                                alt="Cast Time"
                              />
                              {{ item.stats.cast_time }}
                            </span>
                            <span
                              v-if="item.stats.cooldown"
                              class="italic text-xs mr-3 md:mr-5"
                            >
                              <img
                                src="/images/ui/power-cooldown.png"
                                class="h-4 inline -mt-1"
                                alt="Cooldown"
                              />
                              {{ item.stats.cooldown }}
                            </span>

                            <span
                              v-if="item.stats.duration"
                              class="italic text-xs mr-3 md:mr-5"
                            >
                              <img
                                src="/images/ui/power-duration.png"
                                class="h-4 inline -mt-1"
                                alt="Duration"
                              />
                              {{ item.stats.duration }}
                            </span>
                            <span
                              v-if="item.stats.target"
                              class="italic text-xs mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-targetingtype.png"
                                class="h-4 inline -mt-1"
                                alt="Targeting Type"
                              />
                              {{ item.stats.target }}
                            </span>
                            <span
                              v-if="item.stats.max_targets"
                              class="italic text-xs mr-3 md:mr-5"
                            >
                              <img
                                src="/images/ui/power-maxtargets.png"
                                class="h-4 inline -mt-1"
                                alt="Max Targets"
                              />
                              {{ item.stats.max_targets }}
                            </span>
                            <span
                              v-if="item.stats.range"
                              class="italic text-xs mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-range.png"
                                class="h-4 inline -mt-1"
                                alt="Range"
                              />
                              {{ item.stats.range }}
                            </span>
                            <span
                              v-if="item.stats.lifetime && item.stats.velocity"
                              class="italic text-xs mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-range.png"
                                class="h-4 inline -mt-1"
                                alt="Range"
                              />
                              {{
                                item.stats.lifetime *
                                  parseInt(item.stats.velocity)
                              }}
                            </span>
                            <span
                              v-if="item.stats.restore"
                              class="italic text-xs mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-restore.png"
                                class="h-4 inline -mt-1"
                                alt="Restore"
                              />
                              {{ item.stats.restore }}
                              {{ item.stats.restore_type }}
                              {{ item.stats.restore_type_time }}
                            </span>
                            <span
                              v-if="
                                item.stats.buff_type_1 &&
                                  item.stats.buff_amount_1
                              "
                              class="italic text-xs mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-buff.png"
                                class="h-4 inline -mt-1"
                                alt="Buff"
                              />
                              {{ item.stats.buff_type_1 }}:
                              <span v-if="item.stats.buff_amount_1 > 0">+</span
                              >{{ item.stats.buff_amount_1 }}
                            </span>
                            <span
                              v-if="
                                item.stats.buff_type_2 &&
                                  item.stats.buff_amount_2
                              "
                              class="italic text-xs mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-buff.png"
                                class="h-4 inline -mt-1"
                                alt="Buff 2"
                              />
                              {{ item.stats.buff_type_2 }}:
                              <span v-if="item.stats.buff_amount_2 > 0">+</span
                              >{{ item.stats.buff_amount_2 }}
                            </span>
                          </span>
                          <span
                            v-if="item.description"
                            class="block italic text-xs mb-1"
                          >
                            {{ item.name }} {{ item.description }}
                          </span>
                        </nuxt-link>
                      </td>
                      <td class="w-0 m-0 p-0"></td>
                      <td class="w-0 m-0 p-0"></td>
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
import axios from 'axios'

export default {
  components: {
    MalekaiFooter,
    MalekaiHeader
  },
  async asyncData({ app, error, context }) {
    // malekai generated changelog entries, used in'project malekai changelog'
    let client = app.apolloProvider.defaultClient
    const powerData = await client.query({
      query: gql`
        query getPowers {
          allPowers {
            id
            name
            description
            shortDescription
            icon
            stats
            nextChain
            lastChain
          }
        }
      `
    })

    if (!powerData) error({ statusCode: 404, message: 'powerData: API Error' })

    // used to construct changelog table
    const rowData = []

    for (const power of powerData.data.allPowers) {
      power.description = power.description
        ? power.description.replace(/(\r\n|\\n|\r)/gm, '\n')
        : ''

      if (power.isBeneficial) power.tags.push('Beneficial')
      if (power.isBuff) power.tags.push('Buff')
      if (power.isGroupPower) power.tags.push('Group')
      if (power.isHeal) power.tags.push('Heal')

      if (power.name && power.name.length > 0) {
        rowData.push({
          id: power.id,
          icon: `./crowfall-images/images/powers/${power.icon}`,
          url: `./powers/${power.id}`,
          name: power.name,
          description: power.description,
          shortDescription: power.shortDescription,
          type: {
            beneficial: power.isBeneficial,
            buff: power.isBuff,
            group: power.isGroupPower,
            heal: power.isHeal
          },
          stats: power.stats,
          chain: {
            prev: power.lastChain,
            next: power.nextChain
          },
          tags: power.tags
        })
      }
    }

    return {
      search: '',
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
          text: 'Power',
          value: 'name',
          sortable: true,
          filterable: true,
          align: 'start',
          class: 'text-gray-700 text-sm align-text-top'
        },
        {
          text: '',
          value: 'stats.cast_time',
          sortable: false,
          filterable: true,
          align: 'start',
          class: 'w-0 m-0'
        },
        {
          text: '',
          value: 'description',
          sortable: false,
          filterable: true,
          align: 'start',
          class: 'w-0 m-0'
        }
      ],
      dataRows: rowData
    }
  },
  head: {
    title: 'Crowfall Powers'
  }
}
</script>
