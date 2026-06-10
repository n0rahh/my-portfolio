<template>
  <Transition name="intro-fade">
    <div
      v-if="visible"
      class="intro-overlay"
      role="presentation"
      aria-hidden="true"
      @click="finish"
    >
      <div class="intro-terminal">
        <span class="intro-terminal__typed">&gt;&nbsp;vlad.dev</span>
        <span class="intro-terminal__cursor">_</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
  // Full-page intro shown on every hard page load (first entry or reload —
  // SPA navigations never remount the app, so it won't replay in-session).
  // Click anywhere skips it; reduced-motion users skip it automatically.
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  const INTRO_DURATION_MS = 1700;

  const emit = defineEmits(['done']);

  const visible = ref(true);
  let timer = 0;

  const finish = () => {
    if (!visible.value) return;
    visible.value = false;
    emit('done');
  };

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
      return;
    }
    timer = setTimeout(finish, INTRO_DURATION_MS);
  });

  onBeforeUnmount(() => clearTimeout(timer));
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  .intro-overlay {
    position: fixed;
    inset: 0;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background:
      radial-gradient(circle at 20% 20%, $bg-glow-cyan, transparent 50%),
      radial-gradient(circle at 80% 80%, $bg-glow-magenta, transparent 60%),
      linear-gradient(135deg, $bg-base-1, $bg-base-2, $bg-base-3);
  }

  .intro-terminal {
    display: flex;
    align-items: baseline;
    // Fixed width (10ch text + 1ch cursor): the centered container never
    // resizes while typing, so the animation causes no layout shifts.
    width: 11ch;
    font-size: clamp(28px, 5vw, 56px);
    font-weight: 600;
    color: $white;
    text-shadow: 0 0 24px $cyan-5;

    &__typed {
      overflow: hidden;
      white-space: nowrap;
      width: 10ch;
      animation: intro-typing 0.9s steps(10, end) 0.15s both;
    }

    &__cursor {
      color: $cyan;
      animation: intro-blink 0.8s step-end infinite;
    }
  }

  @keyframes intro-typing {
    from {
      width: 0;
    }

    to {
      width: 10ch;
    }
  }

  @keyframes intro-blink {
    50% {
      opacity: 0;
    }
  }

  .intro-fade-leave-active {
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;
  }

  .intro-fade-leave-to {
    opacity: 0;
    transform: scale(1.05);
  }
</style>
