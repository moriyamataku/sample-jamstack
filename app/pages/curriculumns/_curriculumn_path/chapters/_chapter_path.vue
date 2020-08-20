<template>
  <div class="column contentArea">
    <StoryContent
      :chapterString="`${JSON.stringify(chapter)}`"
      :lessonString="`${JSON.stringify(lesson)}`"
    />
  </div>
</template>
<script>
import { createClient, contentTypes } from '~/plugins/contentful.js'
import StoryContent from '~/components/contents/StoryContent.vue'

const client = createClient()
const types = contentTypes()
export default {
  components: {
    StoryContent,
  },
  async asyncData({ params }) {
    const entries = await client.getEntries({
      content_type: types.curriculumn,
      'fields.path': params.curriculumn_path,
    })
    const curriculumn = entries.items ? entries.items[0] : null
    const currentChapter = params.chapter_path
      ? curriculumn.fields.chapterList.find((chapter) => {
          return chapter.fields.path === params.chapter_path
        })
      : null
    const chapter = currentChapter
      ? await client.getEntry(currentChapter.sys.id)
      : null
    const lesson =
      currentChapter && currentChapter.fields.lessons
        ? await client.getEntry(currentChapter.fields.lessons[0].sys.id)
        : null
    return {
      chapter,
      lesson,
    }
  },
}
</script>
<style lang="scss">
.contentArea {
  div.columns {
    width: 860px;
  }
}
</style>
