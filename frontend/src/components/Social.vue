<template>
  <div class="social">
    <v-list class="social-wrapper">
      <v-list-item
        v-for="(item, i) in socials"
        :key="i"
        class="social-wrapper__item"
      >
        <v-btn
          variant="plain"
          :href="item.link"
          target="_blank"
          class="link"
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
  import { ref } from 'vue';

  const socials = ref([
    {
      text: 'Github',
      icon: 'mdi-github',
      link: 'https://github.com/n0rahh',
    },
    {
      text: 'LinkedIn',
      icon: 'mdi-linkedin',
      link: 'https://www.linkedin.com/in/vlad-herasymovych/',
    },
  ]);
</script>

<style lang="scss" scoped>
  @use '@/styles/colors.scss' as *;

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
          margin-bottom: 8px;
          padding: 0;
        }
      }
    }
  }
</style>
