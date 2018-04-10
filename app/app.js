import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;

Vue.component('child', {
  props: ['item', 'counter', 'url'],
  template: '#child',
});

new Vue({
  el: '#app',
  data() {
    return {
      item: 'backpack',
      counter: 0,
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg',
    };
  },
});
