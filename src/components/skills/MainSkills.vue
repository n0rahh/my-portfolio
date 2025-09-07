<template>
  <v-container
    fluid
    class="px-0"
  >
    <v-row class="mb-2">
      <v-tabs
        v-for="type in skillTypes"
        :key="type.value"
        v-model="tab"
        hide-slider
      >
        <v-tab
          :value="type.value"
          class="mb-4 p3 tab-chip"
          :class="{ active: tab === type.value }"
        >
          {{ type.title }}
        </v-tab>
      </v-tabs>
    </v-row>
    <v-row
      v-for="(skill, index) in sortedSkills"
      :key="index"
      class="mb-2"
    >
      <v-col
        v-if="$vuetify.display.smAndUp"
        cols="4"
        class="py-0 d-flex align-center"
      >
        <span class="p1">{{ skill.name }}</span>
      </v-col>
      <v-col
        cols="12"
        sm="7"
        class="py-0 d-flex align-center"
      >
        <div class="progress-wrapper">
          <div
            class="progress-wrapper_bar w-600 d-flex justify-end pr-2"
            :class="{
              fill: animate,
            }"
            :style="progressBarWidth(skill.percent)"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="1"
        class="py-0"
      >
        <span class="percent-text">{{ skill.percent }}</span>
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

<script setup>
  import { ref, watch, onMounted } from 'vue';

  const animate = ref(false);
  const tab = ref('backend');
  const skillTypes = ref([
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
  ]);
  const skills = ref([
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
      name: 'Python',
      percent: '20%',
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
      name: 'React/Next',
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
  ]);
  const sortedSkills = ref([]);

  watch(tab, () => {
    sort(tab.value);
  });

  onMounted(() => {
    tab.value = 'frontend';
    sort(tab.value);
    setTimeout(() => {
      animate.value = true;
    }, 100);
  });

  const progressBarWidth = (index) => {
    return `--progress: ${index}`;
  };

  const sort = (type) => {
    const typedSkills = skills.value.filter((skill) => {
      return skill.type === type;
    });
    sortedSkills.value = typedSkills.sort((a, b) => {
      return parseFloat(b.percent) - parseFloat(a.percent);
    });
  };
</script>

<style lang="scss" scoped>
  @use '@/styles/colors.scss' as *;

  .progress-wrapper {
    width: 100%;
    height: 12px;
    background-color: $deep-ocean-blue;
    &_bar {
      height: 100%;
      width: 0%;
      background-color: $aqua-neon;
    }
  }

  .percent-text {
    color: $aqua-neon;
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

  .tab-chip {
    border-radius: 32px !important;
    padding: 0 16px;
    border: 1px solid $aqua-neon;
    margin-right: 12px;
    line-height: 12px;
    height: 40px;
  }

  .active {
    background: $cyan-dark;
    font-weight: 600;
    border: 1px solid $aqua-neon;
  }
</style>
