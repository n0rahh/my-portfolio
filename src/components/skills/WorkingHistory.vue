<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >
    <v-row class="d-flex justify-space-between pa-0 ma-0">
      <v-col
        cols="4"
        v-bind="aosAttribute('fade-up', 200, 600, 'ease-in-out', 'center')"
      >
        <v-tabs
          v-for="(work, index) in works"
          :key="index"
          v-model="tab"
          direction="vertical"
          color="primary"
        >
          <v-tab
            color="rgb(41, 255, 201)"
            :value="`option-${index}`"
            class="mb-4"
          >
            {{ work.company }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col
        cols="8"
        class="pa-0 ma-0"
        v-bind="aosAttribute(fadeOption, 200, 600, 'ease-in-out', 'center')"
      >
        <v-window
          v-model="tab"
          class="pa-0 ma-0"
        >
          <v-window-item
            v-for="(work, index) in works"
            :key="index"
            :value="`option-${index}`"
          >
            <div class="d-flex flex-column">
              <span class="h3 w-600">{{ work.position }}</span>
              <span class="p1 my-2 date">{{ work.date }}</span>
  
              <span
                v-for="(item, i) in work.description"
                :key="i"
                class="p1 mb-3"
              >
                • {{ item }}
              </span>
            </div>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aosMixin from '@/helpers/animation';

export default {
  name: 'WorkingHistory',
  mixins: [aosMixin],
  data() {
    return {
      tab: 0,
      active: 0,
      
    };
  },
  computed: {
    fadeOption() {
      return this.$vuetify.display.lgAndUp ? 'fade-left' : 'fade-down';
    },
    works() {
      return [
        {
          company: 'Tutore (2)',
          position: 'Fullstack Web Developer',
          date: this.$t('WORKING_HISTORY.TUTORE_IT.DATE'),
          description: [
            this.$t('WORKING_HISTORY.TUTORE_IT.DESCRIPTION.1'),
            this.$t('WORKING_HISTORY.TUTORE_IT.DESCRIPTION.2'),
            this.$t('WORKING_HISTORY.TUTORE_IT.DESCRIPTION.3'),
            this.$t('WORKING_HISTORY.TUTORE_IT.DESCRIPTION.4'),
            this.$t('WORKING_HISTORY.TUTORE_IT.DESCRIPTION.5'),
            this.$t('WORKING_HISTORY.TUTORE_IT.DESCRIPTION.6'),
            this.$t('WORKING_HISTORY.TUTORE_IT.DESCRIPTION.7'),
            this.$t('WORKING_HISTORY.TUTORE_IT.DESCRIPTION.8'),
            this.$t('WORKING_HISTORY.TUTORE_IT.DESCRIPTION.9'),
          ],
        },
        {
          company: 'Tutore (1)',
          position: 'Technical Support Specialist',
          date: this.$t('WORKING_HISTORY.TUTORE_HELPDESK.DATE'),
          description: [
            this.$t('WORKING_HISTORY.TUTORE_HELPDESK.DESCRIPTION.1'),
            this.$t('WORKING_HISTORY.TUTORE_HELPDESK.DESCRIPTION.2'),
          ],
        },
        {
          company: 'Shumee',
          position: 'Sales Manager',
          date: this.$t('WORKING_HISTORY.SHUMEE.DATE'),
          description: [
            this.$t('WORKING_HISTORY.SHUMEE.DESCRIPTION.1'),
            this.$t('WORKING_HISTORY.SHUMEE.DESCRIPTION.2'),
            this.$t('WORKING_HISTORY.SHUMEE.DESCRIPTION.3'),
          ],
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.date {
  color: $light-grey;
}
</style>