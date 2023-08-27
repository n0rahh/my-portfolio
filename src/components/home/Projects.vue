<template>
  <v-container
    id="projects"
    class="pt-16 container"
  >
    <v-row>
      <v-col
        cols="6"
        v-bind="aosAttribute('fade-right', 300, 300, 'ease-in-out', 'center')"
      >
        <span
          class="my-8"
          :class="title"
        >{{ $t('HOME_PAGE.HOME_PROJECTS.TITLE') }}</span>
      </v-col>
      <v-col
        cols="12"
        v-bind="aosAttribute(fadeOption, 300, 600, 'ease-in-out', 'center')"
      >
        <p class="h4">
          {{ $t('HOME_PAGE.HOME_PROJECTS.SUBTITLE') }}.
        </p>
      </v-col>
    </v-row>
    <v-row
      class="pt-16"
    >
      <v-col
        v-for="(project, i) in projectsList"
        :key="i"
        class="projects"
        lg="4"
        sm="6"
        cols="12"
      >
        <div
          class="projects_item"
          v-bind="aosAttribute('flip-left', 200, 300, 'ease-in-out', 'center')"
        >
          <a 
            class="projects-item_link"
            @click="openProject(i)"
          >
            <div class="projects-item_bg" />
            <div class="p1 projects-item_title">
              {{ project.title }}
            </div>
            <div class="d-flex justify-space-between">
              <div
                v-for="(description, index) in project.shortDescription"
                :key="index"
                class="projects-item_description mb-0"
              >
                <v-img
                  max-width="30"
                  class="technology-icon"
                  :src="require(`@/assets/icons/technologies/${description.icon}`)"
                />
                <span>
                  {{ description.name }}
                </span>
              </div>
            </div>
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aosMixin from '@/helpers/animation';
import GetLocale from '@/locales/helpers/get-locale';
import Projects from '@/helpers/projects';

export default {
  name: 'Projects',
  mixins: [aosMixin],
  data() {
    return {
      projectsList: [],
    };
  },
  computed: {
    currentLocale() {
      return GetLocale.currentLocale;
    },
    fadeOption() {
      return this.$vuetify.display.lgAndUp ? 'fade-left' : 'fade-down';
    },
    title() {
      return this.$vuetify.display.lgAndUp ? 'h0' : 'h-unique';
    },
  },
  created() {
    this.projectsList = Projects.allProjects;
  },
  methods: {
    openProject(index) {
      this.$router.push(`/${this.currentLocale}/project/${index}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.container {
  z-index: 3;
}

.projects {
  &_item {
    -ms-flex-preferred-size: calc(33.3333% - 30px);
    flex-basis: calc(33.3333% - 30px);
    margin: 0 15px 30px;
    overflow: hidden;
    border-radius: 28px;
  }
  &:nth-child(2n) {
    .projects-item_bg {
      background-color: $projects-bg-1;
    }
  }
  &:nth-child(3n) {
    .projects-item_bg {
      background-color: $projects-bg-2;
    }
  }
  &:nth-child(4n) {
    .projects-item_bg {
      background-color: $projects-bg-3;
    }
  }
  &:nth-child(5n) {
    .projects-item_bg {
      background-color: $projects-bg-4;
    }
  }
  &:nth-child(6n) {
    .projects-item_bg {
      background-color: $projects-bg-5;
    }
  }
}

.projects-item {
  &_link {
    display: block;
    padding: 30px 20px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      .projects-item_bg {
        -webkit-transform: scale(10);
        -ms-transform: scale(10);
        transform: scale(10);
      }
    }
  }
  &_title, &_description {
    min-height: 57px;
    margin: 0 0 25px;
    overflow: hidden;
    color: $white;
    z-index: 2;
    position: relative;
  }
  &_bg {
    height: 128px;
    width: 128px;
    background-color: $projects-bg-0;
    z-index: 1;
    position: absolute;
    top: -75px;
    right: -75px;
    border-radius: 50%;
    -webkit-transition: all .7s ease;
    -o-transition: all .7s ease;
    transition: all .7s ease;
  }
}

.technology-icon {
  left: 50%; 
  transform: translateX(-50%);
}
</style>