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
    <p>
      <button @click="setLang(lang)" v-for="lang in locales" :disabled="isLang(lang)">\{{ $t('locales.'+ lang) }}</button>
    </p>
    {{/if}}
  </div>
</template>

<script>
{{#unless routing}}
import Welcome from './components/Welcome'

export default {
  components: {
    Welcome
  }
}
{{/unless}}
</script>

<style lang="stylus">
@import "stylus-media-queries"
@import "stylus-easing"
@import "stylus-reset"

reset()

html
  height 100%

body
  display flex
  align-items center
  justify-content center
  height 100%

p, h1
  margin 20px 0

#app
  color #2c3e50
  margin-top -100px
  max-width 600px
  font-family Source Sans Pro, Helvetica, sans-serif
  text-align center

  a
    color #42b983
    text-decoration none

.logo
  width 70px
  height 100px

button
  border 0
  border-radius 4px
  background #42b983
  color white
  padding 5px 10px
  margin 0 3px
  cursor pointer
  &:hover
    background #35495e
  &:focus
    outline none
  &:disabled
    background #35495e
    cursor default
</style>
