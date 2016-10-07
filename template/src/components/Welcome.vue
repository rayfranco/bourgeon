<template>
  <div>
    <p>
      Welcome to your Vue.js app!
    </p>
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
