<template>
  <v-container
    id="skills"
    class="container py-16"
  >
    <v-row>
      <v-col
        cols="5"
        class="d-flex flex-column align-start"
      >
        <span
          v-bind="aosAttribute('fade-down', 200, 300, 'ease-in-out', 'center')"
          class="h0 my-8"
        >{{ $t('HOME_PAGE.HOME_SKILLS.SKILLS_TITLE') }}</span>

        <main-skills />
      </v-col>
      <v-col
        cols="2"
        class="d-flex justify-center"
        v-bind="aosAttribute('flip-left', 300, 1000, 'ease-in-out', 'center')"
      >
        <span class="h0 my-8">&amp;</span>
      </v-col>

      <v-col
        cols="5"
        class="d-flex flex-column align-end"
      >
        <span
          v-bind="aosAttribute('fade-down', 200, 300, 'ease-in-out', 'center')"
          class="h0 my-8"
        >{{ $t('HOME_PAGE.HOME_SKILLS.WORK_TITLE') }}</span>

        <working-history />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MainSkills from '@/components/skills/MainSkills.vue';
import WorkingHistory from '@/components/skills/WorkingHistory.vue';
import aosMixin from '@/helpers/animation';

export default {
  name: 'Skills',
  components: {
    MainSkills,
    WorkingHistory,
  },
  mixins: [aosMixin],
};
</script>
