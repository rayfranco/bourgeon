# Shared States

You can share states and reactive data between components by using the store.
Unlike the store in VueX, it is simply an object literal. It is free to use in every component, you will just need to import it. To make it reactive, you should write to the `store` import and read from the `data` (here `state` is used)

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
