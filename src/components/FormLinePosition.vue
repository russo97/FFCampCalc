<template>
  <div class="block_item">
    <fieldset>
      <legend>{{ match }}ª queda</legend>
      <div class="fieldbox">
        <select name="ranking" v-model="ranking">
          <option value="" disabled selected>RANKING</option>
          <option :value="rank" :key="rank" v-for="rank in 12">
            {{ rank }}
          </option>
        </select>
        <input
          type="text"
          maxlength="2"
          placeholder="Abates"
          v-model="kills" />
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "FormLinePosition",

  data () {
    return {
      kills: 0,
      ranking: ''
    };
  },

  methods: {
    returnData () {
      const { matchInfo } = this;

      this.$emit('input', matchInfo);
    }
  },

  computed: {
    matchInfo () {
      const { kills, ranking } = this;

      return Object.assign({}, {
        kills, ranking
      });
    }
  },

  props: {
    match: {
      type: Number,
      required: true
    }
  },

  watch: {
    kills(current) {
      const regexp = /\D+/gmi, curStr = String(current);

      if (regexp.test(curStr)) {
        this.kills = Number(curStr.replace(/\D+/gi, ''));
      }

      this.returnData();
    },

    ranking() {
      this.returnData();
    }
  }
};
</script>

<style lang="scss">
  @import "../../public/assets/scss/global.scss";

  fieldset {
    width: 90%;
    padding: 8px 5px;
    border-radius: 3px;
    border: solid 1px #ccc;
    @extend %flex-center;

    legend {
      color: #222;
      padding: 0 5px;
      font-size: 10pt;
      font-family: "Montserrat";
      text-transform: uppercase;
    }

    .fieldbox {
      width: 80%;
      display: grid;
      grid-gap: 5px;
      justify-content: center;
      grid-template: 50px / 40% 40%;

      input,
      select {
        color: #444;
        border: solid 1px #ccc;
      }

      select { padding-left: 10px; }
    }
  }
</style>