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
          return path.path.split('/').reduce((acc, cur) => acc + cur.length, 0);
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
    overflow: hidden;
    position: relative;
    @extend %flex-center;
    background-color: rgba(0, 0, 0, .85);
  }

  .slide-left-enter-active,
  .slide-right-enter-active,
  .slide-left-leave-active,
  .slide-right-leave-active {
    transition: all 300ms ease;
  }

  .slide-left-enter,
  .slide-right-enter,
  .slide-left-leave-to,
  .slide-right-leave-to {
    position: absolute;
  }

  .slide-left-enter-to,
  .slide-right-enter-to {
    transform: translateX(0%);
  }


  // ANIMACOES DURANTE AS MUDANCAS DE ROTAS
  .slide-left-enter {
    transform: translateX(300%);
  }

  .slide-left-leave-to {
    transform: translateX(-300%);
  }



  .slide-right-enter {
    transform: translateX(-300%);
  }

  .slide-right-leave-to {
    transform: translateX(300%);
  }
</style>
