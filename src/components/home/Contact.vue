<template>
  <v-container class="container">
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