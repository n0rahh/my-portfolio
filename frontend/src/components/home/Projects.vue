<template>
  <SectionContainer id="projects">
    <GlassCard
      v-reveal
      type="main"
      title="Projects"
      custom-class="d-flex flex-column align-center py-10"
    >
      <div class="projects-grid w-100">
        <div
          v-for="project in visibleProjects"
          :key="project.id"
          class="project-card"
          role="link"
          tabindex="0"
          :aria-label="`Open project ${project.title}`"
          @click="openProject(project.id)"
          @keyup.enter="openProject(project.id)"
        >
          <TerminalWindow :title="`~/projects/${slugify(project.title)}`">
            <span class="h4 w-600 d-block">{{ project.title }}</span>

            <p class="terminal-command mt-3"><span class="prompt">&gt;</span> category</p>
            <p class="terminal-output">{{ project.category }}</p>

            <p class="terminal-command"><span class="prompt">&gt;</span> stack</p>
            <div class="terminal-output d-flex flex-wrap ga-3 align-center pt-1">
              <span
                v-for="technology in project.technologies"
                :key="technology.name"
                class="tech-item p3"
              >
                <img
                  width="20"
                  height="20"
                  loading="lazy"
                  :src="getIconUrl(technology.icon)"
                  alt=""
                />
                {{ technology.name }}
              </span>
            </div>

            <p class="terminal-command project-card__cta">
              <span class="prompt">&gt;</span> open --project
              <v-icon
                :icon="mdiArrowRight"
                size="16"
              />
              <span class="terminal-cursor">_</span>
            </p>
          </TerminalWindow>
        </div>
      </div>

      <v-btn
        v-if="projects.length > INITIAL_COUNT"
        variant="text"
        color="primary"
        class="show-toggle mt-6"
        @click="showAll = !showAll"
      >
        <span class="prompt">&gt;</span>&nbsp;
        {{ showAll ? 'show --less' : `show --all (${projects.length})` }}
      </v-btn>
    </GlassCard>
  </SectionContainer>
</template>

<script setup>
  import { computed, ref } from 'vue';
  // import { useRouter } from 'vue-router'; // re-enable with the project redirect
  import { mdiArrowRight } from '@mdi/js';

  import GlassCard from '@/components/UI/GlassCard.vue';
  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import TerminalWindow from '@/components/UI/TerminalWindow.vue';

  const props = defineProps({
    projects: {
      type: Array,
      required: true,
    },
  });

  // const router = useRouter(); // re-enable with the project redirect

  // One grid row (two cards) by default; the toggle reveals the rest.
  const INITIAL_COUNT = 2;
  const showAll = ref(false);

  const visibleProjects = computed(() =>
    showAll.value ? props.projects : props.projects.slice(0, INITIAL_COUNT)
  );

  const openProject = (projectId) => {
    // Project detail pages are temporarily disabled — re-enable the redirect
    // once the case-study content is filled in.
    // router.push({ name: 'Project', params: { id: projectId } });
    void projectId;
  };

  const slugify = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

  const getIconUrl = (iconName) =>
    new URL(`/src/assets/icons/technologies/${iconName}`, import.meta.url).href;
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  // Equal-height cards: grid rows stretch every card in a row to the tallest
  // one, and the CTA pins itself to the bottom of each window.
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    // All rows share the height of the tallest card.
    grid-auto-rows: 1fr;
    gap: $space-lg;

    // Two cards per row from tablet up.
    @include up($bp-md) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .show-toggle {
    text-transform: none;
    font-family: inherit;
  }

  .tech-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: $white-7;

    img {
      display: block;
    }
  }

  .project-card {
    display: flex;
    // Grid items default to min-width: auto and won't shrink below their
    // content — without this the cards overflow the glass card on mobile.
    min-width: 0;
    cursor: pointer;
    transition: transform $transition-base;

    :deep(.terminal-window) {
      display: flex;
      flex-direction: column;
    }

    :deep(.terminal-window__body) {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    &__cta {
      margin-top: auto;
      padding-top: $space-md;
      color: $text-inactive;
      transition: color $transition-base;

      .v-icon {
        vertical-align: middle;
        transition: transform $transition-base;
      }
    }

    &:hover,
    &:focus-visible {
      transform: translateY(-5px);

      :deep(.terminal-window) {
        border-color: $cyan;
      }

      .project-card__cta {
        color: $cyan;

        .v-icon {
          transform: translateX(4px);
        }
      }
    }

    @include down($bp-md) {
      // Hover isn't available on touch devices — keep the CTA highlighted.
      &__cta {
        color: $cyan;
      }
    }
  }
</style>
