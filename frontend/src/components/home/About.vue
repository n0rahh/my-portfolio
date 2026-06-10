<template>
  <SectionContainer id="about">
    <GlassCard
      :title="aboutSectionTitle"
      type="main"
      customClass="d-flex align-stretch"
    >
      <v-row>
        <v-col
          cols="12"
          lg="8"
        >
          <GlassCard
            type="content"
            :class="{
              'px-8': $vuetify.display.mdAndUp,
            }"
            customClass="d-flex flex-column"
          >
            <p
              :class="{
                p1: $vuetify.display.smAndUp,
                p3: $vuetify.display.xs,
              }"
            >
              Hi, I’m Vlad 👋
              <br />
              <br />
              I’m a Fullstack Web Developer working mainly with Vue.js, React, and Node.js/Nest.js.
              I enjoy solving problems and building products that actually help people.
              <br />
              <br />
              I’ve worked on an educational platform at Tutore, where I built onboarding flows,
              booking systems, and automated processes for teachers and staff. I also created a
              website for an apartment rental company, and developed an AI-powered quest bot for
              kids.
              <br />
              <br />
              I like exploring new tools (lately Python), and I believe in continuous learning. I
              speak English, Polish, Ukrainian, which makes teamwork and communication much easier.
            </p>
          </GlassCard>
        </v-col>
        <v-col
          lg="4"
          class="d-flex justify-center"
        >
          <GlassCard
            v-if="$vuetify.display.lgAndUp"
            type="content"
            class="px-8"
          >
            <v-img
              :src="skills"
              alt="Skills"
              max-width="300"
            />
          </GlassCard>
        </v-col>
      </v-row>
    </GlassCard>
  </SectionContainer>
</template>

<script setup>
  import { computed } from 'vue';
  import { useDisplay } from 'vuetify';

  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import GlassCard from '@/components/UI/GlassCard.vue';
  import skills from '@/assets/imgs/skills.png';

  const display = useDisplay();

  const aboutSectionTitle = computed(() => {
    return display.smAndUp.value ? 'A few words about me' : 'About me';
  });
</script>
