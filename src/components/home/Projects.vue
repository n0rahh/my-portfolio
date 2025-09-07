<template>
  <SectionContainer id="projects">
    <GlassCard
      type="main"
      title="Projects"
    >
      <v-row>
        <v-col
          v-for="(project, i) in projectsList"
          :key="i"
          lg="4"
          sm="6"
          cols="12"
        >
          <div
            class="project-card"
            @click="openProject(i)"
          >
            <div class="h4">
              {{ project.title }}
            </div>
            <div class="d-flex mt-4">
              <v-img
                :src="getTileUrl(project.tileUrl)"
                height="120"
                width="120"
              />
              <div class="d-flex flex-column justify-space-between">
                <span class="ml-6 mt-6 p2">
                  {{ project.projectType }}
                </span>
                <div class="d-flex justify-space-between mb-6s">
                  <div
                    v-for="(description, index) in project.shortDescription"
                    :key="index"
                    class="mb-0 d-flex align-center ml-6"
                  >
                    <v-img
                      width="30"
                      height="30"
                      :src="getIconUrl(description.icon)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </GlassCard>
  </SectionContainer>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';

  import GlassCard from '@/components/UI/GlassCard.vue';
  import SectionContainer from '@/components/UI/SectionContainer.vue';

  import Projects from '@/helpers/projects';

  const projectsList = ref([]);
  const router = useRouter();

  onMounted(() => {
    projectsList.value = Projects.allProjects;
  });

  const openProject = (index) => {
    router.push(`/project/${index}`);
  };

  const getTileUrl = (imageName) => {
    return new URL(`/src/assets/imgs/colorful-tiles/${imageName}`, import.meta.url).href;
  };

  const getIconUrl = (iconName) => {
    return new URL(`/src/assets/icons/technologies/${iconName}`, import.meta.url).href;
  };
</script>

<style lang="scss" scoped>
  @use '@/styles/colors.scss' as *;

  .project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
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
  }
</style>
