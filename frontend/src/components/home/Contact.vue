<template>
  <SectionContainer id="contact">
    <v-row>
      <v-col cols="12">
        <GlassCard title="Let's stay in touch!">
          <EmailForm />
        </GlassCard>
      </v-col>
    </v-row>
  </SectionContainer>
</template>

<script setup>
  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import GlassCard from '@/components/UI/GlassCard.vue';
  import EmailForm from '@/components/EmailForm.vue';
</script>
