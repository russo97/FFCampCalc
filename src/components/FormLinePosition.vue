<template>
  <div class="block_item">
    <fieldset>
      <legend>3a queda</legend>
      <div class="fieldbox">
        <select name="pos" v-model="ranking">
          <option disabled selected>RANKING</option>
          <option value="a" :key="a" v-for="a in 12">{{ a }}</option>
        </select>
        <input type="text" placeholder="Abates" v-model="kills" />
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "FormLinePosition",

  data () {
    return {
      kills: '',
      ranking: 1
    };
  },

  watch: {
    ranking (cur) {
      console.log(cur);
    }
  }
};
</script>

<style lang="scss">
  @import "../../public/assets/scss/global.scss";

  fieldset {
    width: 90%;
    padding: 5px;
    border-radius: 3px;
    border: solid 1px #ccc;

    legend {
      color: #222;
      padding: 0 5px;
      font-size: 10pt;
      font-family: "Montserrat";
      text-transform: uppercase;
    }

    .fieldbox {
      width: 100%;
      display: grid;
      grid-gap: 5px;
      grid-template: 50px / 30% 1fr;
    }
  }
</style>