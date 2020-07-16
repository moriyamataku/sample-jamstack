<template>
  <section class="container">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="`/posts/${post.sys.id}`">{{
          post.fields.title
        }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
import { createClient, contentTypes } from '~/plugins/contentful.js'

const client = createClient()
const types = contentTypes()
export default {
  async asyncData({ params }) {
    // 記事一覧を取得
    const entries = await client.getEntries({
      content_type: types.post,
    })
    return {
      posts: entries.items,
    }
  },
}
</script>
