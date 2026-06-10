<template>
  <v-app
    theme="dark"
    class="app"
  >
    <vue-particles
      id="tsparticles"
      :options="options"
    />

    <toolbar />
    <social v-if="$vuetify.display.lgAndUp" />
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
  import { onMounted, onBeforeUnmount } from 'vue';
  import { useDisplay } from 'vuetify';
  import Toolbar from '@/components/Toolbar.vue';
  import Social from '@/components/Social.vue';
  import Footer from '@/components/Footer.vue';

  const display = useDisplay();

  const options = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ['#00f0ff', '#ff00ff', '#ffea00'] },
      links: {
        color: '#ffffff',
        distance: 180,
        enable: true,
        opacity: 0.3,
        width: 1.2,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'bounce',
        random: true,
        speed: 2.5,
        straight: false,
      },
      number: { density: { enable: true }, value: 100 },
      opacity: {
        value: { min: 0.2, max: 0.8 },
        animation: { enable: true, speed: 1, minimumValue: 0.2 },
      },
      shape: { type: ['circle', 'triangle', 'edge'] },
      size: { value: { min: 1, max: 6 }, animation: { enable: true, speed: 3, minimumValue: 1 } },
    },
    detectRetina: true,
  };

  const sections = ['banner', 'about', 'projects', 'skills', 'contact', 'footer'];
  let isScrolling = false;

  const scrollToSection = (direction) => {
    if (isScrolling) return;
    isScrolling = true;

    const scrollPosition = window.scrollY;
    const sectionPositions = sections.map((id) => {
      const el = document.getElementById(id);
      return el ? el.offsetTop : 0;
    });

    let targetIndex;
    if (direction > 0) {
      targetIndex = sectionPositions.findIndex((pos) => pos > scrollPosition + 5);
    } else {
      targetIndex = [...sectionPositions].reverse().findIndex((pos) => pos < scrollPosition - 5);
      if (targetIndex !== -1) targetIndex = sections.length - 1 - targetIndex;
    }

    if (targetIndex !== -1) {
      const targetTop = sectionPositions[targetIndex];
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }

    setTimeout(() => {
      isScrolling = false;
    }, 200);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    scrollToSection(e.deltaY);
  };

  onMounted(() => {
    if (display.mdAndDown.value) return;
    window.addEventListener('wheel', handleWheel, { passive: false });
  });
  onBeforeUnmount(() => {
    if (display.mdAndDown.value) return;
    window.removeEventListener('wheel', handleWheel);
  });
</script>

<style lang="scss">
  @use '@/styles/global.scss' as *;
  .v-main {
    margin: 0;
    background:
      radial-gradient(circle at 20% 20%, rgba(0, 240, 255, 0.15), transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.12), transparent 60%),
      radial-gradient(circle at 50% 50%, rgba(255, 234, 0, 0.1), transparent 70%),
      linear-gradient(135deg, #0a0f1e, #111827, #0b1220);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #fff;
  }
</style>
