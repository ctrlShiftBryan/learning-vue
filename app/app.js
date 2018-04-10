import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;

Vue.component('child', {
  props: ['text'],
  template: '#child',
  methods: {
    talkToMe() {
      this.$emit('changetext', 'forget introductions, I want a taco');
    },
  },
});

new Vue({
  el: '#app',
  data() {
    return {
      message: 'hello mr. magoo',
    };
  },
});
