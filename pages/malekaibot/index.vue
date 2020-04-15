<template>
  <div>
    <MalekaiHeader />
    <div id="malekaiContent" class="container md:px-0 mx-auto order-last">
      <div class="flex flex-wrap justify-between pt-1">
        <!--Full Section -->
        <div class="w-full p-6 flex flex-col flex-grow flex-shrink">
          <div
            class="flex-1 bg-white rounded overflow-hidden shadow-lg bg-cover bg-no-repeat bg-bottom border-gray-300 border-solid border-2"
          >
            <div class="px-6 py-4 w-full">
              Coming Soon
            </div>
          </div>
        </div>
        <!--End Full Section -->
      </div>
    </div>
    <MalekaiFooter :articles="crowfallArticles" />
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
    // official crowfall articles, used in footer
    const articlesData = await app.$axios.get(
      'https://api.malekai.org/news?limit=3'
    )
    if (!articlesData)
      error({ statusCode: 404, message: 'articlesData: API Error' })

    // malekai generated changelog entries, used in'project malekai changelog'
    const disciplineData = await app.$axios.get(
      'https://api.malekai.org/disciplines?all=yes'
    )
    if (!disciplineData)
      error({ statusCode: 404, message: 'disciplineData: API Error' })

    // used to construct changelog table
    const dRows = []
    for (const discipline of disciplineData.data.results) {
      dRows.push({
        id: discipline.id,
        icon: `<a href="https://malekai.org/${discipline.data_type}/${discipline.type}/${discipline.id}"><img src="${discipline.icon}" class="w-full"></a>`,
        name: `<span class="block text-base">${discipline.name}</span><span class="block text-xs text-gray-600">${discipline.description}</span>`,
        powers: buildPowerIconList(discipline.grantsPowers),
        type: `<span class="capitalize">${discipline.type}</span>`,
        trait: `${discipline.trait}`
      })
    }

    function buildPowerIconList(powers) {
      const iconList = []
      for (const p of powers) {
        const icon = `<img src="https://cdn.malekai.network/images/powers/${p.id}.png" class="w-8 inline-block">`
        iconList.push(icon)
      }
      return iconList.join('')
    }

    return {
      crowfallArticles: articlesData.data.results,
      disciplineData: disciplineData.data.results,
      dCols: [
        {
          headerName: '',
          field: 'icon',
          sortable: false,
          headerClass: 'text-left mr-3 p-4', //tdClass: 'text-center pb-6 pt-2 mr-3 align-top',
          width: '50'
        },
        {
          headerName: 'Discipline',
          field: 'name',
          sortable: true,
          headerClass: 'p-4 text-center w-2/5' //tdClass: 'px-2 align-top w-2/5 pb-6'
        },
        {
          headerName: 'Powers',
          field: 'powers',
          sortable: true,
          headerClass: 'text-center p-4' //tdClass: 'align-top text-center pb-6'
        },
        {
          headerName: 'Type',
          field: 'type',
          sortable: true,
          headerClass: 'mx-auto text-center p-4' //tdClass: 'align-top text-center pb-6'
        }
      ],
      dRows: dRows
    }
  },
  head: {
    title: 'Welcome'
  }
}
</script>
