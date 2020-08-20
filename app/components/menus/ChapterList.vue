<template>
  <ul class="menu-list chapterList">
    <div v-if="prologue || epilogue" class="dialogue">
      <div v-show="prologue" class="prologue">
        <font-awesome-layers class="fa">
          <font-awesome-icon icon="download" />
        </font-awesome-layers>
        <a :href="`${player(prologue.fields.story)}`">プロローグ</a>
      </div>
      <div v-show="epilogue" class="epilogue">
        <font-awesome-layers class="fa">
          <font-awesome-icon icon="download" />
        </font-awesome-layers>
        <a :href="`${player(epilogue.fields.story)}`">エピローグ</a>
      </div>
    </div>
    <li
      v-for="(chapter, index) in chapters"
      :key="index"
      class="chapterBox"
      :class="`
        ${chapter.fields.path === chapterPath ? 'selected' : ''}
      `"
      :style="`border-color: ${
        chapter.fields.path === chapterPath
          ? curriculumn.fields.mainColor
          : '#fff'
      };`"
    >
      <nuxt-link
        :to="`/curriculumns/${curriculumn.fields.path}/chapters/${chapter.fields.path}`"
      >
        <div class="chapterInner">
          <div class="icon-box">
            <font-awesome-layers
              class="fa-2x"
              :style="`background-color: ${curriculumn.fields.mainColor};`"
            >
              <font-awesome-icon icon="bookmark" />
            </font-awesome-layers>
          </div>
          <div>
            <span
              class="chapter-no"
              :style="`color: ${curriculumn.fields.mainColor};`"
            >
              {{ 'チャプター' + chapter.fields.chapterNo }}
            </span>
            <p class="title" :style="`color: ${curriculumn.fields.mainColor};`">
              {{ chapter.fields.title }}
            </p>
          </div>
        </div>
      </nuxt-link>
      <div
        v-if="index < chapters.length - 1"
        class="connection-line"
        :style="`background-color: ${curriculumn.fields.mainColor};`"
      />
    </li>
  </ul>
</template>
<script>
import { playerUrl } from '~/plugins/player.js'

export default {
  props: {
    curriculumnString: { type: String, default: '' },
    prologueString: { type: String, default: '' },
    epilogueString: { type: String, default: '' },
    chapterPath: { type: String, default: '' },
  },
  computed: {
    curriculumn() {
      return JSON.parse(this.curriculumnString)
    },
    prologue() {
      return JSON.parse(this.prologueString)
    },
    epilogue() {
      return JSON.parse(this.epilogueString)
    },
    chapterList() {
      return this.curriculumn.fields.chapterList
    },
    chapters() {
      return this.chapterList.filter(
        (chapter) =>
          chapter.fields.chapterNo !== '0' && chapter.fields.chapterNo !== '99'
      )
    },
  },
  methods: {
    player(lesson) {
      return playerUrl(lesson.fields.projectName, lesson.fields.scenarioPath)
    },
  },
}
</script>
<style lang="scss">
.chapterList {
  // margin-top: 80px;
  margin-bottom: 40px;

  .dialogue {
    overflow: hidden;
    margin: auto 0;
    padding: 0 95px;
    margin-top: 40px;
    margin-bottom: 20px;

    .prologue {
      float: left;
      overflow: hidden;

      div {
        float: left;
      }
      .fa-layers {
        border-radius: 50%;
        padding: 16px;
        color: #fff;
        background-color: #9aa0a8;
      }
      a {
        float: left;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: 0.03em;
        text-decoration-line: underline;
        color: #000;
        // margin-top: 5px;
      }
    }
    .epilogue {
      float: left;
      overflow: hidden;
      margin-left: 20px;

      div {
        float: left;
      }
      .fa-layers {
        border-radius: 50%;
        padding: 16px;
        color: #fff;
        background-color: #9aa0a8;
      }
      a {
        float: left;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: 0.03em;
        text-decoration-line: underline;
        color: #000;
        // margin-top: 5px;
      }
    }
  }

  .chapterBox {
    height: 103px;
    padding-left: 10px;
    position: relative;
    border-left-width: 10px;
    border-left-style: solid;
    opacity: 0.4;

    .chapterInner {
      margin: 20px 0 20px 50px;
      overflow: hidden;
      color: white;
      background-color: white;

      .icon-box {
        float: left;
        margin-right: 10px;

        .fa-layers {
          border-radius: 50%;
          padding: 25px;
        }
      }
      .chapter-no {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
      }
      .title {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.03em;
      }
    }
    .connection-line {
      position: absolute;
      top: 70px;
      left: 96px;
      width: 0.2em;
      height: 61px;
      z-index: 10;
    }
  }
  .chapterBox.selected {
    opacity: 1;
  }
}
</style>
