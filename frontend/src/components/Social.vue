<template>
  <div class="social">
    <v-list
      class="social-wrapper"
      role="list"
    >
      <v-list-item
        v-for="item in socials"
        :key="item.text"
        class="social-wrapper__item"
        role="listitem"
      >
        <v-btn
          variant="plain"
          :href="item.link"
          target="_blank"
          rel="noopener"
          class="link"
          :aria-label="`Visit ${item.text}`"
        >
          <v-icon
            class="icon"
            :icon="item.icon"
          />
        </v-btn>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
  import { mdiGithub, mdiLinkedin } from '@mdi/js';

  const socials = [
    {
      text: 'Github',
      icon: mdiGithub,
      link: 'https://github.com/n0rahh',
    },
    {
      text: 'LinkedIn',
      icon: mdiLinkedin,
      link: 'https://www.linkedin.com/in/vlad-herasymovych/',
    },
  ];
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  .social {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 100;

    .social-wrapper {
      background: transparent;

      &__item {
        .icon {
          margin-left: 10px;
          color: $black;
          background: $white;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          font-size: 36px;
        }

        .link {
          height: 56px;
          width: 56px;
          margin-bottom: $space-xs;
          padding: 0;
        }
      }
    }
  }
</style>
