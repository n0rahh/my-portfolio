<template>
  <SectionContainer id="contact">
    <GlassCard
      v-reveal
      title="Let's stay in touch!"
    >
      <EmailForm />
    </GlassCard>
  </SectionContainer>
</template>

<script setup>
  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import GlassCard from '@/components/UI/GlassCard.vue';
  import EmailForm from '@/components/EmailForm.vue';
</script>
