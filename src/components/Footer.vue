<template>
  <v-footer class="footer mt-8">
    <v-row>
      <v-divider
        thickness="2"
        color="white"
      />
      <v-col
        cols="12"
        class="py-0 mt-6 d-flex justify-center"
      >
        <span class="p3">© Copyright 2024. Designed &amp; Built by Vlad Herasymovych</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss" scoped>
@import '@/styles/colors';

.footer {
  height: 100px;
  background-color: $primary;
}
</style>