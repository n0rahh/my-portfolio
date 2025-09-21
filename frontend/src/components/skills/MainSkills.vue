<template>
  <v-container
    fluid
    class="px-0"
  >
    <v-row class="mb-2">
      <v-col cols="12">
        <div class="tabs-scroll">
          <v-tabs
            v-model="tab"
            hide-slider
          >
            <v-tab
              v-for="type in skillTypes"
              :key="type"
              :value="type"
              class="mb-4 p3 tab-chip"
              :class="{ active: tab === type }"
            >
              {{ type }}
            </v-tab>
          </v-tabs>
        </div>
      </v-col>
    </v-row>
    <v-row
      v-for="(skill, index) in sortedSkills"
      :key="index"
      class="mb-2"
    >
      <v-col
        cols="6"
        md="2"
        lg="4"
        class="py-0 d-flex align-center"
        :class="{
          'mb-1': $vuetify.display.smAndDown,
        }"
      >
        <span class="p1">{{ skill.name }}</span>
      </v-col>
      <v-col
        cols="12"
        md="7"
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
        md="1"
        class="py-0"
      >
        <span class="percentage-text">{{ skill.percentage }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref, watch } from 'vue';

  const props = defineProps({
    skills: {
      type: Array,
      required: true,
    },
    skillTypes: {
      type: Array,
      required: true,
    },
  });

  const animate = ref(false);
  const tab = ref('backend');
  const sortedSkills = ref([]);

  const sort = (type) => {
    const typedSkills = props.skills.filter((skill) => {
      return skill.type === type;
    });
    sortedSkills.value = typedSkills.sort((a, b) => {
      return parseFloat(b.percentage) - parseFloat(a.percentage);
    });
  };

  const progressBarWidth = (index) => {
    return `--progress: ${index}`;
  };

  watch(tab, () => {
    sort(tab.value);
  });

  watch(
    () => props.skills,
    () => {
      sort(tab.value);
      setTimeout(() => {
        animate.value = true;
      }, 100);
    },
    { immediate: true }
  );
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

  .tabs-scroll {
    @media (max-width: 450px) {
      max-width: 300px;
      overflow-x: auto;
      white-space: nowrap;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    @media (max-width: 400px) {
      max-width: 220px;
      overflow-x: auto;
      white-space: nowrap;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .v-tab {
    @media (max-width: 600px) {
      display: inline-block !important;
    }
  }

  .tab-chip {
    border-radius: 32px !important;
    padding: 0 16px;
    border: 1px solid $aqua-neon;
    margin-right: 12px;
    line-height: 12px;
    height: 40px;

    @media (max-width: 1500px) {
      height: 44px !important;
      line-height: 14px;
      font-size: 14px;
      padding: 0 8px;
      min-width: 76px !important;
    }

    @media (max-width: 600px) {
      height: 32px !important;
      line-height: 10px;
      font-size: 10px;
      padding: 0 8px;
      min-width: 64px !important;
    }
  }

  .active {
    background: $cyan-dark;
    font-weight: 600;
    border: 1px solid $aqua-neon;
  }
</style>
