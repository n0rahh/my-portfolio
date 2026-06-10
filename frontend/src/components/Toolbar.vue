<template>
  <v-app-bar
    flat
    class="toolbar"
  >
    <v-container
      v-if="isHomePage"
      class="toolbar-container"
    >
      <router-link
        to="/"
        class="logo"
        aria-label="Go to homepage"
        @click="scrollToTop"
      >
        <div class="logo_rectangle" />
      </router-link>

      <nav class="d-flex align-center">
        <div
          v-if="$vuetify.display.smAndUp"
          class="d-flex align-center"
        >
          <v-btn
            v-for="item in navigationList"
            :key="item.id"
            variant="text"
            color="white"
            class="p2"
            @click="scrollToSection(item.id)"
          >
            {{ item.title }}
          </v-btn>
        </div>
        <v-btn
          variant="text"
          color="white"
          class="p2"
          :href="cvUrl"
          target="_blank"
        >
          CV
        </v-btn>

        <v-menu v-if="$vuetify.display.xs">
          <template #activator="{ props: menuProps }">
            <v-btn
              icon
              variant="text"
              color="white"
              aria-label="Open navigation menu"
              v-bind="menuProps"
            >
              <v-icon :icon="mdiMenu" />
            </v-btn>
          </template>
          <v-list class="mobile-menu">
            <v-list-item
              v-for="item in navigationList"
              :key="item.id"
              @click="scrollToSection(item.id)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </nav>
    </v-container>

    <v-container
      v-else
      class="toolbar-container"
    >
      <v-btn
        variant="text"
        color="primary"
        class="back-button"
        @click="goBack"
      >
        <v-icon
          :icon="mdiArrowLeft"
          class="mr-2"
        />
        Back to Home Page
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { mdiArrowLeft, mdiMenu } from '@mdi/js';

  const route = useRoute();
  const router = useRouter();

  const navigationList = [
    { title: 'Main', id: 'banner' },
    { title: 'About', id: 'about' },
    { title: 'Projects', id: 'projects' },
    { title: 'Skills', id: 'skills' },
    { title: 'Contact', id: 'contact' },
  ];

  const cvUrl = encodeURI('/Vlad Herasymovych CV.pdf');

  const isHomePage = computed(() => route.name === 'Home');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    router.push({ name: 'Home' });
  };
</script>

<style lang="scss">
  @use '@/styles/tokens.scss' as *;

  .toolbar {
    background: transparent !important;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    // Vuetify clips toolbar content (overflow: hidden), which cuts the
    // container's soft shadow into a hard rectangle — let it overflow.
    overflow: visible !important;

    .v-toolbar__content {
      height: fit-content !important;
      overflow: visible;
    }

    .toolbar-container {
      max-width: 1000px !important;
      border-radius: 0 0 32px 32px;
      background: $white-05;
      backdrop-filter: blur(25px);
      border: 1px solid $white-15;
      box-shadow: 0 8px 24px 0 $black-25;
      margin: 0 auto;
      padding: $space-md $space-xl !important;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        position: relative;
        cursor: pointer;
        width: 43px;

        &_rectangle {
          position: absolute;
          height: 26px;
          width: 43px;
          top: 50%;
          background-color: $white;
          transform: translateY(-50%);
          border-radius: 3px;

          &:before {
            content: '>';
            display: block;
            position: absolute;
            color: $black;
            top: -50%;
            transform: translateY(10%);
            left: 15%;
            font-weight: 700;
            font-size: 27px;
          }

          &:after {
            content: '_';
            display: block;
            position: absolute;
            color: $black;
            bottom: -5%;
            right: 10%;
            font-weight: 700;
            font-size: 30px;
            animation: fade 2s infinite;
          }
        }
      }

      @include down($bp-sm) {
        padding: $space-xs $space-lg !important;
        border-radius: 0 0 24px 24px;
      }
    }

    @include down($bp-sm) {
      padding: 0 $space-sm !important;
    }
  }

  .mobile-menu {
    background: $bg-base-2 !important;
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }

    20% {
      opacity: 0;
    }

    40% {
      opacity: 0;
    }

    60% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
</style>
