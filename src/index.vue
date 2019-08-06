<template>
<div>
  <router-view @androidback="doBack"></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    doBack() {
      console.log('doBack执行了')
      this.$router.back()
    }
  }
}
</script>

<style scoped>
</style>
