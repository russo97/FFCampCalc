<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',

    components: {}
  }
</script>

<style lang="scss">
  @import '../public/assets/scss/global.scss';

  #app {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
