<template>
  <v-container
    fluid
    v-bind="aosAttribute('fade-right', 200, 600, 'ease-in-out', 'center')"
  >
    <v-row
      v-for="(skill, index) in sortedSkills"
      :key="index"
    >
      <v-col
        cols="4"
        class="d-flex align-center"
      >
        <span class="h4">{{ skill.name }}</span>
      </v-col>
      <v-col
        cols="8"
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
      skills: [
        {
          name: 'Vue.js',
          percent: '50%',
        },
        {
          name: 'Vuetify',
          percent: '80%',
        },
        {
          name: 'Node.js',
          percent: '30%',
        },
        {
          name: 'JS/TS',
          percent: '40%',
        },
        {
          name: 'Express.js',
          percent: '40%',
        },
        {
          name: 'Nest',
          percent: '25%',
        },
        {
          name: 'REST API',
          percent: '50%',
        },
        {
          name: 'Cypress',
          percent: '20%',
        },
        {
          name: 'SCRUM',
          percent: '40%',
        },
        {
          name: 'Jira',
          percent: '30%',
        },
        {
          name: 'Postman',
          percent: '40%',
        },
      ],
      sortedSkills: [],
    };
  },
  mounted() {
    this.sort();
    setTimeout(() => {
      this.animate = true;
    }, 100);
  },
  methods: {
    progressBarWidth(index) {
      return `--progress: ${index}`;
    },
    sort() {
      this.sortedSkills = this.skills.sort((a, b) => {
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