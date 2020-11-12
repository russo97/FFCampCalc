<template>
  <li :style="[areaName]" class="title_item" :class="area">
    <div class="title_order">rank</div>

    <div class="title_name">equipe</div>

    <div class="title_killcount">abates</div>

    <div class="title_score">total</div>
  </li>
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

  li.title_item {
    @extend %flex-center-between;

    [class^="title_"] {
      padding: 2px;
      color: #fff;
      letter-spacing: 1px;
      @extend %flex-center;
      text-transform: uppercase;
      font-family: 'Big Shoulders Stencil Text', cursive;

      &[class$="order"] {
        width: 10%;
        height: 100%;
        max-width: 37px;
      }

      &[class$="name"] {
        margin-left: 6px;
        width: calc(50% - 6px);
        height: calc(100% - 4px);
      }

      &[class$="killcount"] {
        width: 20%;
      }

      &[class$="score"] {
        width: 20%;
      }
    }
  }
</style>