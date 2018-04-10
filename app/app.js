import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;
Vue.component('child', {
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  template: `<div class="num">{{ count }}</div>`,
});

new Vue({
  el: '#app',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
