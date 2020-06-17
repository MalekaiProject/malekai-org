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

export default {
  components: {
    MalekaiFooter,
    MalekaiHeader
  },
  async asyncData({ app, params, error }) {
    const powerResults = await app.$axios.get(
      `https://api.malekai.org/powers/${params.id}`
    )
    if (!powerResults)
      error({ statusCode: 404, message: 'powerData: API Error' })

    const patchnotesData = await app.$axios.get(
      `https://api.malekai.org/changelog/power/${params.id}`
    )
    if (!patchnotesData)
      error({ statusCode: 404, message: 'patchnotesData: API Error' })

    let powerData = powerResults.data.results[0]
    powerData.description = powerData.description
      ? powerData.description.replace(/(\r\n|\\n|\r)/gm, '\n')
      : ''
    if (powerData.isBeneficial) powerData.tags.push('Beneficial')
    if (powerData.isBuff) powerData.tags.push('Buff')
    if (powerData.isGroupPower) powerData.tags.push('Group')
    if (powerData.isHeal) powerData.tags.push('Heal')
    let power = {
      id: powerData.id,
      icon: `https://cdn.malekai.org/power/${powerData.icon}`,
      url: `https://malekai.org/powers/${powerData.id}`,
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
        prev: powerData.lastChain,
        next: powerData.nextChain
      },
      tags: powerData.tags
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
      clRows: clRows
    }
  },
  head() {
    return {
      title: this.powerData.name
    }
  }
}
</script>
