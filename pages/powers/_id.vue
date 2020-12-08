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
              <div class="px-4">
                <div class="p-1 align-text-top">
                  <nuxt-link
                    :to="`/powers/${powerData.id}`"
                    class="text-red-700 font-bold text-sm"
                  >
                    <img
                      :src="`${powerData.icon}`"
                      class="h-auto w-20 inline"
                    />
                    <span class="font-medium inline align-middle h-auto">{{
                      powerData.name
                    }}</span>
                  </nuxt-link>
                </div>
                <div class="p-1 align-text-top block clear-both">
                  <span class="block flex flex-wrap justify-start mb-2">
                    <span
                      v-if="powerData.stats.cast_time"
                      class="italic text-xs mr-3 md:mr-5"
                    >
                      <img
                        src="/images/ui/power-casttime.png"
                        class="h-4 inline -mt-1"
                        alt="Cast Time"
                      />
                      {{ powerData.stats.cast_time }}
                    </span>
                    <span
                      v-if="powerData.stats.cooldown"
                      class="italic text-xs mr-3 md:mr-5"
                    >
                      <img
                        src="/images/ui/power-cooldown.png"
                        class="h-4 inline -mt-1"
                        alt="Cooldown"
                      />
                      {{ powerData.stats.cooldown }}
                    </span>

                    <span
                      v-if="powerData.stats.duration"
                      class="italic text-xs mr-3 md:mr-5"
                    >
                      <img
                        src="/images/ui/power-duration.png"
                        class="h-4 inline -mt-1"
                        alt="Duration"
                      />
                      {{ powerData.stats.duration }}
                    </span>
                    <span
                      v-if="powerData.stats.target"
                      class="italic text-xs mr-3 md: mr-5"
                    >
                      <img
                        src="/images/ui/power-targetingtype.png"
                        class="h-4 inline -mt-1"
                        alt="Targeting Type"
                      />
                      {{ powerData.stats.target }}
                    </span>
                    <span
                      v-if="powerData.stats.max_targets"
                      class="italic text-xs mr-3 md:mr-5"
                    >
                      <img
                        src="/images/ui/power-maxtargets.png"
                        class="h-4 inline -mt-1"
                        alt="Max Targets"
                      />
                      {{ powerData.stats.max_targets }}
                    </span>
                    <span
                      v-if="powerData.stats.range"
                      class="italic text-xs mr-3 md: mr-5"
                    >
                      <img
                        src="/images/ui/power-range.png"
                        class="h-4 inline -mt-1"
                        alt="Range"
                      />
                      {{ powerData.stats.range }}
                    </span>
                    <span
                      v-if="
                        powerData.stats.lifetime && powerData.stats.velocity
                      "
                      class="italic text-xs mr-3 md: mr-5"
                    >
                      <img
                        src="/images/ui/power-range.png"
                        class="h-4 inline -mt-1"
                        alt="Range"
                      />
                      {{
                        powerData.stats.lifetime *
                          parseInt(powerData.stats.velocity)
                      }}
                    </span>
                    <span
                      v-if="powerData.stats.restore"
                      class="italic text-xs mr-3 md: mr-5"
                    >
                      <img
                        src="/images/ui/power-restore.png"
                        class="h-4 inline -mt-1"
                        alt="Restore"
                      />
                      {{ powerData.stats.restore }}
                      {{ powerData.stats.restore_type }}
                      {{ powerData.stats.restore_type_time }}
                    </span>
                    <span
                      v-if="
                        powerData.stats.buff_type_1 &&
                          powerData.stats.buff_amount_1
                      "
                      class="italic text-xs mr-3 md: mr-5"
                    >
                      <img
                        src="/images/ui/power-buff.png"
                        class="h-4 inline -mt-1"
                        alt="Buff"
                      />
                      {{ powerData.stats.buff_type_1 }}:
                      <span v-if="powerData.stats.buff_amount_1 > 0">+</span
                      >{{ powerData.stats.buff_amount_1 }}
                    </span>
                    <span
                      v-if="
                        powerData.stats.buff_type_2 &&
                          powerData.stats.buff_amount_2
                      "
                      class="italic text-xs mr-3 md: mr-5"
                    >
                      <img
                        src="/images/ui/power-buff.png"
                        class="h-4 inline -mt-1"
                        alt="Buff 2"
                      />
                      {{ powerData.stats.buff_type_2 }}:
                      <span v-if="powerData.stats.buff_amount_2 > 0">+</span
                      >{{ powerData.stats.buff_amount_2 }}
                    </span>
                  </span>
                  <span
                    v-if="powerData.description"
                    class="block italic text-xs mb-1"
                  >
                    {{ powerData.name }} {{ powerData.description }}
                  </span>

                  <!-- Chained Powers -->
                  <div
                    id="chained-powers"
                    class="w-full"
                    v-if="
                      (powerData.chain.next &&
                        powerData.chain.next.length > 0) ||
                        (powerData.chain.prev &&
                          powerData.chain.prev.length > 0)
                    "
                  >
                    <h2
                      class="text-sm font-bold text-gray-700 tracking-wider mb-1"
                    >
                      Chained Powers
                    </h2>
                    <div
                      id="next-powers"
                      v-if="
                        powerData.chain.next && powerData.chain.next.length > 0
                      "
                      class="w-full ml-4 border-gray-500 border-solid border-l-4 pl-2 mb-2"
                    >
                      <h3
                        class="text-xs font-medium uppercase text-gray-600 mb-1 tracking-widest"
                      >
                        Next Powers
                      </h3>
                      <div v-for="power of powerData.chain.next">
                        <!-- Power Details Card TODO: Make this a re-usable component -->
                        <div id="power-details" class="flex my-2">
                          <div class="flex-none">
                            <img
                              :src="
                                `https://cdn.malekai.org/power/${power.id}.png`
                              "
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
                              <div
                                class="mt-2 mr-3 align-text-top block clear-both"
                              >
                                <span
                                  class="block flex flex-wrap justify-start mb-1 "
                                >
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
                                      power.stats.lifetime &&
                                        power.stats.velocity
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
                                    <span v-if="power.stats.buff_amount_1 > 0"
                                      >+</span
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
                                    <span v-if="power.stats.buff_amount_2 > 0"
                                      >+</span
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
                            </nuxt-link>
                          </div>
                        </div>
                        <!-- End Power Details -->
                      </div>
                    </div>
                    <div
                      id="prev-powers"
                      v-if="
                        powerData.chain.prev && powerData.chain.prev.length > 0
                      "
                      class="w-full ml-4 border-gray-500 border-solid border-l-4 pl-2 mb-2"
                    >
                      <h3
                        class="text-xs font-medium uppercase text-gray-600 mb-1 tracking-widest"
                      >
                        Previous Power
                      </h3>
                      <div v-for="power of powerData.chain.prev">
                        <!-- Power Details Card TODO: Make this a re-usable component -->
                        <div id="power-details-prev" class="flex my-2">
                          <div class="flex-none">
                            <img
                              :src="
                                `https://cdn.malekai.org/power/${power.id}.png`
                              "
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
                              <div
                                class="mt-2 mr-3 align-text-top block clear-both"
                              >
                                <span
                                  class="block flex flex-wrap justify-start mb-1 "
                                >
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
                                      power.stats.lifetime &&
                                        power.stats.velocity
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
                                    <span v-if="power.stats.buff_amount_1 > 0"
                                      >+</span
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
                                    <span v-if="power.stats.buff_amount_2 > 0"
                                      >+</span
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
                            </nuxt-link>
                          </div>
                        </div>
                        <!-- End Power Details -->
                      </div>
                    </div>
                  </div>
                  <!-- End Chained Powers -->
                </div>
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
import gql from 'graphql-tag'

