import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lines: []
  },

  mutations: {
    addLine (state, line) {
      state.lines.push(line);
    }
  }
});

export { store }