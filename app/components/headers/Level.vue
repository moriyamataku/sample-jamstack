<template>
  <span
    :style="`color: ${color};background-color: ${background};`"
    class="level"
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
.level {
  width: 99px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: inline-block;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.03em;
}
</style>
