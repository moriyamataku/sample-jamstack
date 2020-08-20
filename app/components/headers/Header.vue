<template>
  <div
    :style="`background-color: ${curriculumn.fields.mainColor};`"
    class="curriculumnBox"
  >
    <div class="leftBox">
      <img
        class="mainImage"
        :src="`https:${curriculumn.fields.mainCharactor.fields.file.url}`"
      />
    </div>
    <div class="centerBox">
      <div class="levelBox">
        <Level
          :name="`${field(curriculumn.fields.level, 'name')}`"
          :color="`${field(curriculumn.fields.level, 'color')}`"
          :background="`${field(curriculumn.fields.level, 'backgroundColor')}`"
        />
      </div>
      <h1 class="title">{{ curriculumn.fields.title }}</h1>
      <p class="leadText">{{ curriculumn.fields.leadText }}</p>
    </div>
    <div class="rightBox">
      <p class="skillTitle">ここで学べるスキル</p>
      <div>
        <Skill
          v-for="(skill, index) in curriculumn.fields.leanableSkills"
          :key="index"
          :name="`${field(skill, 'name')}`"
          :color="`${field(skill, 'color')}`"
          :background="`${field(skill, 'backgroundColor')}`"
        />
      </div>
      <a :href="`https:${curriculumn.fields.campMaterial.fields.file.url}`">
        <button
          class="downloadButton"
          :style="`background-color: ${curriculumn.fields.mainColor};`"
        >
          素材のダウンロード
        </button>
      </a>
    </div>
  </div>
</template>
<script>
import Level from '~/components/headers/Level.vue'
import Skill from '~/components/headers/LeanableSkill.vue'

export default {
  components: {
    Level,
    Skill,
  },
  props: {
    curriculumnString: { type: String, default: '' },
  },
  computed: {
    curriculumn() {
      return JSON.parse(this.curriculumnString)
    },
  },
  methods: {
    field(object, property) {
      return object ? object.fields[property] : ''
    },
  },
}
</script>
<style lang="scss">
.curriculumnBox {
  overflow: hidden;
  height: 210px;
  color: white;
  width: 1335px;

  .leftBox {
    float: left;
    width: 535px;
    text-align: center;

    .mainImage {
      position: relative;
    }
  }

  .centerBox {
    float: left;
    width: 500px;

    .levelBox {
      margin-top: 40px;
      margin-bottom: 20px;
      height: 30px;
    }

    h1.title {
      color: white;
      font-style: normal;
      font-weight: bold;
      font-size: 35px;
      line-height: 41px;
      letter-spacing: 0.03em;
      margin-bottom: 16px;
    }

    .leadText {
      font-size: 16px;
      font-weight: bold;
      white-space: pre-line;
    }
  }

  .rightBox {
    float: left;
    width: 300px;
    margin-top: 40px;
    height: 135px;
    border-left-style: solid;
    border-left-width: thin;
    padding-left: 40px;

    .skillTitle {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.03em;
      margin-bottom: 18px;
    }

    button.downloadButton {
      width: 218px;
      height: 36px;
      border: 1px solid #fff;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 24px;
      letter-spacing: 0.03em;
      color: #fff;
      margin-top: 25px;
      cursor: pointer;
    }
  }
}
</style>
