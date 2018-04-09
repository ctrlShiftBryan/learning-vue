import Vue from 'vue';
const axios = require('axios');
import { TweenMax } from 'gsap';
import _ from 'lodash';
Vue.config.devtools = true;

new Vue({
  el: '#app',
  data() {
    return {
      selected: [
        25,
        37,
        15,
        13,
        25,
        30,
        11,
        17,
        35,
        10,
        25,
        15,
        5,
        27,
        15,
        13,
        25,
        36,
        15,
        14,
        35,
        10,
        14,
        15,
        35,
        17,
        12,
        13,
        25,
        30,
        14,
        17,
        35,
        10,
        25,
        15,
      ],
      targetVal: [
        25,
        37,
        15,
        13,
        25,
        30,
        11,
        17,
        35,
        10,
        25,
        15,
        5,
        27,
        15,
        13,
        25,
        36,
        15,
        14,
        35,
        10,
        14,
        15,
        35,
        17,
        12,
        13,
        25,
        30,
        14,
        17,
        35,
        10,
        25,
        15,
      ],
      options: [
        {
          text: 'First Dataset',
          value: [
            25,
            37,
            15,
            13,
            25,
            30,
            11,
            17,
            35,
            10,
            25,
            15,
            5,
            27,
            15,
            13,
            25,
            36,
            15,
            14,
            35,
            10,
            14,
            15,
            35,
            17,
            12,
            13,
            25,
            30,
            14,
            17,
            35,
            10,
            25,
            15,
          ],
        },
        {
          text: 'Second Dataset',
          value: [
            13,
            25,
            30,
            11,
            17,
            35,
            10,
            25,
            15,
            5,
            27,
            15,
            13,
            25,
            36,
            15,
            14,
            35,
            10,
            14,
            15,
            35,
            17,
            12,
            13,
            25,
            30,
            14,
            17,
            35,
            10,
            25,
            15,
            25,
            37,
            15,
          ],
        },
        {
          text: 'Third Dataset',
          value: [
            35,
            10,
            25,
            15,
            5,
            27,
            15,
            13,
            25,
            36,
            15,
            14,
            35,
            10,
            14,
            15,
            35,
            17,
            12,
            13,
            25,
            30,
            14,
            17,
            35,
            10,
            25,
            15,
            25,
            37,
            15,
            13,
            25,
            30,
            11,
            17,
          ],
        },
      ],
    };
  },
  computed: {
    getMax() {
      return Math.max.apply(Math, this.selected) * 10;
    },
    getMaxRange() {
      let maxi = Math.max.apply(Math, this.selected);
      return _.range(maxi);
    },
  },
  watch: {
    selected(newValue, oldValue) {
      // Create a dummy object that will get updated by GSAP
      var tweenedData = {};

      // Update function that is invoked on each tween step
      // we use this to push the data
      var update = function() {
        let obj = Object.values(tweenedData);
        obj.pop();
        this.targetVal = obj;
      };

      // Create an object to hold the source data to be tweened and the
      // function pointer for update events
      var tweenSourceData = { onUpdate: update, onUpdateScope: this };

      for (let i = 0; i < oldValue.length; i++) {
        // Turn the current index into a string
        let key = i.toString();
        tweenedData[key] = oldValue[i];
        tweenSourceData[key] = newValue[i];
      }

      // Tween over the our target dummy object, but only for the specific key
      TweenMax.to(tweenedData, 1, tweenSourceData);
    },
  },
});
