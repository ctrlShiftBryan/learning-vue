# 1 DIRECTIVES

* v-text
* v-html
  * Great for strings that have html elements that need to be rendered!
* v-show
* v-if
* v-else
* v-else-if
* v-for
* v-on
  * Extremely useful so there's a shortcut! v-on is great for binding to events like click and mouseenter. You're able to pass in a parameter for the event like (e)
  * Modifiers
    * @mousemove.stop is comparable to e.stopPropogation()
    * @mousemove.prevent this is like e.preventDefault()
    * @submit.prevent this will no longer reload the page on submission
    * @click.once not to be confused with v-once, this click event will be triggered once.
    * @click.native so that you can listen to native events in the DOM
* v-bind
* v-model
  * v-model.trim will strip any leading or trailing whitespace from the bound string
  * v-model.number changes strings to number inputs
  * v-model.lazy won’t populate the content automatically, it will wait to bind until an event happens. (It listens to change events instead of input)
* v-pre
  * v-pre will print out the inner text exactly how it is, including code (good for documentation) - use to disable templates
* v-once
  * Not quite as useful, v-once will not update once it's been rendered.
* v-cloak

# 2 Methods, Computed and Watchers

* methods

  * Are bound to the Vue instance, they are incredibly useful for functions you would like to access in directives

* computed

  * Computed properties are calculations that will be cached and will only update when needed.

  * Highly performant but use with understanding.

* computed vs methods

  * COMPUTED
    * Runs only when a dependency has changed
    * Cached
    * Should be used as a property, in place of data
    * By default getter only, but you can define a setter
  * METHODS
    * Runs whenever an update occurs
    * Not cached
    * Typically invoked from v-on/@, but flexible
    * Getter/setter

* WATCHERS

  * Vue's Reactivity System
  * Reactive programming is programming with asynchronous data streams.
  * A stream is a sequence of ongoing events ordered in time that offer some hooks with which to observe it.
  * When we use reactive premises for building applications, this means it's very easy to update state in reaction to events.
  * [Andre Staltz' post](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)

  * Vue takes the object, walks through its properties and converts them to getter/setters

```
new Vue({
data: {
  text: 'msg'
}
})
```

* Vue cannot detect property addition or deletion so we create this object to keep track
* this object must be their initially so view can walk it and add getters/setters

* We also have access to the new value and the old value:

```
watch: {
  watchedProperty (value, oldValue) {
    //your dope code here
  }
},
```

* We can also gain access to nested values with 'deep':

```
watch: {
  watchedProperty {
    deep: true,
    nestedWatchedProperty (value, oldValue) {
      //your dope code here
    }
  }
},
```

# 3 Components

* Templates

  * Vue.js uses HTML-based template syntax to bind the Vue instance to the DOM
  * Templates are optional, you can also write render function with optional JSX support

* Components

  * A collection of elements that are encapsulated into a group that can be accessed through one single element

* Props

  * `props:['text']`

  * You can think of it a little like the component holds a variable that is waiting to be filled out by whatever the parent sends down to it.

  * TYPES & VALIDATION

```
 props: {
   text: [String, Number]
 }
```

```
Vue.component('child', {
  props: {
    text: {
      type: String,
      required: true,
      default: 'hello mr. magoo'
    }
  },
  template: `<div>{{ text }}<div>`
});
```

* Objects and arrays need their defaults to be returned from a function:

```
text: {
  type: Object,
  default: function () {
    return { message: 'hello mr. magoo' }
  }
}
```

* Each component instance has its own isolated scope

* camelCasing will be converted
  `props: ['booleanValue']`

* In HTML it will be kebab-case:
  `<checkbox :boolean-value="booleanValue"></checkbox>`
