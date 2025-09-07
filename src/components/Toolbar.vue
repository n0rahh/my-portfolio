<template>
  <v-app-bar
    flat
    class="toolbar"
  >
    <v-container class="toolbar-container">
      <a
        href="/"
        class="logo"
      >
        <div class="logo_rectangle" />
      </a>

      <div class="buttons d-flex align-center">
        <v-btn
          v-for="(item, i) in navigationList"
          :key="i"
          variant="text"
          color="white"
          class="p2"
          @click="scrollToSection(item.id)"
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          variant="text"
          color="white"
          class="p2"
          @click="openCV"
        >
          CV
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
  const navigationList = [
    {
      title: 'Main',
      name: 'Home',
      id: 'banner',
    },
    {
      title: 'About',
      name: 'About',
      id: 'about',
    },
    {
      title: 'Projects',
      name: 'Projects',
      id: 'projects',
    },
    {
      title: 'Skills',
      name: 'Skills',
      id: 'skills',
    },
    {
      title: 'Contact',
      name: 'Contact',
      id: 'contact',
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCV = () => {
    window.open('Vlad Herasymovych CV.pdf', '_blank');
  };
</script>

<style lang="scss">
  @use '@/styles/colors.scss' as *;

  .toolbar {
    background: transparent !important;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    .v-toolbar__content {
      height: fit-content !important;
    }

    .toolbar-container {
      max-width: 1000px !important;
      border-radius: 0 0 32px 32px;
      background: $white-05;
      backdrop-filter: blur(25px);
      border: 1px solid $white-15;
      box-shadow: 0 8px 24px 0 $black-25;
      margin: 0 auto;
      padding: 16px 32px !important;
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
    }
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
