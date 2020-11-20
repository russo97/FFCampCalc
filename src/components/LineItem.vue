<template>
  <li class="line_item" :style="areaName" :title="fname">
    <div class="line_order"> {{ area }} </div>

    <div class="line_name">
      {{ name }}
    </div>

    <div class="line_killcount">
      <div class="skew_back">
        {{ kills }}
      </div>
    </div>

    <div class="line_score">
      <div class="skew_back">
        {{ total }}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "LineItem",

  props: {
    name: {
      type: String,
      required: true,
      default: 'unknown'
    },
    fname: {
      type: String
    },
    kills: {
      default: 0,
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
      default: 0
    },
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
    font-family: 'Big Shoulders Stencil Text', cursive;    

    .line_order {
      width: 10%;
      height: 100%;
      color: #000;
      max-width: 37px;
      font-weight: bold;
      @extend %flex-center;
      background-color: $base_color;
      font-family: 'Big Shoulders Stencil Text', cursive;
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
      font-family: 'Big Shoulders Stencil Text', cursive;

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