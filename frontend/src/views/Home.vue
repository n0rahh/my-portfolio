<template>
  <div>
    <Banner />
    <About />
    <Projects :projects="projects" />
    <Skills
      :skills="skills"
      :skill-types="skillTypes"
      :works="works"
    />
    <Contact />
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  import { getExperiences, getProjects, getSkills } from '@/api/portfolio';
  import Banner from '@/components/home/Banner.vue';
  import About from '@/components/home/About.vue';
  import Projects from '@/components/home/Projects.vue';
  import Skills from '@/components/home/Skills.vue';
  import Contact from '@/components/home/Contact.vue';

  const projects = ref([]);
  const skills = ref([]);
  const skillTypes = ref([]);
  const works = ref([]);

  onMounted(async () => {
    const [skillsResult, projectsResult, experiencesResult] = await Promise.allSettled([
      getSkills(),
      getProjects(),
      getExperiences(),
    ]);

    if (skillsResult.status === 'fulfilled') {
      skills.value = skillsResult.value.skills;
      skillTypes.value = skillsResult.value.skillCategories;
    } else {
      console.error('Error fetching skills:', skillsResult.reason);
    }

    if (projectsResult.status === 'fulfilled') {
      projects.value = projectsResult.value.projects;
    } else {
      console.error('Error fetching projects:', projectsResult.reason);
    }

    if (experiencesResult.status === 'fulfilled') {
      works.value = experiencesResult.value.experiences;
    } else {
      console.error('Error fetching experiences:', experiencesResult.reason);
    }
  });
</script>
