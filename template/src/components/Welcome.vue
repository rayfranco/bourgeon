<template>
  <div>
    <p>
      {{#if i18n}}
      \{{ $t('messages.welcome') }}
      {{else}}
      Welcome to your Bourgeon app!
      {{/if}}
    </p>
    {{#if routing}}
    <p>
      <router-link to="/hello/bourgeon">{{#if i18n}}\{{ $t('buttons.hello') }}{{else}}Hello{{/if}}</router-link>
    </p>
    {{/if}}
    {{#if i18n}}
    <p>
      <button @click="setLang(lang)" v-for="lang in locales">\{{ $t('locales.'+ lang) }}</button>
    </p>
    {{/if}}
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
