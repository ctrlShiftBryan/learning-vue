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
