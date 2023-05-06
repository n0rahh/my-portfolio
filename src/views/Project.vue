<template>
  <v-container
    fluid
    class="container-size"
  >
    <v-row>
      <v-col
        cols="5"
        class="d-flex flex-column"
        v-bind="aosAttribute('flip-right', 200, 300, 'ease-in-out', 'center')"
      >
        <span class="h1 w-600">Project title</span>
        <span class="p1 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quia facere quam dicta sint corrupti vel enim nisi illo laudantium voluptatem ducimus rem culpa iure, provident accusantium quae harum consequatur?
        </span>
        <v-tooltip text="Source code">
          <template #activator="{ props }">
            <v-btn
              class="mt-12 source-code"
              v-bind="props"
              rounded
              icon="mdi-file-code"
            />
          </template>
        </v-tooltip>
        <span class="h3 mt-12 mb-4">What I used:</span>
        <p
          v-for="(tag, index) in usedTechnologiesList"
          :key="index"
          class="p1 mt-6"
        >
          <span class="w-700">{{ tag.name }} - </span>
          <span>{{ tag.description }}</span>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aosMixin from '@/helpers/animation';

export default {
  name: 'Project',
  mixins: [aosMixin],
  data() {
    return {
      usedTechnologiesList: [
        {
          name: 'Vue',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
          name: 'i18n',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
          name: 'Firebase',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.container-size {
  height: 100vh;
  padding: 120px 220px;
}

.source-code {
  background-color: $secondary;
}
</style>