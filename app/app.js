import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;
// Each component instance has its own isolated scope

var data = { counter: 0 };

Vue.component('count1', {
  template: '#count',
  data() {
    return data;
  },
});

Vue.component('count2', {
  template: '#count',
  data() {
    return {
      counter: 0,
    };
  },
});
