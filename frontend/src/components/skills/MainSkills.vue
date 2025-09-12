<template>
  <v-container
    fluid
    class="px-0"
  >
    <v-row class="mb-2">
      <v-tabs
        v-for="type in skillTypes"
        :key="type"
        v-model="tab"
        hide-slider
      >
        <v-tab
          :value="type"
          class="mb-4 p3 tab-chip"
          :class="{ active: tab === type }"
        >
          {{ type }}
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
            :style="progressBarWidth(skill.percentage)"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="1"
        class="py-0"
      >
        <span class="percentage-text">{{ skill.percentage }}</span>
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
  import { http } from '@/plugins/http';

  const animate = ref(false);
  const tab = ref('backend');
  const skillTypes = ref([]);
  const skills = ref([]);
  const sortedSkills = ref([]);

  watch(tab, () => {
    sort(tab.value);
  });

  onMounted(async () => {
    await fetchSkills();
  });

  const progressBarWidth = (index) => {
    return `--progress: ${index}`;
  };

  const sort = (type) => {
    const typedSkills = skills.value.filter((skill) => {
      return skill.type === type;
    });
    sortedSkills.value = typedSkills.sort((a, b) => {
      return parseFloat(b.percentage) - parseFloat(a.percentage);
    });
  };

  const fetchSkills = async () => {
    try {
      const { data } = await http.get('/skills/all');
      skills.value = data.skills;
      skillTypes.value = data.skillCategories;
      if (skillTypes.value.length > 0) {
        tab.value = skillTypes.value[0];
        sort(tab.value);
      }
      setTimeout(() => {
        animate.value = true;
      }, 100);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
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

  .percentage-text {
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
