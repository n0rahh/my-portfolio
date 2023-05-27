<template>
  <v-container
    id="skills"
    class="container py-16"
  >
    <v-row>
      <v-col
        lg="5"
        cols="12"
        class="d-flex flex-column align-start"
      >
        <span
          v-bind="aosAttribute('fade-down', 200, 300, 'ease-in-out', 'center')"
          class="my-8"
          :class="{
            'h0': locale !== 'pl',
            'h-unique': locale === 'pl' || $vuetify.display.mdAndDown
          }"
        >{{ $t('HOME_PAGE.HOME_SKILLS.SKILLS_TITLE') }}</span>

        <main-skills />
      </v-col>
      <v-col
        v-if="$vuetify.display.lgAndUp"
        cols="2"
        class="d-flex justify-center"
        v-bind="aosAttribute('flip-left', 300, 1000, 'ease-in-out', 'center')"
      >
        <span
          class="my-8"
          :class="{
            'h0': locale !== 'pl',
            'h-unique': locale === 'pl'
          }"
        >&amp;</span>
      </v-col>

      <v-col
        lg="5"
        cols="12"
        class="d-flex flex-column"
        :class="{
          'align-end': $vuetify.display.lgAndUp,
          'mt-6': $vuetify.display.mdAndDown,
        }"
      >
        <span
          v-bind="aosAttribute('fade-down', 200, 300, 'ease-in-out', 'center')"
          class="my-8"
          :class="{
            'h0': locale !== 'pl',
            'h-unique': locale === 'pl' || $vuetify.display.mdAndDown
          }"
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
import GetLocale from '@/locales/helpers/get-locale';

export default {
  name: 'Skills',
  components: {
    MainSkills,
    WorkingHistory,
  },
  mixins: [aosMixin],
  computed: {
    locale() {
      return GetLocale.currentLocale;
    },
  },
};
</script>
