<template>
  <div>
    <div v-if="chapter" class="columns">
      <div class="column chapterTitleBox">
        <span class="chapterNo">
          {{ 'チャプター' + chapter.fields.chapterNo }}
        </span>
        <h2 class="chapterTitle">
          {{ chapter.fields.title }}
        </h2>
      </div>
    </div>
    <div v-if="lesson" class="columns">
      <div class="column chapterImageBox">
        <img
          class="chapterImage"
          :src="`https:${lesson.fields.mainImage.fields.file.url}`"
        />
      </div>
      <div class="column lessonBox">
        <a :href="`${player(chapter.fields.story)}`">
          <button class="playButton">
            ストーリーを見る
          </button>
        </a>
        <a :href="`${player(lesson)}`">
          <button class="playButton">
            レッスンスタート
          </button>
        </a>
        <!-- eslint-disable vue/no-v-html -->
        <div
          class="discription"
          v-html="toHtmlString(lesson.fields.description)"
        />
        <!-- eslint-able vue/no-v-html -->
        <div class="summaryList">
          <p>内容</p>
          <ul class="menu-list">
            <li
              v-for="(summary, index) in lesson.fields.summaryList"
              :key="index"
            >
              {{ summary.fields.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sanitizeHTML from 'sanitize-html'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { playerUrl } from '~/plugins/player.js'

export default {
  props: {
    chapterString: { type: String, default: '' },
    lessonString: { type: String, default: '' },
  },
  computed: {
    chapter() {
      return JSON.parse(this.chapterString)
    },
    lesson() {
      return JSON.parse(this.lessonString)
    },
  },
  methods: {
    player(lesson) {
      return playerUrl(lesson.fields.projectName, lesson.fields.scenarioPath)
    },
    toHtmlString(obj) {
      return sanitizeHTML(documentToHtmlString(obj))
    },
  },
}
</script>
<style lang="scss">
.chapterTitleBox {
  margin-top: 80px;
  text-align: center;
  margin-bottom: 35px;

  .chapterNo {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #111;
  }
  .chapterTitle {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.03em;
    color: #111;
  }
}

.chapterImageBox {
  text-align: right;
  padding: 0;
  margin-right: 15px;

  .chapterImage {
    position: relative;
    width: 370px;
  }
}

.lessonBox {
  text-align: left;
  padding: 0;
  margin-left: 15px;

  button.playButton {
    width: 175px;
    height: 36px;
    border: 1px solid #000;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #000;
    background-color: #fff;
    cursor: pointer;
  }
  a:nth-child(n + 2) {
    margin-left: 20px;
  }

  .discription {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #000;
    margin-top: 37px;
    width: 370px;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }

  .summaryList {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #000;
    margin-top: 25px;

    ul {
      list-style: disc;
    }
    li {
      margin-left: 20px;
    }
  }
}
</style>
