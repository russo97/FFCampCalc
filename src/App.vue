<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data () {
      return {
        lines: [
          { name: 'ACZ', kills: 25, positions: [3, 4, 1] },
          { name: 'STAR', kills: 39, positions: [1, 2, 8] },
          { name: 'B4', kills: 12, positions: [1, 6, 2] }
        ]
      };
    },

    components: {}
  }
</script>

<style lang="scss">
  @import '../public/assets/scss/global.scss';

  #app {
    width: 100%;
    height: 100%;
    position: relative;
    @extend %flex-center;
    background-color: rgba(0, 0, 0, .9);
  }
</style>
