import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;

Vue.component('child', {
  props: ['taco'],
  template: `<div>{{ taco }}</div>`,
});
// in this example the message is getting
// passed down into the component
new Vue({
  el: '#app',
  data() {
    return {
      message: 'hello mr. magoo',
    };
  },
});
