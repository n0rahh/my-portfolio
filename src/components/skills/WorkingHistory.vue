<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >
    <v-row class="d-flex justify-space-between pa-0 ma-0">
      <v-col
        cols="3"
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
        offset="1"
        cols="8"
        class="pa-0 ma-0"
        v-bind="aosAttribute('fade-left', 200, 600, 'ease-in-out', 'center')"
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
      works: [
        {
          company: 'Tutore (2)',
          position: 'Fullstack Web Developer',
          date: 'Junuary 2022 - Present',
          description: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Iure eum dignissimos facilis fuga quos.',
            'Ad obcaecati exercitationem deserunt quia, ea quasi optio et quae sed aut soluta doloremque voluptate voluptates.',
          ],
        },
        {
          company: 'Tutore (1)',
          position: 'Technical Support Specialist',
          date: 'October 2021 - December 2021',
          description: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Iure eum dignissimos facilis fuga quos.',
            'Ad obcaecati exercitationem deserunt quia, ea quasi optio et quae sed aut soluta doloremque voluptate voluptates.',
          ],
        },
        {
          company: 'Shumee',
          position: 'Sales Manager',
          date: 'March 2021 - September 2021',
          description: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Iure eum dignissimos facilis fuga quos.',
            'Ad obcaecati exercitationem deserunt quia, ea quasi optio et quae sed aut soluta doloremque voluptate voluptates.',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.date {
  color: $light-grey;
}
</style>