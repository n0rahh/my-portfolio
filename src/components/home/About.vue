<template>
  <v-container
    id="about"
    class="container d-flex align-center"
    :class="{
      'height-80': $vuetify.display.lgAndUp,
      'height-60': $vuetify.display.mdAndDown && !$vuetify.display.smAndDown,
    }"
  >
    <v-row>
      <v-col
        class="d-flex flex-column justify-center"
        lg="6"
        cols="12"
        v-bind="aosAttribute('fade-right', 150, 300, 'ease-in-out', 'center')"
      >
        <span class="h-unique-2 w-600 mb-8">{{
          $t('HOME_PAGE.HOME_ABOUT.TITLE')
        }}</span>
        <p class="description">
          {{ $t('HOME_PAGE.HOME_ABOUT.DESCRIPTION') }}
        </p>
      </v-col>
      <v-col
        v-if="$vuetify.display.lgAndUp || $vuetify.display.xs"
        lg="6"
        cols="12"
        class="d-flex justify-center"
        v-bind="aosAttribute(fadeOption, 150, 600, 'ease-in-out', 'center')"
      >
        <v-img
          :src="require('@/assets/imgs/me-myself.jpg')"
          max-width="400"
          alt="its me"
          class="my-img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aosMixin from '@/helpers/animation';

export default {
  name: 'About',
  mixins: [aosMixin],
  computed: {
    fadeOption() {
      return this.$vuetify.display.lgAndUp ? 'fade-left' : 'fade-down';
    },
  },
};
</script>

<style lang="scss" scoped>
.height-80 {
  height: 80vh;
}

.height-60 {
  height: 60vh;
}

.my-img {
  border-radius: 8px;
}

.description {
  white-space: pre-line;
}
</style>
