<template>
  <v-container
    id="about"
    class="container d-flex align-center"
    :class="{
      'height-80': $vuetify.display.lgAndUp,
      'height-60': $vuetify.display.mdAndDown && !$vuetify.display.smAndDown,
    }"
  >
    <v-row>
      <v-col
        class="d-flex flex-column justify-center"
        lg="6"
        sm="7"
        cols="12"
        v-bind="aosAttribute('fade-right', 150, 300, 'ease-in-out', 'center')"
      >
        <span class="h2 mb-8">Few words about me</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus praesentium quisquam cumque, tempore nostrum natus accusamus voluptatibus, dolores neque sequi consequatur quidem ducimus harum eius illum iusto culpa earum assumenda. <br>
          Ratione molestias qui sapiente a perspiciatis, quae impedit distinctio accusamus, corporis reprehenderit recusandae praesentium asperiores beatae excepturi voluptas veniam iusto esse ullam! Esse asperiores veniam eligendi earum assumenda aspernatur ipsam.
        </p>
      </v-col>
      <v-col
        lg="6"
        sm="5"
        cols="12"
        class="d-flex justify-center"
        v-bind="aosAttribute(fadeOption, 150, 600, 'ease-in-out', 'center')"
      >
        <v-img
          :src="require('@/assets/imgs/me-myself.jpg')"
          max-width="400"
          alt="its me"
          class="my-img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aosMixin from '@/helpers/animation';

export default {
  name: 'About',
  mixins: [aosMixin],  
  computed: {
    fadeOption() {
      return this.$vuetify.display.lgAndUp ? 'fade-left' : 'fade-down';
    },
  },
};
</script>

<style lang="scss" scoped>
.height-80 {
  height: 80vh;
}

.height-60 {
  height: 60vh;
}

.my-img {
  border-radius: 8px;
  transition: all .5s;
  &:hover {
    filter: contrast(160%) blur(2px);
    transform: scale(0.9);
  }
}
</style>