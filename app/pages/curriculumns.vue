<template>
  <div>
    <header class="header">
      <nuxt-link
        tag="img"
        :src="require('~/assets/header_logo_white.svg')"
        to="/curriculumns"
      />
    </header>
    <nuxt-child />
  </div>
</template>
<style lang="scss">
.header {
  background-color: #1158ab;
  height: 44px;
  img {
    margin-top: 8px;
    margin-left: 8px;
    height: 28px;
  }
}
</style>
