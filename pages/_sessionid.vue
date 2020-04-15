<template>
  <div></div>
</template>
<script>
export default {
  mounted: async function() {
    await this.$store.dispatch('GET_SESSION', this.$route.params.sessionid)
    this.$router.push('/')
  }
}
</script>
