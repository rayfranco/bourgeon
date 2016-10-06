{{#if_eq build "runtime"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#if svg}}
import Icon from './components/Icon.vue'
{{/if}}
{{#if routing}}
import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueRouter)
{{/if}}
{{#if svg}}

Vue.component('icon', Icon)
{{/if}}

/* eslint-disable no-new */
new Vue({
  {{#if routing}}
  router,
  {{/if}}
  render: h => h(App)
}).$mount('#app')
