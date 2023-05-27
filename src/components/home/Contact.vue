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
          class="h0 mb-4 mt-6"
        >{{ $t('HOME_CONTACT.TITLE') }}</span>
        <span
          v-bind="aosAttribute(fadeOption, 300, 600, 'ease-in-out', 'center')"
          class="p1"
        >{{ $t('HOME_CONTACT.SUBTITLE') }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="5"
        class="d-flex justify-center contact-img"
        v-bind="aosAttribute('fade-right', 300, 600, 'ease-in-out', 'center')"
      >
        <v-img
          :src="require('@/assets/imgs/cat-with-glasses.jpg')"
          max-width="280"
        />
      </v-col>
      <v-col
        cols="6"
        v-bind="aosAttribute('fade-down', 300, 600, 'ease-in-out', 'center')"
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
  computed: {
    fadeOption() {
      return this.$vuetify.display.lgAndUp ? 'fade-left' : 'fade-right';
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-img {
  mix-blend-mode: exclusion;
  &:hover {
    mix-blend-mode: color-dodge;
  }
}
</style>