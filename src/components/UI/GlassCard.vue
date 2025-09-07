<template>
  <div class="position-relative">
    <span
      v-if="title"
      class="title"
    >
      {{ title }}
    </span>
    <div
      class="glass-card"
      :class="type"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'main',
    },
  });
</script>

<style lang="scss" scoped>
  .title {
    position: absolute;
    font-weight: 600;
    font-size: 44px;
    top: -36px;
    left: 90px;
    z-index: 100;
  }
</style>
