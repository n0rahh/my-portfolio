<template>
  <div class="terminal-window">
    <div class="terminal-window__bar">
      <span class="dot dot--red" />
      <span class="dot dot--yellow" />
      <span class="dot dot--green" />
      <span class="terminal-window__title p3">{{ title }}</span>
    </div>
    <div class="terminal-window__body p2">
      <slot />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  .terminal-window {
    width: 100%;
    border-radius: $radius-md;
    border: 1px solid $white-15;
    background: rgba(8, 12, 26, 0.85);
    box-shadow: $shadow-card;
    overflow: hidden;
    text-align: left;
    transition:
      border-color $transition-base,
      transform $transition-base;

    &__bar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px $space-md;
      background: $white-05;
      border-bottom: 1px solid $white-15;
    }

    &__title {
      margin-left: $space-xs;
      color: $text-inactive;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      // Allow the title to shrink below its text width (flex items refuse to
      // otherwise), so long names ellipsize instead of widening the window.
      flex: 1 1 0;
      min-width: 0;
    }

    &__body {
      padding: $space-md $space-lg;
    }
  }

  .dot {
    flex-shrink: 0;
    width: 11px;
    height: 11px;
    border-radius: 50%;

    &--red {
      background: #ff5f57;
    }

    &--yellow {
      background: #febc2e;
    }

    &--green {
      background: #28c840;
    }
  }
</style>
