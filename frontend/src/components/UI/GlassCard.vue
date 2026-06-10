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
    },
    customClass: {
      type: [String, Object, Array],
      default: '',
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

    @media (max-width: 960px) {
      font-size: 36px;
      left: 60px;
      top: -28px;
    }

    @media (max-width: 600px) {
      font-size: 24px;
      left: 30px;
      top: -20px;
    }
  }
</style>
