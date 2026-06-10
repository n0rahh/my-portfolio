<template>
  <canvas
    ref="canvasRef"
    class="app-background"
    aria-hidden="true"
  />
</template>

<script setup>
  // Lightweight replacement for tsparticles (~500 KB) — a connected-particles
  // field in ~3 KB. Pauses when the tab is hidden and renders a single static
  // frame for users preferring reduced motion.
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  const COLORS = ['#00f0ff', '#ff00ff', '#ffea00'];
  const LINK_DISTANCE = 160;
  const LINK_COLOR = '255, 255, 255';
  const POINTER_RADIUS = 150;
  const BASE_SPEED = 0.45;

  const canvasRef = ref(null);

  let ctx = null;
  let particles = [];
  let rafId = 0;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let reducedMotion = false;
  const pointer = { x: -1e4, y: -1e4 };

  const targetCount = () => Math.min(80, Math.round((width * height) / 22000));

  const createParticle = () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * BASE_SPEED * 2,
    vy: (Math.random() - 0.5) * BASE_SPEED * 2,
    radius: 1 + Math.random() * 2.2,
    alpha: 0.25 + Math.random() * 0.55,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  });

  const resize = () => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = targetCount();
    while (particles.length < count) particles.push(createParticle());
    particles.length = count;

    if (reducedMotion) draw();
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK_DISTANCE) {
          ctx.strokeStyle = `rgba(${LINK_COLOR}, ${0.22 * (1 - dist / LINK_DISTANCE)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const p of particles) {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };

  const step = () => {
    for (const p of particles) {
      const dx = p.x - pointer.x;
      const dy = p.y - pointer.y;
      const dist = Math.hypot(dx, dy);
      if (dist < POINTER_RADIUS && dist > 0) {
        const force = (1 - dist / POINTER_RADIUS) * 0.6;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      // Damp pointer-induced velocity back to cruising speed.
      const speed = Math.hypot(p.vx, p.vy);
      if (speed > BASE_SPEED * 2) {
        p.vx *= 0.96;
        p.vy *= 0.96;
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x <= 0 || p.x >= width) p.vx *= -1;
      if (p.y <= 0 || p.y >= height) p.vy *= -1;
      p.x = Math.min(Math.max(p.x, 0), width);
      p.y = Math.min(Math.max(p.y, 0), height);
    }

    draw();
    rafId = requestAnimationFrame(step);
  };

  const start = () => {
    if (!rafId && !reducedMotion) rafId = requestAnimationFrame(step);
  };

  const stop = () => {
    cancelAnimationFrame(rafId);
    rafId = 0;
  };

  const onVisibilityChange = () => (document.hidden ? stop() : start());

  const onPointerMove = (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  };

  const onPointerLeave = () => {
    pointer.x = -1e4;
    pointer.y = -1e4;
  };

  onMounted(() => {
    ctx = canvasRef.value.getContext('2d');
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    resize();
    reducedMotion ? draw() : start();

    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerout', onPointerLeave, { passive: true });
  });

  onBeforeUnmount(() => {
    stop();
    window.removeEventListener('resize', resize);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerout', onPointerLeave);
  });
</script>

<style lang="scss" scoped>
  .app-background {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 0;
  }
</style>
