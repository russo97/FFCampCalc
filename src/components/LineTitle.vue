<template>
  <li :style="[areaName]">titulo</li>
</template>

<script>
export default {
  name: 'LineTitle',

  props: ['area'],

  data () {
    return {};
  },

  computed: {
    areaName () {
      const { area } = this;

      return { 'grid-area': area };
    }
  }
}
</script>

<style lang="scss">
  @import '../../public/assets/scss/global.scss';
</style>