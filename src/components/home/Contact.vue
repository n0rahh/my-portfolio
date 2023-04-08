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
        <span
          v-bind="aosAttribute('fade-right', 300, 600, 'ease-in-out', 'center')"
          class="h0 mb-4"
        >{{ $t('HOME_CONTACT.TITLE') }}</span>
        <span
          v-bind="aosAttribute('fade-left', 300, 600, 'ease-in-out', 'center')"
          class="p1"
        >{{ $t('HOME_CONTACT.SUBTITLE') }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        offset="6"
        cols="6"
        v-bind="aosAttribute('fade-up', 300, 600, 'ease-in-out', 'center')"
      >
        <email-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EmailForm from '@/components/EmailForm.vue';
import aosMixin from '@/helpers/animation';

export default {
  name: 'Contact',
  components: {
    EmailForm,
  },
  mixins: [aosMixin],
};
</script>