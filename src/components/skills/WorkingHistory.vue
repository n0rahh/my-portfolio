<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >
    <v-row class="d-flex justify-space-between pa-0 ma-0">
      <v-col cols="3">
        <v-tabs
          v-for="(work, index) in works"
          :key="index"
          v-model="tab"
          direction="vertical"
          color="primary"
        >
          <v-tab
            :value="`option-${index}`"
          >
            {{ work.company }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col
        offset="1"
        cols="8"
        class="pa-0 ma-0"
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
              <span class="h4 my-2">{{ work.date }}</span>
              <span class="p1">
                {{ work.description }}
              </span>
            </div>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WorkingHistory',
  data() {
    return {
      tab: 0,
      active: 0,
      works: [
        {
          company: 'Tutore (2)',
          position: 'Fullstack Web Developer',
          date: 'Junuary 2022 - Present',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati exercitationem deserunt quia, ea quasi optio et quae sed aut soluta doloremque voluptate voluptates. Iure eum dignissimos facilis fuga quos.',
        },
        {
          company: 'Tutore (1)',
          position: 'Technical Support Specialist',
          date: 'October 2021 - December 2021',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati exercitationem deserunt quia, ea quasi optio et quae sed aut soluta doloremque voluptate voluptates. Iure eum dignissimos facilis fuga quos.',
        },
        {
          company: 'Shumee',
          position: 'Sales Manager',
          date: 'March 2021 - September 2021',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati exercitationem deserunt quia, ea quasi optio et quae sed aut soluta doloremque voluptate voluptates. Iure eum dignissimos facilis fuga quos.',
        },
      ],
    };
  },
};
</script>