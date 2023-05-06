<template>
  <v-container
    fluid
    v-bind="aosAttribute('fade-right', 200, 600, 'ease-in-out', 'center')"
  >
    <v-row
      v-for="(skill, index) in skills"
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
          percent: '40%',
        },
        {
          name: 'Node.js',
          percent: '20%',
        },
        {
          name: 'JavaScript',
          percent: '40%',
        },
        {
          name: 'TypeScript',
          percent: '20%',
        },
        {
          name: 'Express',
          percent: '60%',
        },
        {
          name: 'Nest',
          percent: '20%',
        },
        {
          name: 'REST API',
          percent: '50%',
        },
        {
          name: 'Cypress',
          percent: '30%',
        },
        {
          name: 'SCRUM',
          percent: '50%',
        },
        {
          name: 'Jira',
          percent: '40%',
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.animate = true;
    }, 100);
  },
  methods: {
    progressBarWidth(index) {
      return `--progress: ${index}`;
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