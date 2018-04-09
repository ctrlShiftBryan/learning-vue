import Vue from 'vue';

Vue.config.devtools = true;

new Vue({
  el: '#app',
  data() {
    return {
      tacos: `I like <a href="http://www.epicurious.com/recipes/food/views/tacos-al-pastor-242132" target="_blank">Al Pastor</a> tacos`,
    };
  },
});
