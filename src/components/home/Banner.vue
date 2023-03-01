<template>
  <v-container class="mt-n16 container">
    <v-row>
      <v-col 
        cols="10"
        class="wrapper"
      >
        <div class="wrapper-static">
          <span class="h0">
            Hello, 
            <br>I am
          </span>
        </div>
        <div class="wrapper-animation">
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
      </v-col>
    </v-row>
  </v-container>
</template>

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
    margin-left: -2rem;
    margin-bottom: 1.5rem;
    div>span {
      height: 5.31rem;
      margin-bottom: 5.31rem;
      display: inline-block;
      padding-left: 0.7rem;
    }
    div {
      &:first-child {
        animation: text-animation 8s infinite;
      }
    }
    .first {
      span {
        background-color: $primary;
      }
    }
    .second {
      span {
        background-color: $secondary;
      }
    }
    .third {
      span {
        background-color: $tertiary;
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