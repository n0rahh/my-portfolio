<template>
  <v-container fluid>
    <banner />
    <projects />
    <skills />
    <contact />
  </v-container>
</template>

<script>
import Banner from '@/components/home/Banner.vue';
import Projects from '@/components/home/Projects.vue';
import Skills from '@/components/home/Skills.vue';
import Contact from '@/components/home/Contact.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Projects,
    Skills,
    Contact,
  },
  data() {
    return {
            
    };
  },
};
</script>