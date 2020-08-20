<template>
  <div class="main-content columns is-fullheight">
    <aside class="menu column is-narrow leftMenu">
      <div id="tabs-with-content">
        <div class="tabs is-centered">
          <ul>
            <li :class="{ 'is-active': isActive == 'chapterList' }">
              <a @click="isActive = 'chapterList'">チャプターリスト</a>
            </li>
            <li :class="{ 'is-active': isActive == 'materials' }">
              <a @click="isActive = 'materials'">補助教材</a>
            </li>
          </ul>
        </div>
        <div>
          <section
            class="tab-content"
            :class="{ 'is-active': isActive == 'chapterList' }"
          >
            <ChapterList
              :curriculumnString="`${JSON.stringify(curriculumn)}`"
              :prologueString="`${JSON.stringify(prologue)}`"
              :epilogueString="`${JSON.stringify(epilogue)}`"
              :chapterPath="$route.params.chapter_path"
            />
          </section>
          <section
            class="tab-content"
            :class="{ 'is-active': isActive == 'materials' }"
          >
            <pre>{{ '準備中' }}</pre>
          </section>
        </div>
      </div>
    </aside>
    <nuxt-child />
  </div>
</template>
<script>
import { createClient, contentTypes } from '~/plugins/contentful.js'
import ChapterList from '~/components/menus/ChapterList.vue'

const client = createClient()
const types = contentTypes()
export default {
  components: {
    ChapterList,
  },
  async asyncData({ params }) {
    const entries = await client.getEntries({
      content_type: types.curriculumn,
      'fields.path': params.curriculumn_path,
    })

    const curriculumn = entries.items ? entries.items[0] : null

    const prologueObj = curriculumn.fields.chapterList.find((chapter) => {
      return chapter.fields.chapterNo === '0'
    })
    const prologue = prologueObj
      ? await client.getEntry(prologueObj.sys.id)
      : null

    const epilogueObj = curriculumn.fields.chapterList.find((chapter) => {
      return chapter.fields.chapterNo === '99'
    })
    const epilogue = epilogueObj
      ? await client.getEntry(epilogueObj.sys.id)
      : null

    return {
      curriculumn,
      prologue,
      epilogue,
    }
  },
  data: () => ({
    isActive: 'chapterList',
  }),
}
</script>
<style lang="scss">
button {
  cursor: pointer;
}
aside.leftMenu {
  width: 490px;
  margin-left: 12px;
  padding: 0;

  .tabs {
    ul {
      border-bottom-style: none;
    }
    li {
      background-color: #fff;
      z-index: 10;
      width: 230px;

      a {
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.03em;
        height: 50px;
      }
    }
    li:nth-child(n + 2) {
      margin-left: 18px;
    }
  }
}
section.tab-content {
  display: none;
}
section.tab-content.is-active {
  display: block;
}
</style>
