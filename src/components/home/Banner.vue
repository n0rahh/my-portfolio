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
            v-if="$vuetify.display.mdAndDown"
            :class="title"
            class="ml-8"
          >
            {{ $t('HOME_PAGE.HOME_BANNER.IM') }}
          </span>
          <div class="d-flex">
            <span
              v-if="$vuetify.display.lgAndUp"
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
                  <span class="h1 l-3 subtitle">
                    Vlad ✌️
                  </span>
                </div>
                <div class="second">
                  <span class="h1 l-3 subtitle">
                    Fullstack 💽
                  </span>
                </div>
                <div class="third">
                  <span class="h1 l-3 subtitle">
                    Web Developer 💻
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
      return this.$vuetify.display.lgAndUp ? 'h0' : 'h-unique';
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
    height: 5.31rem;
    overflow: hidden;
    margin-top: 2rem;
    div>span {
      height: 5.31rem;
      margin-bottom: 5.31rem;
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

</style>