<template>
  <transition-group :name="transitionName" tag="main" id="app">
    <router-view key="router"></router-view>
  </transition-group>
</template>

<script>
  export default {
    name: 'App',

    data () {
      return {
        transitionName: 'slide-left'
      };
    },

    watch: {
      $route(to, from) {
        const [toDepth, fromDepth] = [to, from].map(path => {
          return path.path.split('/').length;
        });

        this.transitionName = toDepth < fromDepth
          ? 'slide-right'
          : 'slide-left';
      },

      transitionName (cur) {
        console.log(cur);
      }
    }
  }
</script>

<style lang="scss">
  @import '../public/assets/scss/global.scss';

  #app {
    width: 100%;
    height: 100%;
    position: relative;
    @extend %flex-center;
    background-color: rgba(0, 0, 0, .85);
  }

  // .slide-left-enter-active,
  .slide-left-enter-active {
    opacity: 1;
    transition: all 1s ease;
  }

  .slide-left-enter,
  .slide-right-enter,
  .slide-left-leave-to,
  .slide-right-leave-to {
    // opacity: 0;
    transition: all 1s ease;
  }
</style>
