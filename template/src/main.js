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
{{/if}}
{{#if i18n}}
import i18n from './plugins/i18n'
{{/if}}
{{#if routing}}
import routes from './routes'
{{/if}}
// langs

{{#if routing}}
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueRouter)
{{/if}}
{{#if i18n}}
// List the locales that should be used
Vue.use(i18n, ['en', 'fr'])
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
