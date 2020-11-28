<template>
  <div id="addline_form" key="addline">
    <h2 class="hero">adicionar nova line</h2>

    <div class="form_block">
      <div class="block_item">
        <input type="text" placeholder="TAG" autocomplete="off" v-model="tag" />
      </div>

      <div class="block_item">
        <input type="text" placeholder="Nome" autocomplete="off" v-model="name" />
      </div>

      <FormLinePosition
        :key="index"
        :match="match"
        v-model="matchInfo[index]"
        v-for="(match, index) in matchCount" />

      <div class="block_item">
        <button @click="listLineRouter" id="reset">&lt; Voltar</button>
        <button @click="addLine" id="adicionar">+ Adicionar</button>
      </div>
    </div>
  </div>
</template>

<script>
import FormLinePosition from '../components/FormLinePosition';

export default {
  name: 'AddLineForm',

  data () {
    return {
      tag: '',
      name: '',
      matchCount: 3,
      matchInfo: [{}, {}, {}]
    };
  },

  methods: {
    listLineRouter () {
      this.$router.push({ path: '/' });
    },

    addLine () {
      const { $store, tag, name, listLineRouter, kills, positions } = this;

      const filled = positions.every(rank => rank);

      if (filled) {
        $store.commit('addLine',
          Object.assign({}, {
            kills,
            name: tag,
            positions,
            fullName: name
          })
        );

        listLineRouter();
      }
    }
  },

  computed: {
    kills () {
      const { matchInfo } = this;

      return matchInfo
        .map(match => Number(match.kills))
        .reduce((acc, cur) => acc + cur, 0);
    },

    positions () {
      const { matchInfo } = this;

      return matchInfo.map(match => match.ranking);
    }
  },

  components: {
    FormLinePosition
  },

  watch: {
    matchInfo (cur) {
      console.log(cur);
    }
  }
}
</script>

<style lang="scss">
  @import '../../public/assets/scss/global.scss';

  #addline_form {
    width: 80%;
    height: auto;
    padding: 10px;
    max-width: 400px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);

    .hero {
      color: #000;
      padding: 15px 0;
      font-size: 14pt;
      text-align: center;
      font-family: 'Lato';
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .form_block {
      width: 100%;
      height: auto;
      @extend %flex-center;
      flex-direction: column;

      .block_item {
        width: 100%;
        height: auto;
        padding: 5px;
        @extend %flex-center;

        input {
          width: 90%;
          padding: 15px;
          font-size: 11pt;
          color: #2C3E50;
          border: solid 1px #ccc;
          font-family: 'Montserrat';
        }

        button {
          margin: 5px;
          color: #fff;
          width: 100px;
          border: unset;
          cursor: pointer;
          font-weight: bold;
          padding: 10px 5px;
          border-radius: 0px;
          font-family: Montserrat;
          transition: all 200ms ease;

          &:hover {
            box-shadow: 0 0 0 2px white, 0 0 0 3px $base_color;
          }

          &:active {
            transform: scale(.98);
          }

          &#adicionar {
            background-color: $base_color;

            &:hover {
              box-shadow: 0 0 0 2px white, 0 0 0 3px $base_color;
            }
          }

          &#reset {
            background-color: #f37b56;

            &:hover {
              box-shadow: 0 0 0 2px white, 0 0 0 3px #f37b56;
            }
          }
        }
      }
    }
  }
</style>