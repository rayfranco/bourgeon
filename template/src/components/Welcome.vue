<template>
  <div>
    <p>
      {{#if i18n}}
      \{{ $t('messages.welcome') }}
      {{else}}
      Welcome to your Vue.js app!
      {{/if}}
    </p>
    {{#if i18n}}
    <p>
      <button @click="setLang(lang)" v-for="lang in locales">\{{ $t('locales.'+ lang) }}</button>
    </p>
    {{/if}}
    {{#if routing}}
    <p>
      <router-link to="/">Home</router-link> - <router-link to="/hello/world">Hello</router-link>
    </p>
    {{/if}}
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
