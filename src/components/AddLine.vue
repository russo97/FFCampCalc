<template>
  <li
    class="line_item"
    :style="areaName"
    @click="$emit('addline')">
    <div class="line_order"> + </div>

    <div class="line_name">
      Adicionar Time
    </div>

    <div class="line_killcount">
      <div class="skew_back">-</div>
    </div>

    <div class="line_score">
      <div class="skew_back">-</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "AddLine",

  props: {
    area: {
      type: Number,
      required: true
    }
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

<style lang="scss" scoped>
  @import '../../public/assets/scss/global.scss';

  li.line_item {
    opacity: .8;
    cursor: pointer;
    filter: grayscale(70%);
    @extend %flex-center-between;
    font-family: 'Big Shoulders Stencil Text', cursive;

    .line_order {
      width: 10%;
      height: 100%;
      color: #000;
      max-width: 37px;
      font-size: 25pt;
      font-weight: bold;
      @extend %flex-center;
      background-color: $base_color;
    }

    .line_name {
      color: #fff;
      height: 100%;
      margin-left: 6px;
      position: relative;
      letter-spacing: 2px;
      @extend %flex-center;
      width: calc(50% - 6px);
      border: solid 2px $base_color;
      border-right-color: transparent;

      &:before {
        content: '';
        width: 50px;
        height: 2px;
        bottom: -2px;
        right: -10px;
        position: absolute;
        background: $base_color;
      }

      &:after {
        content: '';
        width: 0px;
        height: 110%;
        right: -6px;
        position: absolute;
        transform: skew(15deg);
        border-right: solid 2px $base_color;
      }
    }

    .line_killcount {
      width: 15%;
      height: 100%;
      margin-left: 6px;
      transform: skew(15deg);
      background-color: $base_color;
    }

    .line_score {
      width: 15%;
      height: 100%;
      margin: 0 5px;
      transform: skew(15deg);
      border: solid 2px $base_color;
    }

    .line_score,
    .line_killcount {
      color: #fff;
      @extend %flex-center;

      .skew_back {
        transform: skew(-15deg);
      }
    }
  }
</style>