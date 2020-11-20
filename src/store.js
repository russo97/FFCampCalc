import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lines: [{
      name: 'ACZ',
      kills: 25,
      positions: [3, 4, 1],
      fullName: 'Amazon Cripz'
    }, {
      name: 'STAR',
      kills: 39,
      positions: [1, 2, 8],
      fullName: 'King Of Star'
    }, {
      name: 'B4',
      kills: 12,
      positions: [1, 6, 2],
      fullName: 'B4stardos'
    }, {
      name: 'LGD',
      kills: 14,
      positions: [1, 5, 7],
      fullName: 'Los Grandes'
    }, {
      name: 'CRZ',
      kills: 14,
      positions: [1, 5, 7],
      fullName: 'Cruzeiro'
    }, {
      name: 'VRZ',
      kills: 14,
      positions: [1, 5, 7],
      fullName: 'Voraz'
    }, {
      name: 'paiN',
      kills: 14,
      positions: [1, 5, 7],
      fullName: 'paiN'
    }, {
      name: 'LOUD',
      kills: 14,
      positions: [1, 5, 7],
      fullName: 'LOUD'
    }, {
      name: 'RED',
      kills: 14,
      positions: [1, 5, 7],
      fullName: 'RED Canids Calunga'
    }, {
      name: 'FLA',
      kills: 14,
      positions: [1, 5, 7],
      fullName: 'Flamengo'
    }, {
      name: 'GOD',
      kills: 14,
      positions: [1, 5, 7],
      fullName: 'GOD e-Sports'
    }]
  }
});

export { store }