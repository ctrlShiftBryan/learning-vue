import Vue from 'vue';

Vue.config.devtools = true;

new Vue({
  el: '#app',
  data() {
    return {
      tacos: 'I like Al Pastor tacos',
    };
  },
});
