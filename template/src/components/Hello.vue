<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <p>
      <router-link to="/">{{#if i18n}}\{{ $t('buttons.home') }}{{else}}Home{{/if}}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    msg () {
      {{#if i18n}}
      return this.$t('messages.hello', { name: this.name })
      {{else}}
      return `Hello ${this.name}!`
      {{/if}}
    },
    name () {
      const name = this.$route.params.name
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1
  color green
</style>
