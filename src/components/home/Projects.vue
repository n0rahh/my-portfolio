<template>
  <v-container
    id="projects"
    class="py-16 container"
  >
    <v-row>
      <v-col
        cols="6"
        v-bind="aosAttribute('fade-right', 300, 300, 'ease-in-out', 'center')"
      >
        <span class="h0 my-8">{{ $t('HOME_PAGE.HOME_PROJECTS.TITLE') }}</span>
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
      class="py-16"
    >
      <v-col
        v-for="(item, i) in projectsList"
        :key="i"
        class="projects"
        cols="4"
      >
        <div
          class="projects_item"
          v-bind="aosAttribute('flip-left', 200, 300, 'ease-in-out', 'center')"
        >
          <a 
            :href="`/${currentLocale}/project`"
            class="projects-item_link"
          >
            <div class="projects-item_bg" />
            <div class="projects-item_title">
              {{ item.title }}
            </div>
            <span class="projects-item_description">
              {{ item.shortDesc }}
            </span>
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aosMixin from '@/helpers/animation';
import GetLocale from '@/locales/helpers/get-locale';

export default {
  name: 'Projects',
  mixins: [aosMixin],
  data() {
    return {
      projectsList: [
        {
          title: 'Project 1',
          shortDesc: 'One, two, three, four, five!', 
          longDesc: 'Test description 1. One, two, three, four, five!',
        },
        {
          title: 'Project 2',
          shortDesc: 'One, two, three, four, five!', 
          longDesc: 'Test description 2. One, two, three, four, five!',
        },
        {
          title: 'Project 3',
          shortDesc: 'One, two, three, four, five!', 
          longDesc: 'Test description 3. One, two, three, four, five!',
        },
        {
          title: 'Project 4',
          shortDesc: 'One, two, three, four, five!', 
          longDesc: 'Test description 4. One, two, three, four, five!',
        },
        {
          title: 'Project 5',
          shortDesc: 'One, two, three, four, five!', 
          longDesc: 'Test description 5. One, two, three, four, five!',
        },
      ],
    };
  },
  computed: {
    currentLocale() {
      return GetLocale.currentLocale;
    },
    fadeOption() {
      return this.$vuetify.display.lgAndUp ? 'fade-left' : 'fade-down';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.container {
  height: 100vh;
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
</style>