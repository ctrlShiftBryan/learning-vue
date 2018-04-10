import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;

Vue.component('child', {
  template: `<div>hello mr. magoo</div>`,
});

new Vue({
  el: '#app',
});
