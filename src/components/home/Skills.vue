<template>
  <v-container class="container py-16">
    <v-row>
      <v-col
        cols="5"
        class="d-flex flex-column align-start"
      >
        <span class="h0 my-8">{{ $t('HOME_PAGE.HOME_SKILLS.SKILLS_TITLE') }}</span>

        <main-skills />
      </v-col>
      <v-col
        cols="2"
        class="d-flex justify-center"
      >
        <span class="h0 my-8">&amp;</span>
      </v-col>

      <v-col
        cols="5"
        class="d-flex justify-end"
      >
        <span class="h0 my-8">{{ $t('HOME_PAGE.HOME_SKILLS.WORK_TITLE') }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MainSkills from '@/components/skills/MainSkills.vue';

export default {
  name: 'Skills',
  components: {
    MainSkills,
  },
  
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>