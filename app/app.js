import Vue from 'vue';
const axios = require('axios');

Vue.config.devtools = true;

new Vue({
  el: '#app',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    countup() {
      this.counter++;
    },
  },
  computed: {
    // another view on the same data
    countupComp() {
      return this.counter + 1;
    },
  },
});
