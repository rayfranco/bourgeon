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
</template>

<script>
{{#unless routing}}
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
{{/unless}}
</script>

<style lang="stylus">
html
  height 100%

body
  display flex
  align-items center
  justify-content center
  height 100%

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
  width 100px
  height 100px
</style>
