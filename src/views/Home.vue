<template>
  <v-container fluid>
    <banner />
    <projects />
    <skills />
    <email-form />
  </v-container>
</template>

<script>
import Banner from '@/components/home/Banner.vue';
import Projects from '@/components/home/Projects.vue';
import Skills from '@/components/home/Skills.vue';
import EmailForm from '@/components/EmailForm.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Projects,
    Skills,
    EmailForm,
  },
  data() {
    return {
            
    };
  },
};
</script>