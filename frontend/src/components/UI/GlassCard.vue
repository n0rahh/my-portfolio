<template>
  <div class="position-relative w-100">
    <span
      v-if="title"
      class="title"
    >
      {{ title }}
    </span>
    <div
      class="glass-card"
      :class="[type, customClass]"
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
      validator: (value) => ['main', 'content'].includes(value),
    },
    customClass: {
      type: [String, Object, Array],
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  .title {
    position: absolute;
    font-weight: 600;
    font-size: clamp(24px, 3.5vw, 44px);
    top: clamp(-36px, -2.5vw, -20px);
    left: clamp(30px, 6vw, 90px);
    z-index: 100;
  }
</style>
