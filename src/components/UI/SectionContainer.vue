<template>
  <v-container
    :id="id"
    class="container d-flex align-center"
  >
    <slot />
  </v-container>
</template>

<script setup>
  defineProps({
    id: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
  }
</style>
