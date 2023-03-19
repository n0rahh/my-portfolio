<template>
    <banner />
    <projects />
</template>

<script>
import Banner from '@/components/home/Banner.vue';
import Projects from '@/components/home/Projects.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Projects,
  },
  data() {
    return {
            
    };
  },
};
</script>