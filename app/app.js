import Vue from 'vue';
const axios = require('axios');

Vue.config.devtools = true;

new Vue({
  el: '#app',
  data() {
    return {
      selected: '',
      posts: [
        {
          author: '@vFitzgerald',
          title: 'Quod Ducimus Omnis',
          label: 'science',
        },
        {
          author: '@mPalmer',
          title: 'Vero Eius Laboriosam Ex Repudiandae',
          label: 'math',
        },
        {
          author: '@mDean',
          title: 'Magnam Odit',
          label: 'science',
        },
        {
          author: '@tCole',
          title: 'Velit Mollitia Voluptates Assumenda',
          label: 'science',
        },
        {
          author: '@jCooper',
          title: 'Eum Commodi Cupiditate',
          label: 'poetry',
        },
        {
          author: '@lLamb',
          title: 'Amet',
          label: 'history',
        },
        {
          author: '@fMartin',
          title: 'Voluptatem Fuga Cum Asperiores Error',
          label: 'science',
        },
        {
          author: '@eHayes',
          title: 'Ipsa Consectetur Rerum Repellat Quia',
          label: 'math',
        },
        {
          author: '@cCollier',
          title: 'Dolor Nihil Delectus',
          label: 'science',
        },
        {
          author: '@cBenson',
          title: 'Labore Ipsum Ad Pariatur',
          label: 'poetry',
        },
      ],
      newTitle: '',
      newAuthor: '',
      newLabel: '',
    };
  },
  methods: {
    // no arrow function because we need this
    submitForm() {
      this.posts.push({
        author: this.newAuthor,
        label: this.newLabel.toLowerCase(),
        title: this.newTitle,
      });
    },
  },
  computed: {
    filteredPosts() {
      return this.selected
        ? this.posts.filter(x => x.label == this.selected.toLowerCase())
        : this.posts;
    },
  },
});
