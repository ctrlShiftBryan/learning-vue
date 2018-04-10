import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data() {
    return {
      selected: 'appBlack',
      label: 'Label Name',
      wineFont: 'Montserrat',
      flourish: 'none',
      wineImg: 'none',
      imgOpacity: 0.8,
      labelPlacement: 0,
      labelColor: '#000000',
    };
  },
  components: {
    appBlack: {
      template: '#black',
    },
    appWhite: {
      template: '#white',
    },
    appFlor1: {
      template: '#flor1',
    },
    appFlor2: {
      template: '#flor2',
    },
    appFlor3: {
      template: '#flor3',
    },
  },
});
