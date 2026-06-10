<template>
  <v-container
    fluid
    class="pa-0 dialog-container"
  >
    <GlassCard
      title="Job Details"
      type="main"
      customClass="d-flex flex-column pa-12"
    >
      <v-icon
        icon="mdi-close"
        class="close-icon"
        size="36"
        color="white"
        @click="emit('close')"
      />
      <span class="p2 w-600 mt-6">
        {{ description }}
      </span>
      <span
        v-for="(achievement, i) in achievements"
        :key="i"
        class="mt-4 achievement-point"
      >
        {{ achievement }}
      </span>
    </GlassCard>
  </v-container>
</template>

<script setup>
  import GlassCard from '../UI/GlassCard.vue';

  const props = defineProps({
    description: {
      type: String,
      required: true,
    },
    achievements: {
      type: Array,
      required: true,
    },
  });

  const emit = defineEmits(['close']);
</script>

<style scoped lang="scss">
  .dialog-container {
    color: white;
  }

  .close-icon {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }

  .achievement-point {
    position: relative;
    padding-left: 20px;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      top: 0;
      font-size: 24px;
      line-height: 1;
    }
  }
</style>
