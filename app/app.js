import Vue from 'vue';

Vue.config.devtools = true;

new Vue({
  el: '#app',
  data() {
    return {
      num1: 0,
      num2: 0,
      name: '',
    };
  },
});
