DIRECTIVES

* v-text
* v-html
* v-show
* v-if
* v-else
* v-else-if
* v-for
* v-on
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
