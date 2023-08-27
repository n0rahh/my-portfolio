<template>
  <v-container
    fluid
    :class="{
      'container-size': $vuetify.display.xl,
      'px-16': $vuetify.display.lg,
      'px-6': $vuetify.display.mdAndDown && !$vuetify.display.xs,
      'px-4': $vuetify.display.xs
    }"
  >
    <v-row>
      <v-col
        xl="5"
        lg="6"
        sm="7"
        cols="12"
        class="d-flex flex-column"
        v-bind="aosAttribute('flip-right', 200, 300, 'ease-in-out', 'center')"
      >
        <span
          :class="{
            'h1 w-600': $vuetify.display.smAndUp,
            'h2': $vuetify.display.xs
          }"
        >
          {{ projectInfo.title }}
        </span>
        <p class="p1 l-6 mt-8 white-spaces">
          {{ projectInfo.longDescription }}
        </p>
        <v-tooltip :text="sourceCodeText(projectInfo.sourceCodeUrl)">
          <template #activator="{ props }">
            <v-btn
              class="mt-12 source-code"
              v-bind="props"
              rounded
              icon="mdi-file-code"
              :href="projectInfo.sourceCodeUrl"
              target="_blank"
            />
          </template>
        </v-tooltip>
        <span class="h3 mt-12 mb-4">{{ $t('PROJECTS.WHAT_USED') }}:</span>
        <p
          v-for="(technology, index) in projectInfo.usedTechnologies"
          :key="index"
          class="p1 mt-6"
        >
          <span class="w-700">{{ technology.name }} - </span>
          <span>{{ technology.description }}</span>
        </p>
      </v-col>
      <v-col
        xl="6"
        lg="6"
        sm="7"
        cols="12"
        class="d-flex ml-6 mt-16"
        v-bind="aosAttribute('flip-left', 200, 300, 'ease-in-out', 'center')"
      >
        <div class="image-grid mt-16">
          <div
            v-for="(image, index) in projectInfo.images"
            :key="index"
            class="img-wrapper"
          >
            <v-img
              :src="require(`@/assets/imgs/projects/${image}`)"
              :alt="projectInfo.title"
              width="400"
              :cover="true"
            />
            <div class="img-overlay" />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aosMixin from '@/helpers/animation';
import Projects from '@/helpers/projects';
import i18n from '@/i18n';
import { ref, watch } from 'vue';

export default {
  name: 'Project',
  mixins: [aosMixin],
  data() {
    return {
      projectInfo: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    this.fetchProject();
  },
  methods: {
    fetchProject() {
      const projectId = this.$route.params.id;
      const project = Projects.getProject(projectId);

      const updateDescriptions = () => {
        project.longDescription = i18n.global.t(`PROJECTS.${project.longDescriptionValue}.DESCRIPTION`);
        project.usedTechnologies.forEach((tech) => {
          tech.description = i18n.global.t(`PROJECTS.TECHNOLOGIES_DESCRIPTION.${tech.value}`);
        });
      };

      project.longDescription = ref('');
      project.usedTechnologies.forEach((tech) => {
        tech.description = ref('');
      });

      updateDescriptions();
      watch(() => i18n.global.locale, updateDescriptions);

      this.projectInfo = project;
    },
    sourceCodeText(url) {
      return url !== '' ? this.$t('PROJECTS.SOURCE_CODE_AVAILABLE') : this.$t('PROJECTS.SOURCE_CODE_UNAVAILABLE');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.container-size {
  min-height: 100vh;
  padding: 100px 0 80px 180px;
}

.source-code {
  background-color: $secondary;
}

.white-spaces {
  white-space: pre-wrap;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 4px;
  max-height: 400px;
}

.v-img {
  border-radius: 12px;
}

.img-wrapper {
  max-height: 400px;
  position: relative;
  transition: all 0.6s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    z-index: 10;
    .img-overlay {
      opacity: 0;
    }
    .v-img {
      border-radius: 0;
    }
  }
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  transition: opacity 0.6s ease;
}
</style>