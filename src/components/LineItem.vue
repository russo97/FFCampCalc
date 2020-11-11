<template>
  <li class="line_item" :style="areaName">
    <div class="line_order"> {{ area }} </div>

    <div class="line_name">STAR</div>

    <div class="line_killcount">39</div>

    <div class="line_score">1960</div>
  </li>
</template>

<script>
export default {
  name: "LineItem",

  props: {
    area: {
      type: Number,
      required: true
    }
  },

  data () {
    return {};
  },

  computed: {
    areaName () {
      const { area } = this;

      return {
        'grid-area': `line${area}`
      };
    }
  }
}
</script>

<style lang="scss">
  @import '../../public/assets/scss/global.scss';

  li.line_item {
    @extend %flex-center-between;

    .line_order {
      width: 10%;
      color: #000;
      max-width: 37px;
      font-weight: bold;
      @extend %flex-center;
      height: calc(100% - 3px);
      background-color: #ff00fe;
      font-family: 'Big Shoulders Stencil Text', cursive;
    }
  }
</style>