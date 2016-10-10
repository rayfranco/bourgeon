# Shared States

You can share states between components using [vuex](https://github.com/vuejs/vuex) or a simple store (object literal). In both configurations, you will find the store (instance of `Vuex.Store` or `{}`) in `src/store.js`.

## Using Vuex

You will find a basic counter example in the `src/store.js`. Refer to the official [documentation](http://vuex.vuejs.org/en/index.html) for more informations.

## Using Object Literal

If you think Vuex is an overkill for your project, you can keep it simple and share your states by storing reactive data into the store.

> **Note:** you should read from `this.state` but write to the `store` object. See example below.

```javascript
import store from "store"

export default {
  data() {
    return {
      state: store
    }
  },
  methods: {
    toggleOption () {
      // Write to the store
      store.option = !store.option
    }
  }
}
```

and then you can use it in the templates

```html
<button @click="@toggleOption">{{ state.option }}</button>
```
