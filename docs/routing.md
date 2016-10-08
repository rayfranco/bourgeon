# Routing

Bourgeon is wrapping [vue-router](https://github.com/vuejs/vue-router) to provide routes to your application.

You can follow the [documentation here](http://router.vuejs.org/en/index.html).

## Add routes

Add routes in the file `/src/routes.js` following the [vue-router documentation](http://router.vuejs.org/en/index.html)

```javascript
import WelcomeComponent from './components/Welcome'
import HelloComponent from './components/Hello'

export default [
  {
    path: '/',
    component: WelcomeComponent
  },
  {
    path: '/hello/:name',
    component: HelloComponent
  }
]
```
