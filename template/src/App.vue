<template>
  <div id="app">
    {{#if svg}}
    <icon class="logo" name="logo"></icon>
    {{else}}
    <img class="logo" src="./assets/logo.png">
    {{/if}}
    {{#if routing}}
    <router-view></router-view>
    {{else}}
    <welcome></welcome>
    {{/if}}
    {{#if i18n}}
    <div>
      <button @click="setLang(lang)" v-for="lang in locales" :disabled="isLang(lang)">\{{ $t('locales.'+ lang) }}</button>
    </div>
    {{/if}}
    {{#if vuex}}
    <hr>
    <div>
      <button @click="increment">{{#if i18n}}\{{ $tc('messages.counter', countPlural, { n: $store.state.count }) }}{{else}}You clicked this button \{{ $store.state.count }} times{{/if}}</button>
    </div>
    {{/if}}
  </div>
</template>

<script>
{{#if vuex}}
import store from 'store'
import { mapActions, mapGetters } from 'vuex'
{{/if}}
{{#unless routing}}
import Welcome from './components/Welcome'
{{/unless}}
export default {
  {{#if vuex}}
  store,
  computed: mapGetters([
    'countPlural'
  ]),
  methods: {
    ...mapActions([
      'increment'
    ]),
    onLangClick (lang) {
      this.setLang(lang) // mixin method
      this.increment() // store action
    }
  }
  {{/if}}
  {{#unless routing}}
  components: {
    Welcome
  }
  {{/unless}}
}
</script>

<style lang="stylus">
@import "typus" // base styles

html
  +below(600px) // rupture
    font-size 50%

#app
  align() // jeet
  text-align center

a
  color green // custom variable

button,
button:active,
button:focus
  border 0
  background green
  color white
  cursor pointer
  margin 0 5px
  &:disabled,
  &:hover
    background blue
  &:disabled
    cursor default

.icon-logo
  margin-bottom 2.5rem
</style>
