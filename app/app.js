import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;

Vue.component('height-counter', {
  template: '#height-counter',
  data() {
    return {
      count: 3,
    };
  },
  methods: {
    heightincrease: function() {
      this.count += 1;
      this.$emit('heightincrease');
    },
  },
});

Vue.component('radius-counter', {
  template: '#radius-counter',
  data() {
    return {
      countR: 0,
    };
  },
  methods: {
    radiusincrease: function() {
      this.countR += 3;
      this.$emit('radiusincrease');
    },
  },
});

new Vue({
  el: '#app',
  data: {
    total: 200,
    radius: 15,
    x1: 15,
    y1: 15,
    g: 0.1,
    vx: 2.5,
    vy: 0,
    req: undefined,
    running: false,
  },
  methods: {
    incrementHeight() {
      this.total += 100;
    },
    incrementRadius() {
      this.radius += 1;
    },
    bounceBall() {
      this.vy += this.g; // gravity increases the vertical speed
      this.x1 += this.vx; // horizontal speed inccrements horizontal position
      this.y1 += this.vy; // vertical speed increases vertical position

      if (this.y1 > this.total - this.radius) {
        // if ball hits the ground
        this.y1 = this.total - this.radius; // reposition it at the ground
        this.vy *= -0.8; // then reverse and reduce its speed
      }
    },
    animateBall() {
      //use rAF to animate but put a boundary on it so it doesn't run forever
      let start,
        vueThis = this;
      this.running = true;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        if (progress < 13000) {
          vueThis.bounceBall();
          vueThis.req = window.requestAnimationFrame(step);
        } else {
          vueThis.x1 = this.radius;
          vueThis.y1 = this.radius;
          vueThis.running = false;
        }
      }
      this.req = window.requestAnimationFrame(step);
    },
    cancelAnimate() {
      cancelAnimationFrame(this.req);
      this.running = false;
      this.radius = 15;
      this.x1 = this.radius;
      this.y1 = this.radius;
      this.total = 200;
      this.g = 0.1;
      this.vx = 2;
      this.vy = 0;
    },
  },
});
