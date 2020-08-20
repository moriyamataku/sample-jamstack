<template>
  <div>
    <h1>Curriculumns</h1>
    <ul>
      <li v-for="(curriculumn, index) in curriculumns" :key="index">
        <nuxt-link :to="`/curriculumns/${curriculumn.fields.path}/chapters`">{{
          curriculumn.fields.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { createClient, contentTypes } from '~/plugins/contentful.js'

const client = createClient()
const types = contentTypes()
export default {
  async asyncData({ params }) {
    const entries = await client.getEntries({
      content_type: types.curriculumn,
    })
    return {
      curriculumns: entries.items,
    }
  },
}
</script>
