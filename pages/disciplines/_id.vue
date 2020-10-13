<template>
  <div>
    <MalekaiHeader />
    <div id="malekaiContent" class="container md:px-0 mx-auto order-last">
      <div class="flex flex-wrap justify-between pt-1">
        <!--Full Section -->
        <div
          class="w-full p-3 text-sm xl:text-base flex flex-col flex-grow flex-shrink self-start"
        >
          <div
            class="w-1/2 mx-auto flex-1 bg-white rounded overflow-hidden shadow-lg bg-cover bg-no-repeat bg-bottom border-gray-500 border-solid border-l-2 border-r-2 border-t-2 border-b-2 relative"
          >
            <div class="p-0 w-full flex flex-col flex-grow flex-shrink">
              <img
                src="/images/cf-frame-top-b.png"
                class="w-full h-auto -mt-1"
              />
              <div class="p-1 w-full flex mb-1">
                <div class="w-32 h-auto p-1">
                  <img :src="disciplineData.icon" class="w-auto inline" />
                </div>
                <div class="w-full pl-2 pt-2 capitalize">
                  <span
                    class="w-full block text-lg text-gray-700 font-bold tracking-wider"
                  >
                    {{ disciplineData.name }}</span
                  >
                  <nuxt-link
                    :to="disciplineData.typeLink"
                    class="text-gray-700 text-base capitalize tracking-wide"
                    >{{ disciplineData.type }} Discipline
                  </nuxt-link>
                </div>
              </div>
              <div
                v-if="
                  disciplineData.reqTrait && disciplineData.reqTrait.length > 0
                "
                class="px-4 w-full"
              >
                <h2 class="text-sm font-bold text-gray-700 tracking-wider mb-0">
                  Requirements
                </h2>
                <div
                  class="w-full ml-6 border-gray-700 border-solid border-l-5 mb-2"
                >
                  <span class="inline text-sm mr-2 tracking-wide">Trait</span
                  ><span
                    v-for="trait in disciplineData.reqTrait"
                    class="text-red-700 font-bold text-sm capitalize tracking-wide"
                    ><nuxt-link :to="trait.link">{{
                      trait.name
                    }}</nuxt-link></span
                  >
                </div>
              </div>
              <div
                v-if="disciplineData.stats && disciplineData.stats.length > 0"
                class="px-4 w-full"
              >
                <h2 class="text-sm font-bold text-gray-700 tracking-wider mb-0">
                  Statistics
                </h2>
                <div
                  class="w-full ml-6 border-gray-700 border-solid border-l-5 mb-2"
                >
                  <div v-for="stat in disciplineData.stats">
                    <span
                      class="inline text-gray-700 text-sm capitalize mr-2"
                      >{{ stat.name }}</span
                    >
                    <span
                      v-if="stat.value.search('%') != -1"
                      class="inline text-red-700 font-bold text-sm"
                    >
                      {{ stat.value }}
                    </span>
                    <span
                      v-if="stat.value > 0"
                      class="inline text-red-700 font-bold text-sm"
                      >+{{ stat.value }}</span
                    >
                    <span
                      v-if="stat.value < 0"
                      class="inline text-red-700 font-bold text-sm"
                      >{{ stat.value }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="px-4 w-full my-2">
                <h2 class="text-sm font-bold text-gray-700 tracking-wider mb-1">
                  Discipline
                </h2>
                <div
                  v-if="
                    disciplineData.grantsPowersDetails &&
                      disciplineData.grantsPowersDetails.length > 0
                  "
                  class="w-full ml-4 border-gray-500 border-solid border-l-4 pl-2 mb-2"
                >
                  <h3
                    class="text-xs font-medium uppercase text-gray-600 mb-1 tracking-widest"
                  >
                    Powers Granted
                  </h3>
                  <div
                    v-for="power in disciplineData.grantsPowersDetails"
                    class="block my-2"
                  >
                    <div class="flex">
                      <div class="flex-none">
                        <img
                          :src="`https://cdn.malekai.org/power/${power.id}.png`"
                          class="w-10 mr-1"
                        />
                      </div>

                      <div class="">
                        <nuxt-link :to="`/powers/${power.id}`">
                          <span
                            class="block text-gray-700 font-medium text-xs uppercase tracking-wide mr-2"
                            >{{ power.name }}</span
                          >
                          <span class="block font-normal text-xs italic">{{
                              power.shortDescription
                          }}</span>
                        </nuxt-link>

                        <!-- Power Details -->
                        <div class="mt-2 mr-3 align-text-top block clear-both">
                          <span class="block flex flex-wrap justify-start mb-1 ">
                            <span
                              v-if="power.stats.cast_time"
                              class="italic text-xs mt-1 mr-3 md:mr-5"
                            >
                              <img
                                src="/images/ui/power-casttime.png"
                                class="h-4 inline -mt-1"
                                alt="Cast Time"
                              />
                              {{ power.stats.cast_time }}
                            </span>
                            <span
                              v-if="power.stats.cooldown"
                              class="italic text-xs mt-1 mr-3 md:mr-5"
                            >
                              <img
                                src="/images/ui/power-cooldown.png"
                                class="h-4 inline -mt-1"
                                alt="Cooldown"
                              />
                              {{ power.stats.cooldown }}
                            </span>

                            <span
                              v-if="power.stats.duration"
                              class="italic text-xs mt-1 mr-3 md:mr-5"
                            >
                              <img
                                src="/images/ui/power-duration.png"
                                class="h-4 inline -mt-1"
                                alt="Duration"
                              />
                              {{ power.stats.duration }}
                            </span>
                            <span
                              v-if="power.stats.target"
                              class="italic text-xs mt-1 mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-targetingtype.png"
                                class="h-4 inline -mt-1"
                                alt="Targeting Type"
                              />
                              {{ power.stats.target }}
                            </span>
                            <span
                              v-if="power.stats.max_targets"
                              class="italic text-xs mt-1 mr-3 md:mr-5"
                            >
                              <img
                                src="/images/ui/power-maxtargets.png"
                                class="h-4 inline -mt-1"
                                alt="Max Targets"
                              />
                              {{ power.stats.max_targets }}
                            </span>
                            <span
                              v-if="power.stats.range"
                              class="italic text-xs mt-1 mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-range.png"
                                class="h-4 inline -mt-1"
                                alt="Range"
                              />
                              {{ power.stats.range }}
                            </span>
                            <span
                              v-if="
                                power.stats.lifetime && power.stats.velocity
                              "
                              class="italic text-xs mt-1 mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-range.png"
                                class="h-4 inline -mt-1"
                                alt="Range"
                              />
                              {{
                                power.stats.lifetime *
                                parseInt(power.stats.velocity)
                              }}
                            </span>
                            <span
                              v-if="power.stats.restore"
                              class="italic text-xs mt-1 mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-restore.png"
                                class="h-4 inline -mt-1"
                                alt="Restore"
                              />
                              {{ power.stats.restore }}
                              {{ power.stats.restore_type }}
                              {{ power.stats.restore_type_time }}
                            </span>
                            <span
                              v-if="
                                power.stats.buff_type_1 &&
                                  power.stats.buff_amount_1
                              "
                              class="italic text-xs mt-1 mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-buff.png"
                                class="h-4 inline -mt-1"
                                alt="Buff"
                              />
                              {{ power.stats.buff_type_1 }}:
                              <span v-if="power.stats.buff_amount_1 > 0">+</span
                              >{{ power.stats.buff_amount_1 }}
                            </span>
                            <span
                              v-if="
                                power.stats.buff_type_2 &&
                                  power.stats.buff_amount_2
                              "
                              class="italic text-xs mt-1 mr-3 md: mr-5"
                            >
                              <img
                                src="/images/ui/power-buff.png"
                                class="h-4 inline -mt-1"
                                alt="Buff 2"
                              />
                              {{ power.stats.buff_type_2 }}:
                              <span v-if="power.stats.buff_amount_2 > 0">+</span
                              >{{ power.stats.buff_amount_2 }}
                            </span>
                          </span>
                          <span
                            v-if="power.description"
                            class="block italic text-xs mb-1"
                          >
                            {{ power.name }} {{ power.description }}
                          </span>
                        </div>
                        <!-- End Power Details -->
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="
                    disciplineData.grantsSlot &&
                      disciplineData.grantsSlot.length > 0
                  "
                  class="w-full ml-4 border-gray-500 border-solid border-l-4 pl-2 mb-2"
                >
                  <h3
                    class="text-xs font-medium uppercase text-gray-600 tracking-widest mb-1"
                  >
                    Slots Granted
                  </h3>
                  <div v-for="slot in disciplineData.grantsSlot">
                    <span class="text-gray-700 text-sm capitalize ml-3"
                      >{{ slot }}
                    </span>
                  </div>
                </div>
                <div
                  v-if="
                    disciplineData.grantsEquip &&
                      disciplineData.grantsEquip.length > 0
                  "
                  class="w-full ml-4 border-gray-500 border-solid border-l-4 pl-2 mb-2"
                >
                  <h3
                    class="text-xs font-medium uppercase text-gray-600 tracking-widest mb-1"
                  >
                    Equips Granted
                  </h3>
                  <div v-for="equip in disciplineData.grantsEquip">
                    <span class="text-gray-700 text-sm capitalize ml-3"
                      >{{ equip }}
                    </span>
                  </div>
                </div>
                <div
                  v-if="
                    disciplineData.grantsTrait &&
                      disciplineData.grantsTrait.length > 0
                  "
                  class="w-full ml-4 border-gray-500 border-solid border-l-4 pl-2 mb-2"
                >
                  <h3
                    class="text-xs font-medium uppercase text-gray-600 tracking-widest mb-1"
                  >
                    Traits Granted
                  </h3>
                  <div v-for="trait in disciplineData.grantsTrait">
                    <span class="text-gray-700 text-sm capitalize ml-3"
                      >{{ trait.name }}
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="/images/cf-frame-top-a.png"
                class="w-1/3 h-auto mx-auto my-2"
              />
              <div
                v-if="disciplineData.description"
                class="px-4 w-full whitespace-pre-line -mt-3"
              >
                {{ disciplineData.description }}
              </div>
              <div
                v-if="disciplineData.lore"
                class="px-4 w-full italic text-xs xl:text-sm my-2"
              >
                {{ disciplineData.lore }}
              </div>
              <img
                src="/images/cf-frame-bottom-b.png"
                class="w-full h-auto -mb-1"
              />
            </div>
          </div>
        </div>
        <!--Patchnotes Section -->
        <div class="w-full p-3 flex flex-col flex-grow flex-shrink">
          <div class="w-full flex flex-col flex-grow flex-shrink ">
            <v-data-table
              :headers="clCols"
              :items="clRows"
              :items-per-page="10"
              loading
              search
              multi-sort
              hide-default-footer
              class="bg-transparent px-6"
            >
              <template v-slot:body="{ items }">
                <tbody class="">
                  <tr v-for="item in items" class="h-3">
                    <td class="p-1 overflow-auto w-full">
                      <img
                        src="/images/dagger-bullet.webp"
                        class="w-12 h-auto align-text-top mr-1 float-left"
                      /><span
                        v-html="item.patch"
                        class="inline text-xs align-text-top"
                      >
                        {{ item.patch }}
                      </span>
                      <span class="inline text-xs align-text-top italic"
                        >({{ item.date }})</span
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-data-table>
          </div>
        </div>
        <!--Patchnotes Section -->
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
  async asyncData({ app, params, error }) {
    //${params.id}
    // malekai generated changelog entries, used in'project malekai changelog'
    const disciplineData = await app.$axios.get(
      `https://api.malekai.org/disciplines/${params.id}`
    )
    if (!disciplineData)
      error({ statusCode: 404, message: 'disciplineData: API Error' })

    const patchnotesData = await app.$axios.get(
      `https://api.malekai.org/changelog/discipline/${params.id}`
    )
    if (!patchnotesData)
      error({ statusCode: 404, message: 'patchnotesData: API Error' })

    let disciplineResults = disciplineData.data.results[0]
    disciplineResults.description = disciplineResults.description
      ? disciplineResults.description.replace(/(\r\n|\\n|\r)/gm, '\n')
      : ''
    disciplineResults.lore = disciplineResults.lore
      ? disciplineResults.lore.replace(/(\r\n|\\n|\r)/gm, '\n')
      : ''
    disciplineResults.trait.forEach(trait => {
      trait.link = trait.name
        ? trait.name
            .toLowerCase()
            .replace(/[\W_]+/g, ' ')
            .replace(' ', '-')
        : ''
    })

    let powerData = await Promise.all(disciplineResults.grantsPowers.map(power => app.$axios.get(
      `https://api.malekai.org/powers/${power.id}`
    )))

    disciplineResults.powerDetails = powerData.flatMap(result => result.data.results)

    disciplineResults.powerDetails.forEach(power => power.description = power.description
      ? power.description.replace(/(\r\n|\\n|\r)/gm, '\n')
      : '')

    let typeLink = `/disciplines/${disciplineResults.type}/`

    let discipline = {
      id: disciplineResults.id,
      icon: `https://cdn.malekai.org/discipline/${disciplineResults.icon}`,
      name: disciplineResults.name,
      description: disciplineResults.description,
      grantsPowers: disciplineResults.grantsPowers,
      grantsPowersDetails: disciplineResults.powerDetails,
      grantsEquip: disciplineResults.grantsEquip,
      grantsSlot: disciplineResults.grantsSlot,
      grantsTrait: disciplineResults.grantsTrait,
      type: disciplineResults.type,
      typeLink: typeLink,
      reqTrait: disciplineResults.trait,
      stats: disciplineResults.stats,
      lore: disciplineResults.lore
    }

    // used to construct changelog table
    const clRows = []
    for (const note of patchnotesData.data.results) {
      clRows.push({
        id: note.id,
        patch: note.change,
        date: note.changedate
      })
    }

    return {
      search: '',
      disciplineData: discipline,
      clCols: [
        {
          text: 'Recent Changes',
          value: 'patch',
          sortable: false,
          align: 'start',
          class: 'text-gray-700 text-sm'
        }
      ],
      clRows: clRows
    }
  },
  head() {
    return {
      title: this.disciplineData.name,
      meta: [
        {
          property: 'og:description',
          content: this.content
        },
        {
          property: 'og:image',
          content: this.disciplineData.icon
        }
      ]
    }
  }
}
</script>
