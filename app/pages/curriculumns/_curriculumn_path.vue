<template>
  <div>
    <Header :curriculumnString="`${JSON.stringify(curriculumn)}`" />
    <nuxt-child />
  </div>
</template>
<script>
import { createClient, contentTypes } from '~/plugins/contentful.js'
import Header from '~/components/headers/Header.vue'

const client = createClient()
const types = contentTypes()
export default {
  components: {
    Header,
  },
  async asyncData({ params }) {
    const entries = await client.getEntries({
      content_type: types.curriculumn,
      'fields.path': params.curriculumn_path,
    })
    return {
      curriculumn: entries.items ? entries.items[0] : null,
    }
  },
}
</script>
