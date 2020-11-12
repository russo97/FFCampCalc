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
      background-color: $base_color;
      font-family: 'Big Shoulders Stencil Text', cursive;
    }

    .line_name {
      color: #fff;
      margin-left: 6px;
      position: relative;
      @extend %flex-center;
      width: calc(50% - 6px);
      height: calc(100% - 4px);
      border: solid 2px $base_color;
      font-family: 'Big Shoulders Stencil Text', cursive;

      &:after {
        content: '';
        width: 0px;
        height: 0px;
        top: 0px;
        right: 0px;
        position: absolute;
      }
    }

    .line_killcount {
      width: 20%;
    }

    .line_score {
      width: 20%;
    }
  }
</style>