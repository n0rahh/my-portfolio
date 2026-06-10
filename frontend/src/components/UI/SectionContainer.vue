<template>
  <section
    :id="id"
    class="section-container"
    :class="{ 'section-container--full': fullHeight }"
  >
    <slot />
  </section>
</template>

<script setup>
  defineProps({
    id: {
      type: String,
      default: '',
    },
    // Only the hero wants a full-viewport section; everything else is sized
    // by its content to keep the page compact.
    fullHeight: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  // Single owner of the horizontal page gutter — every section aligns to the
  // same edges on every viewport, so nothing shifts while scrolling.
  .section-container {
    width: 100%;
    max-width: $page-max-width;
    margin-inline: auto;
    padding-inline: $page-gutter;
    padding-block: clamp(32px, 7vh, 88px);
    scroll-margin-top: $toolbar-offset;
    display: flex;
    align-items: center;

    // `svh` avoids the mobile URL-bar resize jump that plain `vh` causes.
    &--full {
      @include up($bp-lg) {
        min-height: 100svh;
      }
    }
  }
</style>
