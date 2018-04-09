import Vue from 'vue';
const axios = require('axios');

Vue.config.devtools = true;

window.vm = new Vue({
  el: '#app',
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter() {
      console.log('The counter has changed!');
    },
  },
});
