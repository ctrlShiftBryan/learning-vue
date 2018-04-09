import Vue from 'vue';

Vue.config.devtools = true;

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
