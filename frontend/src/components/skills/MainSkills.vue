<template>
  <div class="main-skills w-100">
    <div
      class="category-chips"
      role="tablist"
      aria-label="Skill categories"
    >
      <button
        v-for="type in skillTypes"
        :key="type"
        type="button"
        role="tab"
        class="category-chip p3"
        :class="{ active: activeType === type }"
        :aria-selected="activeType === type"
        @click="activeType = type"
      >
        {{ type }}
      </button>
    </div>

    <transition-group
      name="skill-list"
      tag="ul"
      class="skill-list mt-6"
    >
      <li
        v-for="skill in visibleSkills"
        :key="`${activeType}-${skill.name}`"
        class="skill-row"
      >
        <div class="d-flex justify-space-between align-center mb-1">
          <span class="p2">{{ skill.name }}</span>
          <span class="p3 skill-row__value">{{ skill.percentage }}</span>
        </div>
        <div class="skill-row__track">
          <div
            class="skill-row__bar"
            :style="`--progress: ${skill.percentage}`"
          />
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script setup>
  import { computed, ref, watch } from 'vue';

  const props = defineProps({
    skills: {
      type: Array,
      required: true,
    },
    skillTypes: {
      type: Array,
      required: true,
    },
  });

  const activeType = ref('');

  watch(
    () => props.skillTypes,
    (types) => {
      if (!activeType.value && types.length) activeType.value = types[0];
    },
    { immediate: true }
  );

  const visibleSkills = computed(() =>
    props.skills
      .filter((skill) => skill.type === activeType.value)
      .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage))
  );
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  .category-chips {
    display: flex;
    gap: $space-sm;
    overflow-x: auto;
    max-width: 100%;
    padding-bottom: 4px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .category-chip {
    flex-shrink: 0;
    padding: $space-xs $space-md;
    border: 1px solid $aqua-neon;
    border-radius: $radius-pill;
    background: transparent;
    color: $white;
    text-transform: capitalize;
    cursor: pointer;
    transition:
      background-color $transition-fast,
      font-weight $transition-fast;

    &.active {
      background: $cyan-dark;
      font-weight: 600;
    }

    &:hover:not(.active) {
      background: $white-05;
    }
  }

  .skill-list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;

    // Soften height jumps when switching between categories with different
    // skill counts.
    min-height: 220px;
  }

  .skill-row {
    margin-bottom: $space-md;
    width: 100%;

    &__value {
      color: $aqua-neon;
    }

    &__track {
      width: 100%;
      height: 10px;
      border-radius: $radius-pill;
      background-color: $deep-ocean-blue;
      overflow: hidden;
    }

    // Width is static; the fill is animated with a composited transform so it
    // never triggers layout.
    &__bar {
      height: 100%;
      width: var(--progress);
      border-radius: $radius-pill;
      background: linear-gradient(90deg, $cyan-dark, $aqua-neon);
      transform-origin: left;
      animation: fill-progress 1s ease-out;
    }
  }

  @keyframes fill-progress {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .skill-row__bar {
      animation: none;
    }
  }

  .skill-list-enter-active {
    transition: opacity 0.3s ease;
  }

  .skill-list-enter-from {
    opacity: 0;
  }
</style>
