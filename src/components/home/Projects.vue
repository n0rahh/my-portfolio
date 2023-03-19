<template>
  <v-container class="py-16 container">
    <v-row>
      <v-col
        cols="6"
      >
        <span class="h0 my-8">{{ $t('HOME_PAGE.HOME_PROJECTS.TITLE') }}</span>
      </v-col>
      <v-col
        cols="12"
      >
        <p class="h4">
          {{ $t('HOME_PAGE.HOME_PROJECTS.SUBTITLE') }} <a href="/en/projects">{{ $t('HOME_PAGE.HOME_PROJECTS.PROJECTS_LINK') }}</a>.
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
        >
          <a 
            href="#"
            class="projects-item_link"
          >
            <div class="projects-item_bg"></div>
            <div class="projects-item_title">
              {{ item.title }}
            </div>
            <span class="projects-item_description">
              {{ item.desc }}
            </span>
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projectsList: [
        {
          title: 'Project 1',
          desc: 'Test description 1. One, two, three, four, five!',
        },
        {
          title: 'Project 2',
          desc: 'Test description 2. One, two, three, four, five!',
        },
        {
          title: 'Project 3',
          desc: 'Test description 3. One, two, three, four, five!',
        },
        {
          title: 'Project 4',
          desc: 'Test description 4. One, two, three, four, five!',
        },
        {
          title: 'Project 5',
          desc: 'Test description 5. One, two, three, four, five!',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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
      background-color: #3ecd5e;
    }
  }
  &:nth-child(3n) {
    .projects-item_bg {
      background-color: #e44003;
    }
  }
  &:nth-child(4n) {
    .projects-item_bg {
      background-color: #952aff;
    }
  }
  &:nth-child(5n) {
    .projects-item_bg {
      background-color: #cd3e94;
    }
  }
  &:nth-child(6n) {
    .projects-item_bg {
      background-color: #4c49ea;
    }
  }
}

.projects-item {
  &_link {
    display: block;
    padding: 30px 20px;
    background-color: #121212;
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
    color: #fff;
    z-index: 2;
    position: relative;
  }
  &_bg {
    height: 128px;
    width: 128px;
    background-color: #f9b234;
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