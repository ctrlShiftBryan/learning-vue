import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;

// local component option
// const IndividualComment = {
//   template: '#comment-template',
//   props: ['commentpost'],
// };

// AND then add to the components like this
// new Vue({
//   ...
//   components: {
//     'individual-comment': IndividualComment
//   }
// })

Vue.component('individual-comment', {
  template: '#comment-template',
  props: ['commentpost'],
});

new Vue({
  el: '#app',
  data: {
    newComment: '',
    comments: [
      {
        text: 'Looks great Julianne!',
        author: 'Robin Rendle',
        authorImg:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg',
      },
      {
        text: 'I love the Sea',
        author: 'Miriam Suzanne',
        authorImg:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg',
      },
      {
        text: 'Where are you?',
        author: 'Geoff Graham',
        authorImg:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg',
      },
    ],
  },
  methods: {
    addComment: function() {
      const newCommentObj = {
        text: this.newComment,
        author: 'Magoo',
        authorImg:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-skull.jpg',
      };
      this.comments.push(newCommentObj);
      this.newComment = '';
    },
  },
});
