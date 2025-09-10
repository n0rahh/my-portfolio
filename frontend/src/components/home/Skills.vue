<template>
  <SectionContainer id="skills">
    <GlassCard
      type="main"
      title="Skills & Work"
    >
      <v-row>
        <v-col
          cols="6"
          class="d-flex"
        >
          <GlassCard
            type="content"
            class="d-flex flex-column"
          >
            <div>
              <span class="h2">Skills</span>
              <main-skills class="mt-6" />
            </div>
          </GlassCard>
        </v-col>
        <v-col cols="6">
          <GlassCard
            type="content"
            class="d-flex flex-column"
          >
            <div>
              <span class="h2">Work Experience</span>
              <working-history class="mt-6" />
            </div>
          </GlassCard>
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
</script>
