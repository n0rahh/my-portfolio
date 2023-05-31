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
        <span class="p1 mt-8">
          {{ projectInfo.longDescription }}
        </span>
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
  padding: 120px 220px;
}

.source-code {
  background-color: $secondary;
}
</style>