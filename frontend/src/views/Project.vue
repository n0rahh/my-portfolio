<template>
  <div class="project-page">
    <SectionContainer>
      <v-skeleton-loader
        v-if="isLoading"
        type="article, image"
        class="w-100 bg-transparent"
      />

      <GlassCard
        v-else-if="error"
        type="content"
        custom-class="d-flex flex-column align-center text-center py-12"
      >
        <span class="h3">Project not found</span>
        <p class="p1 mt-4">It may have been removed, or the link is incorrect.</p>
        <v-btn
          color="primary"
          variant="outlined"
          class="mt-8"
          :to="{ name: 'Home' }"
        >
          Back to Home Page
        </v-btn>
      </GlassCard>

      <GlassCard
        v-else
        :title="project.title"
        type="main"
        custom-class="d-flex flex-column align-start project-card-body"
      >
        <v-chip
          color="primary"
          variant="outlined"
          size="small"
        >
          {{ project.category }}
        </v-chip>

        <v-row class="w-100 mt-2">
          <v-col
            cols="12"
            lg="6"
          >
            <h3 class="h3">About this project</h3>
            <p class="p1 l-6 mt-4 description">
              {{ project.longDescription || descriptionPlaceholder }}
            </p>

            <template v-if="project.keyAccomplishments?.length">
              <h3 class="h3 mt-8">Key accomplishments</h3>
              <ul class="accomplishments mt-4">
                <li
                  v-for="(item, index) in project.keyAccomplishments"
                  :key="index"
                  class="p1 mt-3 accomplishment-point"
                >
                  {{ item }}
                </li>
              </ul>
            </template>

            <h3 class="h3 mt-8">Built with</h3>
            <div class="d-flex flex-wrap ga-4 mt-4">
              <div
                v-for="technology in project.technologies"
                :key="technology.name"
                class="technology-chip"
              >
                <v-img
                  width="24"
                  height="24"
                  :src="getIconUrl(technology.icon)"
                  :alt="`${technology.name} icon`"
                />
                <span class="p2">{{ technology.name }}</span>
              </div>
            </div>

            <div class="d-flex flex-wrap ga-4 mt-10">
              <v-btn
                v-if="project.projectUrl"
                color="primary"
                variant="outlined"
                :href="project.projectUrl"
                target="_blank"
                rel="noopener"
              >
                <v-icon
                  :icon="mdiOpenInNew"
                  class="mr-2"
                />
                Live site
              </v-btn>
              <v-btn
                v-if="project.sourceCodeUrl"
                color="primary"
                variant="outlined"
                :href="project.sourceCodeUrl"
                target="_blank"
                rel="noopener"
              >
                <v-icon
                  :icon="mdiGithub"
                  class="mr-2"
                />
                Source code
              </v-btn>
              <span
                v-if="!project.projectUrl && !project.sourceCodeUrl"
                class="p3 text-disabled align-self-center"
              >
                Source code is private (commercial project)
              </span>
            </div>
          </v-col>

          <v-col
            cols="12"
            lg="6"
          >
            <div
              v-if="project.images?.length"
              class="image-grid"
            >
              <button
                v-for="(image, index) in project.images"
                :key="image"
                type="button"
                class="img-wrapper"
                :aria-label="`Open screenshot ${index + 1} of ${project.title}`"
                @click="openLightbox(index)"
              >
                <v-img
                  :src="getImageUrl(image)"
                  :alt="`Screenshot of ${project.title}`"
                  aspect-ratio="1.6"
                  cover
                />
              </button>
            </div>
            <GlassCard
              v-else
              type="content"
              custom-class="d-flex align-center justify-center py-16"
            >
              <span class="p2 text-disabled">Screenshots coming soon</span>
            </GlassCard>
          </v-col>
        </v-row>
      </GlassCard>
    </SectionContainer>

    <v-dialog
      v-model="lightbox.visible"
      max-width="1100"
    >
      <v-img
        :src="getImageUrl(project.images?.[lightbox.index])"
        :alt="`Screenshot of ${project.title}`"
        class="lightbox-image"
        @click="lightbox.visible = false"
      />
      <div class="lightbox-navigation mt-2 d-flex justify-center ga-8">
        <ArrowButton
          direction="left"
          @click="stepLightbox(-1)"
        />
        <ArrowButton
          direction="right"
          @click="stepLightbox(1)"
        />
      </div>
    </v-dialog>
  </div>
</template>

<script setup>
  import { onMounted, reactive, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { mdiGithub, mdiOpenInNew } from '@mdi/js';

  import { getProject } from '@/api/portfolio';
  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import GlassCard from '@/components/UI/GlassCard.vue';
  import ArrowButton from '@/components/UI/ArrowButton.vue';

  const route = useRoute();

  const project = ref({});
  const isLoading = ref(true);
  const error = ref(false);
  const lightbox = reactive({ visible: false, index: 0 });

  // Shown until a longDescription is filled in for the project in the database.
  const descriptionPlaceholder =
    'A detailed case study for this project is on its way — challenges, architecture ' +
    'decisions and lessons learned will appear here soon.';

  const getImageUrl = (imageName) =>
    imageName ? new URL(`/src/assets/imgs/projects/${imageName}`, import.meta.url).href : '';

  const getIconUrl = (iconName) =>
    new URL(`/src/assets/icons/technologies/${iconName}`, import.meta.url).href;

  const openLightbox = (index) => {
    lightbox.index = index;
    lightbox.visible = true;
  };

  const stepLightbox = (step) => {
    const count = project.value.images.length;
    lightbox.index = (lightbox.index + step + count) % count;
  };

  onMounted(async () => {
    try {
      const data = await getProject(route.params.id);
      project.value = data.project;
      document.title = `${data.project.title} | Vlad Herasymovych`;
    } catch (err) {
      console.error('Error fetching project:', err);
      error.value = true;
    } finally {
      isLoading.value = false;
    }
  });
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  .project-page {
    padding-top: $toolbar-offset;
  }

  :deep(.project-card-body) {
    flex-direction: column;
    text-align: left;
  }

  .description {
    white-space: pre-wrap;
  }

  .accomplishments {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .accomplishment-point {
    position: relative;
    padding-left: 20px;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      top: 0;
      font-size: 24px;
      line-height: 1;
      color: $cyan;
    }
  }

  .technology-chip {
    display: flex;
    align-items: center;
    gap: $space-xs;
    padding: $space-xs $space-md;
    border: 1px solid $white-15;
    border-radius: $radius-pill;
    background: $white-05;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $space-xs;

    @include down($bp-sm) {
      grid-template-columns: 1fr;
    }
  }

  .img-wrapper {
    padding: 0;
    border: none;
    background: none;
    border-radius: $radius-md;
    overflow: hidden;
    cursor: pointer;
    transition: transform $transition-base;

    &:hover,
    &:focus-visible {
      transform: scale(1.03);
    }
  }

  .lightbox-image {
    border-radius: $radius-md;
    cursor: pointer;
  }
</style>
