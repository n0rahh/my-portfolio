<template>
  <v-container
    id="contact"
    class="container"
  >
    <v-row class="mb-8">
      <v-col
        cols="12"
        class="d-flex flex-column"
      >
        <span class="h0 mb-4">Keep in touch!</span>
        <span class="p1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestias voluptas earum voluptatum vel eius veniam sint fugit architecto ex, cupiditate perspiciatis, placeat quaerat voluptatem? Voluptas odit corporis aliquam accusantium!</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        offset="6"
        cols="6"
      >
        <email-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EmailForm from '@/components/EmailForm.vue';
export default {
  name: 'Contact',
  components: {
    EmailForm,
  },
};
</script>