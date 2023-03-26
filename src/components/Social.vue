<template>
  <v-container
    fluid
    class="social"
  >
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
          {{ item.text }} 
          <v-icon
            class="icon"
            size="x-large"
            :icon="item.icon"
          />
        </v-btn>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'Social',
  data() {
    return {
      socials: [
        {
          text: 'Github',
          icon: 'mdi-github',
          link: '#',
        },
        {
          text: 'LinkedIn',
          icon: 'mdi-linkedin',
          link: '#',
        },
        {
          text: 'Instagram',
          icon: 'mdi-instagram',
          link: '#',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.social {
  position: fixed;
  top: 40%;
  max-width: 30%;
  z-index: 0;
  .social-wrapper {
    padding: 0;
    background: transparent;
    transform: translate(-255px, 0);
    z-index: 1;
    &__item {
      margin: 0.5rem 0px;
      background: $primary;
      width: 300px;
      text-align: right;
      padding: 7px;
      border-radius: 0 30px 30px 0;
      transition: all 1s;
      .icon {
        margin-left: 10px;
        color: $black;
        background: $white;
        padding: 10px;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        font-size: 30px;
        transform: rotate(-360deg);
        transition: all 1s;
      }
      &:hover {
        transform: translate(110px, 0);
        background: $tertiary;
        .icon {
          color: $white;
          background: $black;
          transform: rotate(360deg);
          transition: all 1s;
        }
      }
      .link {
        padding-right: 7px;
        &:hover {
          color: $white;
        }
      }
    }
  }
}
</style>