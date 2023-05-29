<template>
  <v-container
    id="banner"
    class="mt-n16 container"
    v-bind="aosAttribute('fade-right', 300, 800, 'ease-in-out', 'center', 50)"
  >
    <v-row>
      <v-col 
        lg="10"
        cols="12"
        class="wrapper"
      >
        <div class="wrapper-static">
          <span :class="title">
            {{ $t('HOME_PAGE.HOME_BANNER.HELLO') }}
          </span>
          <span
            v-if="$vuetify.display.mdAndDown && !$vuetify.display.xs"
            :class="title"
            class="ml-8"
          >
            {{ $t('HOME_PAGE.HOME_BANNER.IM') }}
          </span>
          <div
            class="d-flex"
            :class="{
              'flex-column': $vuetify.display.smAndDown,
            }"
          >
            <span
              v-if="$vuetify.display.lgAndUp || $vuetify.display.xs"
              :class="title"
            >
              {{ $t('HOME_PAGE.HOME_BANNER.IM') }}
            </span>
            <span>
              <div
                class="wrapper-animation"
                :class="{
                  'ml-16': $vuetify.display.lgAndUp, 
                }"
              >
                <div class="first">
                  <span
                    class="l-3 subtitle"
                    :class="{
                      'h1': $vuetify.display.smAndUp, 
                      'h2': $vuetify.display.xs, 
                    }"
                  >
                    Vlad ✌️
                  </span>
                </div>
                <div class="second">
                  <span
                    class="l-3 subtitle"
                    :class="{
                      'h1': $vuetify.display.smAndUp, 
                      'h2': $vuetify.display.xs, 
                    }"
                  >
                    Fullstack 💽
                  </span>
                </div>
                <div class="third">
                  <span
                    class="l-3 subtitle"
                    :class="{
                      'h1': $vuetify.display.smAndUp, 
                      'h2': $vuetify.display.xs, 
                    }"
                  >
                    Web Developer💻
                  </span>
                </div>
              </div>
            </span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aosMixin from '@/helpers/animation';

export default {
  mixins: [aosMixin],
  computed: {
    title() {
      return this.$vuetify.display.lgAndUp ? 'h0' : this.$vuetify.display.smAndUp ? 'h-unique' : 'h1';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.container {
  height: 100vh;
  display: flex;
  align-items: center;
}

.wrapper {
  display: flex;
  align-items: flex-end;
  z-index: 1;
  &-animation {
    @media screen and (min-width: 650px) {
      height: 5.31rem;
    }
    @media screen and (max-width: 649px) {
      height: 3rem;
    }
    overflow: hidden;
    margin-top: 2rem;
    div>span {
      @media screen and (min-width: 650px) {
        height: 5.31rem;
        margin-bottom: 5.31rem;
      }
      @media screen and (max-width: 649px) {
        height: 3rem;
        margin-bottom: 3rem;
      }
      display: inline-block;
      padding-left: 0.7rem;
      border-radius: 8px;
    }
    div {
      &:first-child {
        animation: text-animation 8s infinite;
      }
    }
    .first {
      span {
        background-color: $banner-title-1;
      }
    }
    .second {
      span {
        background-color: $banner-title-2;
      }
    }
    .third {
      span {
        background-color: $banner-title-3;
      }
    }
  }
}

@media screen and (min-width: 650px) {
  @keyframes text-animation {
    0% {
      margin-top: 0;
    }
    10% {
      margin-top: 0;
    }
    20% {
      margin-top: -10.62rem;
    }
    30% {
      margin-top: -10.62rem;
    }
    40% {
      margin-top: -21.24rem;
    }
    60% {
      margin-top: -21.24rem;
    }
    70% {
      margin-top: -10.62rem;
    }
    80% {
      margin-top: -10.62rem;
    }
    90% {
      margin-top: 0;
    }  
    100% {
      margin-top: 0;
    }
  }
}
@media screen and (max-width: 649px) {
  @keyframes text-animation {
    0% {
      margin-top: 0;
    }
    10% {
      margin-top: 0;
    }
    20% {
      margin-top: -6rem;
    }
    30% {
      margin-top: -6rem;
    }
    40% {
      margin-top: -12rem;
    }
    60% {
      margin-top: -12rem;
    }
    70% {
      margin-top: -6rem;
    }
    80% {
      margin-top: -6rem;
    }
    90% {
      margin-top: 0;
    }  
    100% {
      margin-top: 0;
    }
  }
}
</style>