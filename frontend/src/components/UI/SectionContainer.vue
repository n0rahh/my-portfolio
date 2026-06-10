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

    //prev: 960px
    @media (max-width: 1279px) {
      min-height: 100vh;
      height: auto;
    }
  }
</style>
