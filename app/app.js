import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;

Vue.component('individual-comment', {
  template: `<li> {{ commentpost }} </li>`,
  props: ['commentpost'],
});

new Vue({
  el: '#app',
  data: {
    newComment: '',
    comments: ['Looks great Julianne!', 'I love the sea', 'Where are you at?'],
  },
  methods: {
    addComment: function() {
      this.comments.push(this.newComment);
      this.newComment = '';
    },
  },
});
