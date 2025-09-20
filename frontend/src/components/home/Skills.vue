<template>
  <SectionContainer id="skills">
    <GlassCard
      type="main"
      title="Skills & Work"
    >
      <v-row>
        <v-col
          lg="6"
          cols="12"
          class="d-flex align-stretch"
        >
          <GlassCard
            type="content"
            custom-class="d-flex align-start flex-column justify-start"
          >
            <span
              :class="{
                h2: $vuetify.display.mdAndUp,
                h3: $vuetify.display.smAndDown,
              }"
            >
              Skills
            </span>
            <main-skills
              :class="{
                'mt-6': $vuetify.display.mdAndUp,
              }"
            />
          </GlassCard>
        </v-col>
        <v-col
          lg="6"
          cols="12"
          class="d-flex align-stretch"
        >
          <GlassCard
            type="content"
            custom-class="d-flex align-start flex-column justify-start"
          >
            <span
              :class="{
                h2: $vuetify.display.mdAndUp,
                h3: $vuetify.display.smAndDown,
              }"
            >
              Work Experience
            </span>
            <working-history class="mt-6" />
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
