import Vue from 'vue';
const axios = require('axios');

Vue.config.devtools = true;

new Vue({
  el: '#app',
  data() {
    return {
      userData: '',
    };
  },
  computed: {
    greeting() {
      return `You're a monster, ${this.userData}!`;
    },
  },
});
