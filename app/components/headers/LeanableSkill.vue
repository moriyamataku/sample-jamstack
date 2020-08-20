<template>
  <span
    :style="`color: ${color};background-color: ${background};`"
    class="skill"
  >
    {{ name }}
  </span>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    color: { type: String, default: '' },
    background: { type: String, default: '' },
  },
}
</script>
<style lang="scss">
.skill {
  line-height: 30px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.03em;
  border-radius: 15px;
  padding: 7px 18px;
}
.skill:nth-child(n + 2) {
  margin-left: 18px;
}
</style>
