<template>
  <v-footer
    id="footer"
    class="footer mt-8"
  >
    <v-row>
      <v-divider
        thickness="2"
        color="white"
      />
      <v-col
        cols="12"
        class="py-0 mt-6 d-flex justify-center"
      >
        <span class="p3"> © Copyright 2025. Designed &amp; Built by Vlad Herasymovych</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss" scoped>
  @use '@/styles/colors.scss' as *;

  .footer {
    height: 100px !important;
    background-color: transparent;
  }
</style>