export default {
  components: {
    MalekaiFooter,
    MalekaiHeader
  },
  async asyncData({ app, params, error }) {
    let client = app.apolloProvider.defaultClient
    async function getPower(id) {
      return client.query({
        query: gql`
            query getPower {
              Power(id: "${id}") {
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
    }
    const powerResults = await getPower(params.id)
    if (!powerResults)
      error({ statusCode: 404, message: 'powerData: API Error' })

    let powerData = powerResults.data.Power
    powerData.description = powerData.description
      ? powerData.description.replace(/(\r\n|\\n|\r)/gm, '\n')
      : ''
    if (powerData.isBeneficial) powerData.tags.push('Beneficial')
    if (powerData.isBuff) powerData.tags.push('Buff')
    if (powerData.isGroupPower) powerData.tags.push('Group')
    if (powerData.isHeal) powerData.tags.push('Heal')
    let power = {
      id: powerData.id,
      icon: `./crowfall-images/images/powers/${powerData.icon}`,
      url: `./powers/${powerData.id}`,
      name: powerData.name,
      description: powerData.description,
      shortDescription: powerData.shortDescription,
      type: {
        beneficial: powerData.isBeneficial,
        buff: powerData.isBuff,
        group: powerData.isGroupPower,
        heal: powerData.isHeal
      },
      stats: powerData.stats,
      chain: {
        prev: [],
        next: []
      },
      tags: powerData.tags
    }

    let nextPowers = await Promise.all(
      powerData.nextChain.map(id => getPower(id))
    )
    let prevPowers = await Promise.all(
      powerData.lastChain.map(id => getPower(id))
    )
    power.chain.next = nextPowers.map(result => result.data.results[0])
    power.chain.prev = prevPowers.map(result => result.data.results[0])

    return {
      search: '',
      powerData: power,
      clCols: [
        {
          text: 'Recent Changes',
          value: 'patch',
          sortable: false,
          align: 'start',
          class: 'text-gray-700 text-sm'
        }
      ],
      clRows: []
    }
  },
  head() {
    return {
      title: this.powerData.name
    }
  }
}
</script>
