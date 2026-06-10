<template>
  <ol class="timeline w-100">
    <li
      v-for="(work, index) in works"
      :key="index"
      class="timeline__item"
    >
      <div class="timeline__content text-left">
        <div class="d-flex justify-space-between align-baseline flex-wrap ga-2">
          <span class="h4 w-600">{{ work.company }}</span>
          <span class="p3 timeline__dates">{{ work.dateRange }}</span>
        </div>
        <span class="p2 timeline__position">{{ work.position }}</span>
        <p class="p2 l-5 mt-3 mb-0">{{ work.description }}</p>

        <v-expand-transition>
          <ul
            v-if="expandedIndex === index"
            class="achievements mt-2"
          >
            <li
              v-for="(achievement, i) in work.achievements"
              :key="i"
              class="p2 l-5 achievement-point mt-2"
            >
              {{ achievement }}
            </li>
          </ul>
        </v-expand-transition>

        <v-btn
          v-if="work.achievements?.length"
          variant="text"
          color="primary"
          size="small"
          class="details-button mt-1"
          @click="toggleDetails(index, $event)"
        >
          {{ expandedIndex === index ? 'Hide details' : 'Show details' }}
        </v-btn>
      </div>
    </li>
  </ol>
</template>

<script setup>
  import { nextTick, ref } from 'vue';

  defineProps({
    works: {
      type: Array,
      required: true,
    },
  });

  const expandedIndex = ref(null);

  const toggleDetails = async (index, event) => {
    expandedIndex.value = expandedIndex.value === index ? null : index;
    if (expandedIndex.value === null) return;

    // The timeline scrolls inside a fixed-height container — bring the
    // expanded details into view instead of growing the section.
    await nextTick();
    event.target
      .closest('.timeline__item')
      ?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  .timeline {
    list-style: none;
    margin: 0;
    padding: 0;

    // Fixed-height scroll area: the section keeps its size no matter how many
    // jobs there are or how much detail is expanded.
    max-height: 360px;
    overflow-y: auto;
    // Don't hand the wheel over to the page when the list hits its edge.
    overscroll-behavior: contain;
    padding-right: $space-sm;
    scrollbar-width: thin;
    scrollbar-color: $cyan-5 transparent;
    // Fade the tail to hint there's more to scroll.
    mask-image: linear-gradient(180deg, #000 calc(100% - 28px), transparent);

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: $cyan-5;
      border-radius: $radius-pill;
    }

    @include down($bp-lg) {
      max-height: 320px;
    }

    &__item {
      position: relative;
      padding: 0 0 $space-lg $space-lg;
      min-width: 0;

      // Vertical rail connecting the dots.
      &::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 14px;
        bottom: -8px;
        width: 2px;
        background: linear-gradient(180deg, $cyan-5, $white-15);
      }

      &:last-child {
        padding-bottom: $space-xl;

        &::before {
          display: none;
        }
      }

      // Timeline dot.
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 6px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: $cyan;
        box-shadow: 0 0 10px $cyan-5;
      }
    }

    &__content {
      min-width: 0;
      overflow-wrap: anywhere;
    }

    &__dates {
      color: $text-inactive;
      white-space: nowrap;
    }

    &__position {
      color: $cyan;
    }
  }

  .achievements {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .achievement-point {
    position: relative;
    padding-left: 20px;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      top: 0;
      font-size: 20px;
      line-height: 1.2;
      color: $cyan;
    }
  }

  .details-button {
    text-decoration: underline;
    text-transform: none;
    width: fit-content;
    padding: 0;
  }
</style>
