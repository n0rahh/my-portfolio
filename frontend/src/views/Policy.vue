<template>
  <div class="policy-page">
    <SectionContainer>
      <GlassCard title="Privacy policy">
        <div class="d-flex flex-column">
          <span class="p2 mt-8">
            This privacy policy outlines the types of personal information that is received and
            collected by this website and how it is used.
          </span>
          <div class="p2 mt-8">
            <p
              v-for="pkt in policyPkts"
              :key="pkt.title"
            >
              <span>{{ pkt.title }}</span>
              <br />
              <br />
              <span class="formatted-text">{{ pkt.description }}</span>
            </p>
          </div>
        </div>
      </GlassCard>
    </SectionContainer>
  </div>
</template>

<script setup>
  import SectionContainer from '@/components/UI/SectionContainer.vue';
  import GlassCard from '@/components/UI/GlassCard.vue';

  const policyPkts = [
    {
      title: '§1. Data Controller',
      description:
        'The data controller for your personal data is Vlad Herasymovych. For any inquiries regarding the processing of your personal data, you can contact me at: vlad.herasymovychh@gmail.com.\n\n',
    },
    {
      title: '§2. Purpose and Legal Basis for Data Processing',
      description:
        'Your personal data provided through the contact form will be processed solely for the purpose of responding to your inquiry and for any further correspondence on this matter. The legal basis for this processing is my legitimate interest as the data controller (Art. 6(1)(f) of the GDPR), which involves managing and responding to requests sent via the contact form.\n\n',
    },
    {
      title: '§3. Scope of Processed Data',
      description:
        'I process the data you provide in the contact form: your name, email address, the content of your message, and any attached files. This data is essential for me to be able to respond to you.\n\n',
    },
    {
      title: '§4. Data Recipients',
      description:
        'Your personal data may be shared with entities whose services I use to operate this website and manage communication (e.g., my hosting provider, email service provider).\n\n',
    },
    {
      title: '§5. Data Retention Period',
      description:
        'Your personal data will be stored for the period necessary to respond to your inquiry and conduct any follow-up correspondence. After this period, the data may be archived for legal compliance purposes or deleted.\n\n',
    },
    {
      title: '§6. Your Rights',
      description:
        "You have the following rights concerning your personal data:\n\n • The right to access your data (Art. 15 GDPR).\n • The right to rectification of your data (Art. 16 GDPR).\n • The right to erasure of your data ('right to be forgotten') (Art. 17 GDPR).\n • The right to restrict processing (Art. 18 GDPR).\n • The right to data portability (Art. 20 GDPR).\n • The right to object to processing (Art. 21 GDPR).\n • The right to lodge a complaint with a supervisory authority (e.g., the President of the Personal Data Protection Office in Poland) if you believe that the processing of your data violates the GDPR.\n\n Providing your data is voluntary, but necessary to send a message through the contact form.\n\n",
    },
    {
      title: '§7. Data Security',
      description:
        'I ensure that I apply appropriate technical and organizational measures to secure your personal data.\n\n',
    },
  ];
</script>

<style lang="scss" scoped>
  @use '@/styles/tokens.scss' as *;

  .policy-page {
    padding-top: $toolbar-offset;
  }

  .formatted-text {
    white-space: pre-wrap;
  }
</style>
