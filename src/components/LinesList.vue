<template>
  <div id="linelist" key="linelist">
    <ul class="linelist">
      <LineTitle area="title1" />
      <LineItem
        :key="index"
        :area="index + 1"
        :name="line.name"
        :kills="line.kills"
        :total="line.total"
        :fname="line.fullName"
        v-for="(line, index) in linesList" />

      <AddLine
        v-if="notFilled"
        @addline="addLineRouter"
        :area="linesList.length + 1" />
    </ul>
  </div>
</template>

<script>
  import AddLine from './AddLine';
  import LineItem from './LineItem';
  import LineTitle from './LineTitle';

  export default {
    name: "LineList",

    components: {
      AddLine,
      LineItem,
      LineTitle
    },

    data () {
      return {
        killPoint: 3,
        maxPlacementPoints: 12
      };
    },

    methods: {
      placementPointForm (singlePosition) {
        const { maxPlacementPoints } = this;

        return Math.max(0, maxPlacementPoints - (singlePosition - 1) * 2);
      },

      placementPointsCalc (positions) {
        const { placementPointForm } = this;

        return positions.reduce((acc, cur) => acc + placementPointForm(cur), 0);
      },

      addLineRouter () {
        this.$router.push({ path: 'addline' });
      }
    },

    computed: {
      lines () {
        const { lines } = this.$store.state;

        return lines;
      },

      oneColumn () {
        const { lines } = this;

        return lines.length <= 6;
      },

      notFilled () {
        const { lines } = this;

        return lines.length < 12;
      },

      linesList () {
        const { placementPointsCalc, killPoint, lines } = this;

        return lines.map(line => {
          const { kills, positions } = line;

          return Object.assign(line, {
            total: kills * killPoint + placementPointsCalc(positions)
          });
        }).sort((a, b) => b.total - a.total);
      }
    }
  }
</script>

<style lang="scss">
  @import '../../public/assets/scss/global.scss';

  #linelist {
    width: 90%;
    max-width: 800px;
    height: auto;
    @extend %flex-center;

    ul.linelist {
      width: 100%;
      height: 100%;
      padding: 5px;
      position: relative;

      // ATÉ 700PX
      & {
        max-width: 480px;
        display: flex;
        position: relative;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        li {
          width: 100%;
          height: 35px;

          &.title2 {
            display: none;
          }

          &:not(:last-child),
          &:not(:first-child) {
            margin-top: 5px;
          }
        }
      }
    }
  }
</style>