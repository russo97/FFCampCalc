<template>
  <main id="linelist">
    <ul class="linelist">
      <LineItem />
      <LineItem />
      <LineItem />
      <LineItem />
      <LineItem />
      <LineItem />
      <LineItem />
      <LineItem />
      <LineItem />
      <LineItem />
      <LineItem />
      <LineItem />
    </ul>
  </main>
</template>

<script>
  import LineItem from './LineItem';

  export default {
    name: "LineList",

    components: {
      LineItem
    }
  }
</script>

<style lang="scss">
  @import '../../public/assets/scss/global.scss';

  #linelist {
    width: 90%;
    max-width: 800px;
    height: auto;

    ul.linelist {
      width: 100%;
      height: 100%;
      padding: 5px;
      position: relative;

      // ATÉ 700PX
      @media screen and (max-width: 700px) {
        & {
          display: flex;
          position: relative;
          align-items: center;
          flex-direction: column;
          justify-content: center;

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




      // MAIORES QUE 700PX
      @media screen and (min-width: 701px) {
        & {
          display: grid;
          grid-gap: 2px;
          grid-template-areas:
            'title1 title2'
            'line1  line7'
            'line2  line8'
            'line3  line9'
            'line4  line10'
            'line5  line11'
            'line6  line12';

          li {
            height: 35px;
            background: white;
          }
        }
      }
    }
  }
</style>