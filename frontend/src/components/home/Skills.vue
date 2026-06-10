<template>
  <SectionContainer id="skills">
    <GlassCard
      v-reveal
      type="main"
      title="Skills & Work"
      custom-class="skills-card"
    >
      <v-row class="w-100 ma-0">
        <v-col
          cols="12"
          lg="6"
          class="skills-column"
        >
          <p class="h4 w-600 column-header"><span class="prompt">&gt;</span> skills --list</p>
          <MainSkills
            class="mt-6"
            :skills="skills"
            :skill-types="skillTypes"
          />
        </v-col>
        <v-col
          cols="12"
          lg="6"
          class="work-column"
        >
          <p class="h4 w-600 column-header"><span class="prompt">&gt;</span> work --history</p>
          <WorkingHistory
            class="mt-6"
            :works="works"
          />
        </v-col>
      </v-row>
    </GlassCard>
  </SectionContainer>
</template>

<script setup>
  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import GlassCard from '@/components/UI/GlassCard.vue';
  import MainSkills from '@/components/skills/MainSkills.vue';
  import WorkingHistory from '@/components/skills/WorkingHistory.vue';

  defineProps({
    skills: {
      type: Array,
      required: true,
    },
    skillTypes: {
      type: Array,
      required: true,
    },
    works: {
      type: Array,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  :deep(.skills-card) {
    text-align: left;
  }

  .column-header {
    margin: 0;
  }

  .skills-column {
    padding-right: $space-xl;

    @include down($bp-lg) {
      padding-right: $space-md;
    }
  }

  .work-column {
    padding-left: $space-xl;
    border-left: 1px solid $white-15;

    @include down($bp-lg) {
      margin-top: $space-2xl;
      padding-left: $space-md;
      border-left: none;
      border-top: 1px solid $white-15;
      padding-top: $space-2xl;
    }
  }
</style>
