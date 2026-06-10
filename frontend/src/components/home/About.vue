<template>
  <SectionContainer id="about">
    <GlassCard
      v-reveal
      title="A few words about me"
      type="main"
      custom-class="about-card"
    >
      <v-row
        class="w-100"
        align="center"
      >
        <v-col
          cols="12"
          lg="7"
        >
          <p class="p1 l-6">
            Hi, I’m Vlad 👋 — a fullstack web developer working mainly with Vue.js, React and
            Node.js/Nest.js. I enjoy solving real problems and building products that actually help
            people.
          </p>
          <p class="p1 l-6 mt-4">
            At Tutore I built onboarding flows, booking systems and internal automation for an
            educational platform. On the side I’ve shipped an apartment-rental website and an
            AI-powered quest bot for kids.
          </p>
          <p class="p1 l-6 mt-4">
            Always exploring something new — lately Python. I speak English, Polish and Ukrainian,
            which makes teamwork easy in international teams.
          </p>
        </v-col>
        <v-col
          cols="12"
          lg="5"
          class="d-flex justify-center"
        >
          <TerminalWindow
            title="vlad@portfolio:~"
            class="about-terminal"
          >
            <p class="terminal-command"><span class="prompt">&gt;</span> whoami</p>
            <p class="terminal-output">fullstack web developer</p>
            <p class="terminal-command"><span class="prompt">&gt;</span> stack --main</p>
            <p class="terminal-output">vue · react · node/nest</p>
            <p class="terminal-command"><span class="prompt">&gt;</span> languages</p>
            <p class="terminal-output">english · polish · ukrainian</p>
            <p class="terminal-command"><span class="prompt">&gt;</span> status</p>
            <p class="terminal-output">always learning<span class="terminal-cursor">_</span></p>
          </TerminalWindow>
        </v-col>
      </v-row>
    </GlassCard>
  </SectionContainer>
</template>

<script setup>
  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import GlassCard from '@/components/UI/GlassCard.vue';
  import TerminalWindow from '@/components/UI/TerminalWindow.vue';
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  // The glass card centers text on small screens; prose reads better
  // left-aligned.
  :deep(.about-card) {
    @include down($bp-md) {
      text-align: left;
    }
  }

  .about-terminal {
    max-width: 420px;
  }
</style>
