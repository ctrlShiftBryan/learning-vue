import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;

// data as a function for counter
// now both app and child have data()
Vue.component('child', {
  data() {
    return {
      counter: 0,
    };
  },
  props: ['item', 'url'],
  template: '#child',
});

new Vue({
  el: '#app',
  data() {
    return {
      manifest: [
        {
          item: 'backpack',
          url:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg',
        },
        {
          item: 'tshirt',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg',
        },
        {
          item: 'sweatshirt',
          url:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg',
        },
      ],
    };
  },
});
