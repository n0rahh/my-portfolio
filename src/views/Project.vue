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
    <v-row class="pa-0 ma-0">
      <v-col
        xl="5"
        lg="6"
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
        class="d-flex mt-16"
        :class="{
          'ml-6': $vuetify.display.mdAndUp,
          'ml-3': $vuetify.display.smAndDown
        }"
        v-bind="!$vuetify.display.xs ? aosAttribute('flip-left', 200, 300, 'ease-in-out', 'center') : ''"
      >
        <div
          class="image-grid"
          :class="{
            'mt-16 grid-height': $vuetify.display.xl,
          }"
        >
          <v-dialog
            :key="dialogKey"
            v-model="imageModal"
            max-width="80%"
          >
            <template #activator>
              <div
                v-for="(image, index) in projectInfo.images"
                :key="index"
                class="img-wrapper"
                @click="openImageModal(index)"
              >
                <v-img
                  :src="require(`@/assets/imgs/projects/${image}`)"
                  :alt="projectInfo.title"
                  :width="imgWidth"
                  :cover="true"
                />
                <div class="img-overlay" />
              </div>
            </template>
            <v-card>
              <v-img
                :src="require(`@/assets/imgs/projects/${projectInfo.images[currentImageIndex]}`)"
                :alt="projectInfo.title"
                @click="closeImageModal"
              />
            </v-card>
            <div class="mt-2 navigation d-flex justify-space-around">
              <v-btn
                variant="plain"
                color="white"
                class="p2 w-600 d-flex align-center"
                @click="prevImage"
              >
                <v-icon
                  size="x-large"
                  icon="mdi-arrow-left-thick"
                  class="mr-4"
                />
                <span v-if="!$vuetify.display.xs">{{ $t('PROJECTS.DIALOG.PREV_BTN') }}</span>
              </v-btn>
              <v-btn
                variant="plain"
                color="white"
                class="p2 w-600 d-flex align-center"
                @click="nextImage"
              >
                <span v-if="!$vuetify.display.xs">{{ $t('PROJECTS.DIALOG.NEXT_BTN') }}</span>
                <v-icon
                  size="x-large"
                  icon="mdi-arrow-right-thick"
                  class="ml-4"
                />
              </v-btn>
            </div>
          </v-dialog>
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
      imageModal: false,
      currentImageIndex: 0,
      dialogKey: 0,
    };
  },
  computed: {
    imgWidth() {
      return this.$vuetify.display.lgAndUp ? 400 : 300;
    },
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
    openImageModal(index) {
      this.currentImageIndex = index;
      this.imageModal = true;
    },

    closeImageModal() {
      this.imageModal = false;
    },

    nextImage() {
      this.dialogKey += 1;
      this.currentImageIndex = (this.currentImageIndex + 1) % this.projectInfo.images.length;
    },

    prevImage() {
      this.dialogKey -= 1;
      this.currentImageIndex = (this.currentImageIndex - 1 + this.projectInfo.images.length) % this.projectInfo.images.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.container-size {
  min-height: 100vh;
  padding: 40px 0 80px 180px;
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
  grid-gap: 8px;

  @media screen and (max-width: 649px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
}

.grid-height {
  height: 400px;
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

.v-dialog--active .v-dialog__content {
  overflow: hidden;
}

.v-dialog--active .v-dialog__content .v-card {
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: none;
}

.v-dialog--active .v-dialog__content .v-card .v-img {
  border-radius: 0;
  cursor: pointer;
}

.navigation {
  background-color: #212121;
  border-radius: 8px;
  z-index: 10;
}

</style>