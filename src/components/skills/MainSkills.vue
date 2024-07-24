<template>
  <v-container
    fluid
    v-bind="aosAttribute('fade-right', 200, 600, 'ease-in-out', 'center')"
    class="px-0"
  >
    <v-row class="mb-8">
      <v-tabs
        v-for="type in skillTypes"
        :key="type.value"
        v-model="tab"
        color="primary"
        hide-slider
      >
        <v-tab
          color="rgb(41, 255, 201)"
          :value="type.value"
          class="mb-4 p2"
        >
          {{ type.title }}
        </v-tab>
      </v-tabs>
    </v-row>
    <v-row
      v-for="(skill, index) in sortedSkills"
      :key="index"
    >
      <v-col
        v-if="$vuetify.display.smAndUp"
        cols="4"
        class="d-flex align-center"
      >
        <span class="h4">{{ skill.name }}</span>
      </v-col>
      <v-col
        cols="12"
        sm="8"
        class="d-flex align-center"
      >
        <div class="progress-wrapper">
          <div
            class="progress-wrapper_bar w-600 d-flex justify-end pr-2"
            :class="{ 
              'fill': animate 
            }"
            :style="progressBarWidth(skill.percent)"
          >
            {{ skill.percent }}
          </div>
        </div>
      </v-col>
      <v-col
        v-if="$vuetify.display.xs"
        cols="12"
        class="mt-n6"
      >
        <span class="h4">{{ skill.name }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aosMixin from '@/helpers/animation';

export default {
  name: 'MainSkills',
  mixins: [aosMixin],
  data() {
    return {
      animate: false,
      progress: 0,
      tab: 'backend',
      skillTypes: [
        {
          title: 'Frontend',
          value: 'frontend',
        },
        {
          title: 'Backend',
          value: 'backend',
        },
        {
          title: 'Programming',
          value: 'programming',
        },
        {
          title: 'Other',
          value: 'other',
        },
      ],
      skills: [
        {
          name: 'Vue/Vuex',
          percent: '80%',
          type: 'frontend',
        },
        {
          name: 'Vuetify',
          percent: '90%',
          type: 'frontend',
        },
        {
          name: 'Node',
          percent: '60%',
          type: 'programming',
        },
        {
          name: 'JavaScript',
          percent: '70%',
          type: 'programming',
        },
        {
          name: 'TypeScript',
          percent: '50%',
          type: 'programming',
        },
        {
          name: 'Express',
          percent: '70%',
          type: 'backend',
        },
        {
          name: 'Nest/Knex',
          percent: '50%',
          type: 'backend',
        },
        {
          name: 'REST API',
          percent: '60%',
          type: 'backend',
        },
        {
          name: 'Cypress',
          percent: '20%',
          type: 'other',
        },
        {
          name: 'SCRUM',
          percent: '40%',
          type: 'other',
        },
        {
          name: 'Jira',
          percent: '60%',
          type: 'other',
        },
        {
          name: 'Postman',
          percent: '40%',
          type: 'other',
        },
        {
          name: 'Git/Github',
          percent: '70%',
          type: 'other',
        },
        {
          name: 'Firebase',
          percent: '70%',
          type: 'other',
        },
        {
          name: 'MySQL',
          percent: '70%',
          type: 'backend',
        },
        {
          name: 'HTML5',
          percent: '80%',
          type: 'frontend',
        },
        {
          name: 'CSS3/Sass',
          percent: '80%',
          type: 'frontend',
        },
        {
          name: 'React/Redux',
          percent: '50%',
          type: 'frontend',
        },
        {
          name: 'Next',
          percent: '50%',
          type: 'frontend',
        },
        {
          name: 'Tailwind',
          percent: '50%',
          type: 'frontend',
        },
        {
          name: 'GraphQL',
          percent: '30%',
          type: 'backend',
        },
        {
          name: 'MongoDB',
          percent: '30%',
          type: 'backend',
        },
      ],
      sortedSkills: [],
    };
  },
  watch: {
    tab() {
      this.sort(this.tab);
    },
  },
  mounted() {
    this.tab = 'frontend';
    this.sort(this.tab);
    setTimeout(() => {
      this.animate = true;
    }, 100);
  },
  methods: {
    progressBarWidth(index) {
      return `--progress: ${index}`;
    },
    sort(type) {
      const typedSkills = this.skills.filter((skill) => {
        return skill.type === type;
      });
      this.sortedSkills = typedSkills.sort((a, b) => {
        return parseFloat(b.percent) - parseFloat(a.percent);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.progress-wrapper {
  width: 100%;
  height: 30px;
  border-radius: 10px;
  border: 2px solid $dark-green;
  &_bar {
    height: 100%;
    width: 0%;
    background-color: $light-green;
    border-radius: 9px 0 0 9px;
    color: $black;
  }
}

.fill {
  animation: fill-progress 1s forwards;
}

@keyframes fill-progress {
  0% {
    width: 0%;
  }
  100% {
    width: var(--progress);
  }
}
</style>