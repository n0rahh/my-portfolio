<template>
  <v-container fluid>
    <banner />
    <about />
    <projects />
    <skills />
    <contact />
  </v-container>
</template>

<script setup>
  import Banner from '@/components/home/Banner.vue';
  import About from '@/components/home/About.vue';
  import Projects from '@/components/home/Projects.vue';
  import Skills from '@/components/home/Skills.vue';
  import Contact from '@/components/home/Contact.vue';
</script>
