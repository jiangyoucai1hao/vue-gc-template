<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {}
  },
  watch: {}
};
</script>

<style>
  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  .app {
    max-width: 100%;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    position: relative;
  }
</style>
<style src="@common_ps/Public.css"></style>
