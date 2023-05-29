<template>
  <v-container
    class="container py-16"
    :class="{
      'px-6': $vuetify.display.mdAndDown && !$vuetify.display.xs,
      'px-4': $vuetify.display.xs
    }"
  >
    <v-row>
      <v-col cols="12">
        <span class="h2">{{ $t('POLICY.TITLE') }}</span>
        <br><br>
        <span class="p2 mt-16">{{ $t('POLICY.DESCRIPTION') }}</span>
        <div class="p2 mt-8">
          <p
            v-for="(pkt, index) in policyPkts"
            :key="index"
          >
            <span>{{ pkt.title }}</span>
            <br>
            <span class="formatted-text">{{ formattedText(pkt.description) }}</span>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Policy',
  computed: {
    policyPkts() {
      return [
        {
          title: this.$t('POLICY.PKTS.TITLE_1'),
          description: this.$t('POLICY.PKTS.DESCRIPTION_1'),
        },
        {
          title: this.$t('POLICY.PKTS.TITLE_2'),
          description: this.$t('POLICY.PKTS.DESCRIPTION_2'),
        },
        {
          title: this.$t('POLICY.PKTS.TITLE_3'),
          description: this.$t('POLICY.PKTS.DESCRIPTION_3'),
        },
        {
          title: this.$t('POLICY.PKTS.TITLE_4'),
          description: this.$t('POLICY.PKTS.DESCRIPTION_4'),
        },
        {
          title: this.$t('POLICY.PKTS.TITLE_5'),
          description: this.$t('POLICY.PKTS.DESCRIPTION_5'),
        },
      ];
    },
  },
  methods: {
    formattedText(text) {
      return text.replace(/<br>/g, '\n');
    },
  },
};
</script>

<style lang="scss" scoped>
.formatted-text {
  white-space: pre-wrap;
}
</style>
