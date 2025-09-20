<template>
  <SectionContainer
    id="banner"
    class="mt-n16"
  >
    <v-row>
      <v-col cols="12">
        <GlassCard>
          <div class="d-flex flex-column">
            <span
              :class="{
                h0: $vuetify.display.lgAndUp,
                h1: $vuetify.display.mdAndDown,
                h2: $vuetify.display.smAndDown,
              }"
            >
              Hello,
            </span>
            <div class="d-flex flex-column">
              <span
                :class="{
                  h0: $vuetify.display.lgAndUp,
                  h1: $vuetify.display.mdAndDown,
                  h2: $vuetify.display.smAndDown,
                }"
              >
                I am Vlad
              </span>
              <span class="mt-8 subtitle">
                Software Engineer | Web Developer | Tech Enthusiast
              </span>
            </div>
          </div>
          <div class="photo-container">
            <v-img
              :src="avatar"
              alt="My Photo"
              class="my-photo"
            />
          </div>
        </GlassCard>
      </v-col>
    </v-row>
  </SectionContainer>
</template>

<script setup>
  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import GlassCard from '@/components/UI/GlassCard.vue';
  import avatar from '@/assets/imgs/avatar.png';
</script>

<style lang="scss" scoped>
  @use '@/styles/colors.scss' as *;

  .subtitle {
    color: $text-inactive;
    font-size: 24px;

    @media (max-width: 1024px) {
      font-size: 22px;
    }

    @media (max-width: 960px) {
      text-align: center;
      font-size: 20px;
    }

    @media (max-width: 600px) {
      text-align: center;
      font-size: 16px;
    }
  }

  .photo-container {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    background-color: $deep-blue-37;
    backdrop-filter: blur(25px) saturate(150%);
    -webkit-backdrop-filter: blur(25px) saturate(150%);
    border: 1px solid $white-15;
    box-shadow:
      0 0 25px $cyan-dark,
      inset 0 0 25px $blue-glow-02;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      border-radius: 50%;
      background: radial-gradient(circle, $cyan-neon-3, transparent 60%);
      filter: blur(50px);
      opacity: 0.8;
      z-index: 1;
    }

    .my-photo {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 2px 10px $black-25;
      z-index: 2;
    }

    @media (max-width: 1300px) {
      width: 300px;
      height: fit-content;
    }

    @media (max-width: 960px) {
      width: 250px;
      height: 250px;
      margin-bottom: 24px;
    }

    @media (max-width: 600px) {
      width: 200px;
      height: 200px;
      margin-bottom: 24px;
    }
  }
</style>
