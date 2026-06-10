// `v-reveal` — fades and slides an element in the first time it enters the
// viewport. Usage: `v-reveal` or `v-reveal="{ delay: 150 }"`.
// Skipped entirely when the user prefers reduced motion.

let observer = null;

const ensureObserver = () => {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
  }
  return observer;
};

export const reveal = {
  mounted(el, binding) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.classList.add('reveal');
    if (binding.value?.delay) {
      el.style.setProperty('--reveal-delay', `${binding.value.delay}ms`);
    }
    ensureObserver().observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
