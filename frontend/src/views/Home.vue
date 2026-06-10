<template>
  <v-container fluid>
    <banner />
    <about />
    <projects :projects="projectsList" />
    <skills
      :skills="skills"
      :skill-types="skillTypes"
      :works="works"
    />
    <contact />
  </v-container>
</template>

<script setup>
  import { http } from '@/plugins/http';
  import { onMounted, ref } from 'vue';

  import Banner from '@/components/home/Banner.vue';
  import About from '@/components/home/About.vue';
  import Projects from '@/components/home/Projects.vue';
  import Skills from '@/components/home/Skills.vue';
  import Contact from '@/components/home/Contact.vue';

  const projectsList = ref([]);
  const skills = ref([]);
  const skillTypes = ref([]);
  const works = ref([]);

  const fetchProjects = async () => {
    try {
      const { data } = await http.get('/projects/all');
      projectsList.value = data.projects;
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const fetchSkills = async () => {
    try {
      const { data } = await http.get('/skills/all');
      skills.value = data.skills;
      skillTypes.value = data.skillCategories;
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  const fetchExperiences = async () => {
    try {
      const { data } = await http.get('/experiences/all');
      works.value = data.experiences.map((work) => {
        return { ...work, showAchievements: false };
      });
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };

  onMounted(async () => {
    await Promise.all([fetchSkills(), fetchProjects(), fetchExperiences()]);
  });
</script>
