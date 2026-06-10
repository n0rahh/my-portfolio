<template>
  <v-app
    theme="dark"
    class="app"
  >
    <IntroOverlay
      v-if="showIntro"
      @done="introDone = true"
    />
    <div
      class="app-gradient"
      aria-hidden="true"
    />
    <AppBackground />

    <Toolbar />
    <Social v-if="$vuetify.display.lgAndUp" />
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
  import { provide, ref } from 'vue';

  import IntroOverlay from '@/components/IntroOverlay.vue';
  import AppBackground from '@/components/AppBackground.vue';
  import Toolbar from '@/components/Toolbar.vue';
  import Social from '@/components/Social.vue';
  import Footer from '@/components/Footer.vue';

  // The intro only plays when the page is opened directly on the home route
  // (first entry or hard reload there) — never on deep links or SPA navigation.
  const showIntro = window.location.pathname === '/';

  // Sections (e.g. the banner) hold their entrance animation until the
  // intro overlay finishes.
  const introDone = ref(!showIntro);
  provide('introDone', introDone);
</script>

<style lang="scss">
  @use '@/styles/global.scss' as *;
  @use '@/styles/tokens.scss' as *;

  // The gradient lives on its own fixed layer instead of
  // `background-attachment: fixed` — the latter forces a full repaint on
  // every scroll frame and causes visible flicker.
  .app-gradient {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at 20% 20%, $bg-glow-cyan, transparent 50%),
      radial-gradient(circle at 80% 80%, $bg-glow-magenta, transparent 60%),
      radial-gradient(circle at 50% 50%, $bg-glow-yellow, transparent 70%),
      linear-gradient(135deg, $bg-base-1, $bg-base-2, $bg-base-3);
  }

  .v-main {
    margin: 0;
    background: transparent;
    color: $text-primary;
  }
</style>
