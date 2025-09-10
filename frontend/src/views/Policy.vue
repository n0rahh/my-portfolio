<template>
  <v-container
    class="container pt-16 mt-8"
    :class="{
      'px-6': $vuetify.display.mdAndDown && !$vuetify.display.xs,
      'px-4': $vuetify.display.xs,
    }"
  >
    <v-row>
      <v-col cols="12">
        <GlassCard title="Privacy policy">
          <div class="d-flex flex-column">
            <span class="p2 mt-8">
              This privacy policy outlines the types of personal information that is received and
              collected by this website and how it is used.
            </span>
            <div class="p2 mt-8">
              <p
                v-for="(pkt, index) in policyPkts"
                :key="index"
              >
                <span>{{ pkt.title }}</span>
                <br />
                <span class="formatted-text">{{ pkt.description }}</span>
              </p>
            </div>
          </div>
        </GlassCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import GlassCard from '@/components/UI/GlassCard.vue';

  const policyPkts = [
    {
      title: '1. Data Collection',
      description:
        "The website collects only the personal data provided voluntarily by the user through the contact form. This includes the user's name, email address, message, and optional file attachment. The website does not collect any other personal data or information.\n\n",
    },
    {
      title: '2. Data Usage',
      description:
        "The collected personal data is used solely for the purpose of responding to the user's inquiry or request. The website does not share, sell, or distribute any personal data to third parties. The website does not use personal data for marketing or advertising purposes.\n\n",
    },
    {
      title: '3. Data Retention',
      description:
        "Personal data processed through the contact form will be stored for the period necessary to respond to the user's inquiry or request, as well as for any further contact related to that inquiry. After this time, the data will be deleted.\n\n",
    },
    {
      title: '4. Recipients of personal data',
      description:
        'Personal data of users of the portfolio website are not disclosed to any other entities, except where required by law.\n\n',
    },
    {
      title: '5. Cookies and Other Technologies',
      description:
        "The portfolio website does not use cookies or other tracking technologies. It only stores the locale value in localStorage to remember the user's selected language. This information is used solely to display the website in the selected language and is not shared with any other parties. Users can delete this value from localStorage at any time by setting the language to default or by clearing the localStorage completely.\n\n",
    },
  ];
</script>

<style lang="scss" scoped>
  .formatted-text {
    white-space: pre-wrap;
  }
</style>
