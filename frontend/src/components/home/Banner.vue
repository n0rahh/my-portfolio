<template>
  <SectionContainer
    id="banner"
    full-height
  >
    <GlassCard>
      <div :class="['d-flex flex-column intro intro--text', { playing: introDone }]">
        <span class="h0">Hello,</span>
        <span class="h0">I am Vlad</span>
        <span class="mt-8 subtitle">Software Engineer | Web Developer | Tech Enthusiast</span>
      </div>
      <div :class="['photo-container intro intro--photo', { playing: introDone }]">
        <v-img
          :src="avatar"
          alt="Portrait of Vlad Herasymovych"
          class="my-photo"
          width="400"
          height="400"
          eager
        />
      </div>
    </GlassCard>
  </SectionContainer>
</template>

<script setup>
  import { inject, ref } from 'vue';

  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import GlassCard from '@/components/UI/GlassCard.vue';
  import avatar from '@/assets/imgs/avatar.webp';

  // Wait for the intro overlay before playing the entrance animation.
  const introDone = inject('introDone', ref(true));
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  // First-load entrance: text slides in from the left, photo scales in.
  // Paused (held on the hidden first frame) until the intro overlay is done.
  .intro {
    animation-duration: 0.9s;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-fill-mode: both;
    animation-play-state: paused;

    &.playing {
      animation-play-state: running;
    }

    &--text {
      animation-name: intro-slide;
    }

    &--photo {
      animation-name: intro-scale;
      animation-delay: 0.15s;
    }
  }

  @keyframes intro-slide {
    from {
      opacity: 0;
      transform: translateX(-32px);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes intro-scale {
    from {
      opacity: 0;
      transform: scale(0.92);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .intro {
      animation: none;
    }
  }

  .subtitle {
    color: $text-inactive;
    font-size: clamp(16px, 2vw, 24px);

    @include down($bp-md) {
      text-align: center;
    }
  }

  .photo-container {
    width: clamp(200px, 28vw, 400px);
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;

    background-color: $deep-blue-37;
    backdrop-filter: blur(25px) saturate(150%);
    -webkit-backdrop-filter: blur(25px) saturate(150%);
    border: 1px solid $white-15;
    box-shadow:
      0 0 25px $cyan-dark,
      inset 0 0 25px $blue-glow-02;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      border-radius: 50%;
      background: radial-gradient(circle, $cyan-neon-3, transparent 60%);
      filter: blur(50px);
      opacity: 0.8;
      z-index: 1;
    }

    .my-photo {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 2px 10px $black-25;
      z-index: 2;
    }

    @include down($bp-md) {
      margin-bottom: $space-lg;
    }
  }
</style>
