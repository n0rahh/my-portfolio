<template>
  <v-btn
    icon
    flat
    class="nav-arrow"
    :disabled="disabled"
    :aria-label="`Navigate ${direction}`"
    @click="emit('click')"
  >
    <v-icon :icon="icon" />
  </v-btn>
</template>

<script setup>
  import { computed } from 'vue';
  import { mdiChevronDown, mdiChevronLeft, mdiChevronRight, mdiChevronUp } from '@mdi/js';

  const ICONS = {
    left: mdiChevronLeft,
    right: mdiChevronRight,
    up: mdiChevronUp,
    down: mdiChevronDown,
  };

  const props = defineProps({
    direction: {
      type: String,
      required: true,
      validator: (value) => ['left', 'right', 'up', 'down'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['click']);

  const icon = computed(() => ICONS[props.direction]);
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  .nav-arrow {
    background: $white-05;
    backdrop-filter: blur(5px);
    border: 1px solid $cyan;
    border-radius: 50%;
    margin: 0 10px;
    width: 44px;
    height: 44px;
    z-index: 100;

    .v-icon {
      color: $white-7;
      font-size: 24px;
    }

    &:hover {
      background: $white-15;

      .v-icon {
        color: $white;
      }
    }

    &:disabled {
      opacity: 0.3;
    }
  }
</style>
