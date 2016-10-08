/* eslint-disable no-unused-vars */
{{#svg}}
import Icon from 'bourgeon/Icon.vue'
{{/svg}}
{{#routing}}
import Router from 'bourgeon/router'
{{/routing}}
{{#i18n}}
import I18n from 'bourgeon/i18n'
{{/i18n}}

export default {
  install (Vue, options) {
    {{#routing}}
    Vue.use(Router)
    {{/routing}}
    {{#i18n}}
    Vue.use(I18n, options.locales)
    {{/i18n}}
    {{#svg}}

    Vue.component('icon', Icon)
    {{/svg}}
  }
}
