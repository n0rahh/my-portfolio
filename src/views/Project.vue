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
        class="d-flex"
        v-bind="aosAttribute('flip-left', 200, 300, 'ease-in-out', 'center')"
      >
        <v-row>
          <v-col
            v-for="(image, index) in projectInfo.images"
            :key="index"
            lg="6"
            cols="12"
            class="project-img-wrapper"
          >
            <v-img
              :src="require(`@/assets/imgs/projects/${image}`)"
              :alt="projectInfo.title"
              class="mt-12 project-img"
              max-width="450"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aosMixin from '@/helpers/animation';
import Projects from '@/helpers/projects';

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
      this.projectInfo = Projects.getProject(projectId);
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

.project-img-wrapper {
  &:nth-child(2) {
    margin-top: 50%;
  }
}

.project-img {
  border-radius: 10px;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.35);
    z-index: 10;
    box-shadow: 0 0 10px 5px $tertiary;
  }
}
</style>