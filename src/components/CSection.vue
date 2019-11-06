<template>
  <div class="bg-light text-dark">
    pollo
    <p>{{heroName}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    heroName () {
        return this.$store.state.heroName;
      }
  },
}
</script>

<style scoped>

</style>