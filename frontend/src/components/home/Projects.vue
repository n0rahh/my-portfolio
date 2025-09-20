<template>
  <SectionContainer id="projects">
    <GlassCard
      type="main"
      title="Projects"
      custom-class="d-flex flex-column align-center py-10 px-6"
    >
      <div class="projects-carousel-container">
        <v-btn
          v-if="$vuetify.display.mdAndUp"
          icon
          flat
          class="nav-arrow"
          @click="prevPage"
          :disabled="currentPage === 0"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-window
          v-model="currentPage"
          class="projects-window"
        >
          <v-window-item
            v-for="(page, pageIndex) in paginatedProjects"
            :key="pageIndex"
            :value="pageIndex"
          >
            <v-row>
              <v-col
                v-for="(project, projectIndex) in page"
                :key="project.id || projectIndex"
                lg="6"
                cols="12"
                class="d-flex justify-center"
              >
                <div
                  class="project-card"
                  @click="openProject(project.id)"
                >
                  <div class="h4 text-left">
                    {{ project.title }}
                  </div>
                  <div class="d-flex mt-4">
                    <v-img
                      :src="getTileUrl(project.tileUrl)"
                      height="120"
                      width="120"
                      max-width="120"
                      max-height="120"
                      class="colorful-tile"
                    />
                    <div class="d-flex flex-column justify-space-between w-100">
                      <span class="mt-6 p2 text-left">
                        {{ project.category }}
                      </span>
                      <div
                        class="d-flex justify-space-between"
                        :class="{ 'mt-4 ': $vuetify.display.smAndDown }"
                      >
                        <div
                          v-for="(technology, techIndex) in project.technologies"
                          :key="techIndex"
                          class="mb-0 d-flex align-center"
                        >
                          <v-img
                            width="30"
                            height="30"
                            :src="getIconUrl(technology.icon)"
                          >
                            <v-tooltip
                              theme="light"
                              activator="parent"
                              location="top"
                            >
                              <div class="d-flex flex-column">
                                <span class="w-600">{{ technology.name }}</span>
                                <span>{{ technology.category }}</span>
                              </div>
                            </v-tooltip>
                          </v-img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>

        <v-btn
          v-if="$vuetify.display.mdAndUp"
          icon
          flat
          class="nav-arrow"
          @click="nextPage"
          :disabled="currentPage === paginatedProjects.length - 1"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>

      <div class="dot-navigation-horizontal mt-4">
        <div
          v-for="(_, index) in paginatedProjects"
          :key="index"
          :class="['nav-dot', { active: currentPage === index }]"
          @click="currentPage = index"
        />
      </div>
    </GlassCard>
  </SectionContainer>
</template>

<script setup>
  import { onMounted, ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useDisplay } from 'vuetify';
  import { http } from '@/plugins/http';

  import GlassCard from '@/components/UI/GlassCard.vue';
  import SectionContainer from '@/components/UI/SectionContainer.vue';

  const display = useDisplay();

  const projectsList = ref([]);
  const currentPage = ref(0);
  const router = useRouter();
  const PROJECTS_PER_PAGE = display.mdAndDown.value ? 2 : 4;

  const paginatedProjects = computed(() => {
    const pages = [];
    for (let i = 0; i < projectsList.value.length; i += PROJECTS_PER_PAGE) {
      pages.push(projectsList.value.slice(i, i + PROJECTS_PER_PAGE));
    }
    return pages;
  });

  onMounted(async () => {
    await fetchProjects();
  });

  const openProject = (projectId) => {
    router.push(`/project/${projectId}`);
  };

  const getTileUrl = (imageName) => {
    return new URL(`/src/assets/imgs/colorful-tiles/${imageName}`, import.meta.url).href;
  };

  const getIconUrl = (iconName) => {
    return new URL(`/src/assets/icons/technologies/${iconName}`, import.meta.url).href;
  };

  const fetchProjects = async () => {
    try {
      const { data } = await http.get('/projects/all');
      projectsList.value = data.projects;
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const prevPage = () => {
    if (currentPage.value > 0) {
      currentPage.value--;
    }
  };

  const nextPage = () => {
    if (currentPage.value < paginatedProjects.value.length - 1) {
      currentPage.value++;
    }
  };
</script>

<style lang="scss" scoped>
  @use '@/styles/colors.scss' as *;

  .projects-carousel-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .projects-window {
    flex-grow: 1;
  }

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

  .dot-navigation-horizontal {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 10px 0;
    .nav-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $white-3;
      transition: background-color 0.3s ease;
      cursor: pointer;
      &.active {
        background-color: $cyan;
        box-shadow: 0 0 8px $white-5;
      }
    }
  }
  .project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 563px;
    height: 250px;
    margin: 20px;
    padding: 30px 30px;
    position: relative;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    z-index: 100;

    backdrop-filter: blur(3.9px);
    -webkit-backdrop-filter: blur(3.9px);
    background-color: $deep-blue-37;
    box-shadow: 0 10px 40px $black-25;
    border: 2px solid $cyan;
    border-radius: 32px;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 40px $black-25;
    }

    @media (max-width: 1450px) {
      width: 480px;
    }

    @media (max-width: 1279px) {
      width: 563px;
    }

    @media (max-width: 685px) {
      width: 400px;
      margin: 0;
    }

    @media (max-width: 500px) {
      width: 310px;
    }

    .colorful-tile {
      margin-right: 24px;
      @media (max-width: 685px) {
        display: none;
      }
    }
  }
</style>
