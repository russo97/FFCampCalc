import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lines: [{
      name: 'ACZ',
      kills: 25,
      positions: [3, 4, 1]
    }, {
      name: 'STAR',
      kills: 39,
      positions: [1, 2, 8]
    }, {
      name: 'B4',
      kills: 12,
      positions: [1, 6, 2]
    }, {
      name: 'LGD',
      kills: 14,
      positions: [1, 5, 7]
    }]
  }
});

export { store }