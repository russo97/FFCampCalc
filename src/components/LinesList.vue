<template>
  <main id="linelist">
    <ul class="linelist">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "LineList"
}
</script>

<style lang="scss">
  @import '../../public/assets/scss/global.scss';

  #linelist {
    width: 90%;
    max-width: 800px;
    height: auto;

    // ATÉ 600PX
    @media screen and (max-width: 600px) {
      ul.linelist {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: relative;

        li {
          width: 100%;
          height: 35px;
          background: white;

          &:not(:last-child),
          &:not(:first-child) {
            margin: 1px;
          }
        }
      }
    }

    // MAIORES QUE 600PX
    @media screen and (min-width: 601px) {
      // ul.linelist {}
    }

    ul.linelist {
      width: 100%;
      height: 100%;
      padding: 5px;
      position: relative;
    }
  }
</style>