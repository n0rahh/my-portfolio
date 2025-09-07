<template>
  <SectionContainer id="about">
    <v-row>
      <v-col
        class="d-flex flex-column justify-center"
        cols="12"
      >
        <GlassCard
          title="A few words about me"
          type="main"
        >
          <GlassCard
            type="content"
            class="px-8"
          >
            <div class="d-flex flex-column">
              <p class="p1">
                Hi, I’m Vlad 👋
                <br />
                <br />
                I’m a Fullstack Web Developer working mainly with Vue.js, React, and
                Node.js/Nest.js. I enjoy solving problems and building products that actually help
                people.
                <br />
                <br />
                I’ve worked on an educational platform at Tutore, where I built onboarding flows,
                booking systems, and automated processes for teachers and staff. I also created a
                website for an apartment rental company, and developed an AI-powered quest bot for
                kids.
                <br />
                <br />
                I like exploring new tools (lately Python), and I believe in continuous learning. I
                speak English, Polish, Ukrainian, and Russian, which makes teamwork and
                communication much easier.
              </p>
            </div>
          </GlassCard>
          <GlassCard
            v-if="$vuetify.display.lgAndUp"
            type="content"
            class="px-8"
          >
            <v-img
              :src="skills"
              alt="Skills"
              width="300"
            />
          </GlassCard>
        </GlassCard>
      </v-col>
    </v-row>
  </SectionContainer>
</template>

<script setup>
  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import GlassCard from '@/components/UI/GlassCard.vue';
  import skills from '@/assets/imgs/skills.png';
</script>
